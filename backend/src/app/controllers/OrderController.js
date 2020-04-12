import * as Yup from 'yup';
import { Op } from 'sequelize';

import Order from '../models/Order';
import Recipient from '../models/Recipient';
import Deliveryman from '../models/Deliveryman';
import File from '../models/File';

import Queue from '../../lib/Queue';
import OrderCreateMail from '../jobs/OrderCreationMail';

class OrderController {
  async index(req, res) {
    const { page = 1, product = '' } = req.query;
    const orders = await Order.findAndCountAll({
      where: {
        product: {
          [Op.or]: { [Op.iLike]: '%%', [Op.iLike]: `%${product}%` },
        },
      },
      attributes: [
        'id',
        'product',
        'start_date',
        'end_date',
        'canceled_at',
        'status',
        'updated_at',
      ],
      include: [
        {
          model: Recipient,
          as: 'recipient',
          attributes: [
            'id',
            'name',
            'street',
            'number',
            'complement',
            'state',
            'city',
            'zip_code',
          ],
        },
        {
          model: Deliveryman,
          as: 'deliveryman',
          attributes: ['id', 'name', 'email', 'avatar_id'],
          include: [
            {
              model: File,
              as: 'avatar',
              attributes: ['name', 'path', 'url'],
            },
          ],
        },
        {
          model: File,
          as: 'signature',
          attributes: ['name', 'path', 'url'],
        },
      ],
      order: ['updated_at'],
      limit: 10,
      offset: (page - 1) * 10,
    });

    return res.json(orders);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      recipient_id: Yup.number().required(),
      deliveryman_id: Yup.number().required(),
      product: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation failed!' });
    }

    const { id, recipient_id, deliveryman_id, product } = await Order.create(
      req.body
    );

    const deliveryman = await Deliveryman.findByPk(deliveryman_id);
    const recipient = await Recipient.findByPk(recipient_id);

    await Queue.add(OrderCreateMail.key, {
      deliveryman,
      recipient,
      product,
    });

    return res.json({
      id,
      product,
      recipient_id,
      deliveryman_id,
    });
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      recipient_id: Yup.number(),
      deliveryman_id: Yup.number(),
      product: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation failed!' });
    }

    const order = await Order.findByPk(req.params.orderId);

    if (order.canceled_at !== null) {
      return res
        .status(400)
        .json({ error: 'Update canceled orders are not permitetd!' });
    }

    if (order.end_date !== null) {
      return res
        .status(400)
        .json({ error: 'Update delivered orders are not permitetd!' });
    }

    if (
      order.start_date !== null &&
      req.body.deliveryman_id !== order.deliveryman_id
    ) {
      return res.status(400).json({
        error: 'Change a deliveryman after a pick up is not permitted',
      });
    }

    const { id, product, recipient_id, deliveryman_id } = await order.update(
      req.body
    );

    return res.json({
      id,
      product,
      recipient_id,
      deliveryman_id,
    });
  }

  async delete(req, res) {
    const order = await Order.findByPk(req.params.orderId);

    await order.destroy();

    return res.json({ message: 'Order deleted!' });
  }
}

export default new OrderController();
