import {
  isBefore,
  isAfter,
  startOfHour,
  setHours,
  startOfToday,
  endOfToday,
} from 'date-fns';
import { Op } from 'sequelize';
import Order from '../models/Order';
import Deliveryman from '../models/Deliveryman';
import Recipient from '../models/Recipient';
import File from '../models/File';

class DeliveryAvailableController {
  async index(req, res) {
    const { page = 1 } = req.query;
    const deliveryman = await Deliveryman.findByPk(req.params.deliverymanId);
    const orders = await Order.findAll({
      where: {
        deliveryman_id: deliveryman.id,
        canceled_at: null,
        end_date: null,
      },
      attributes: ['id', 'product', 'recipient_id'],
      include: [
        {
          model: Recipient,
          as: 'recipient',
          attributes: [
            'name',
            'street',
            'number',
            'complement',
            'state',
            'city',
            'zip_code',
          ],
        },
      ],
      limit: 10,
      offset: (page - 1) * 10,
    });

    return res.json(orders);
  }

  async updatePickUp(req, res) {
    const deliveryman = await Deliveryman.findByPk(req.params.deliverymanId);
    const order = await Order.findByPk(req.params.orderId);

    const startHour = startOfHour(setHours(new Date(), 8));
    const endHour = startOfHour(setHours(new Date(), 18));

    if (isBefore(startHour, new Date()) || isAfter(endHour, new Date())) {
      return res
        .status(400)
        .json({ error: 'Pick ups are only allowed between 08h and 18h!' });
    }

    const maxOrders = await Order.count({
      where: {
        deliveryman_id: deliveryman.id,
        start_date: { [Op.between]: [startOfToday(), endOfToday()] },
      },
    });

    if (maxOrders >= 5) {
      return res
        .status(400)
        .json({ error: 'You can pick up at maximum of 5 products a day!' });
    }

    await order.update({
      start_date: new Date(),
    });

    return res.json(order);
  }

  async updateDelivered(req, res) {
    const order = await Order.findByPk(req.params.orderId);

    const { originalname: name, filename: path } = req.file;

    const file = await File.create({
      name,
      path,
    });

    await order.update({
      signature_id: file.id,
      end_date: new Date(),
    });

    return res.json(order);
  }
}

export default new DeliveryAvailableController();
