import * as Yup from 'yup';
import DeliveryProblem from '../models/DeliveryProblem';
import Order from '../models/Order';
import Deliveryman from '../models/Deliveryman';
import Recipient from '../models/Recipient';

import Queue from '../../lib/Queue';
import OrderCancellationMail from '../jobs/OrderCancellationMail';

class DeliveryProblemController {
  async index(req, res) {
    const problems = await DeliveryProblem.findAll();
    return res.json(problems);
  }

  async indexOrder(req, res) {
    const order = await Order.findByPk(req.params.orderId);
    const problems = await DeliveryProblem.findAll({
      where: { order_id: order.id },
    });
    return res.json(problems);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      description: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation failed!' });
    }

    const order = await Order.findByPk(req.params.orderId);

    if (order.canceled_at !== null) {
      return res.status(400).json({ error: 'Order is already canceled!' });
    }

    if (order.end_date !== null) {
      return res.status(400).json({ error: 'Order is already delivered!' });
    }

    const { description } = req.body;

    const deliveryProblem = await DeliveryProblem.create({
      order_id: req.params.orderId,
      description,
    });
    return res.json(deliveryProblem);
  }

  async delete(req, res) {
    const problem = await DeliveryProblem.findByPk(req.params.problemId);
    const order = await Order.findByPk(problem.order_id);
    const deliveryman = await Deliveryman.findByPk(order.deliveryman_id);
    const recipient = await Recipient.findByPk(order.recipient_id);

    await Queue.add(OrderCancellationMail.key, {
      deliveryman,
      recipient,
      product: order.product,
    });

    await order.update({ where: { canceled_at: new Date() } });

    return res.json(order);
  }
}

export default new DeliveryProblemController();
