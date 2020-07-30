import { Op } from 'sequelize';
import Order from '../models/Order';
import Deliveryman from '../models/Deliveryman';
import Recipient from '../models/Recipient';

// Teste Git
class DeliveriesController {
  async index(req, res) {
    const { page = 1 } = req.query;
    const deliveryman = await Deliveryman.findByPk(req.params.deliverymanId);
    const orders = await Order.findAll({
      where: {
        deliveryman_id: deliveryman.id,
        end_date: { [Op.ne]: null },
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
      order: ['end_date'],
      limit: 10,
      offset: (page - 1) * 10,
    });

    return res.json(orders);
  }
}

export default new DeliveriesController();
