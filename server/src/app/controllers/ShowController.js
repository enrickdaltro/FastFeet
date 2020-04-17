import * as Yup from 'yup';
import { Op } from 'sequelize';

import File from '../models/File';
import Delivery from '../models/Delivery';
import Recipient from '../models/Recipient';
import Deliveryman from '../models/Deliveryman';

class ShowController {
  async index(req, res) {
    const { deliverymanId } = req.params;
    const { page = 1 } = req.query;

    const deliveryman = await Deliveryman.findByPk(deliverymanId);

    if (!deliveryman)
      return res.status(400).json({ error: 'Deliveryman not found' });

    const deliveries = await Delivery.findAll({
      where: {
        deliveryman_id: deliverymanId,
        canceled_at: null,
      },
      limit: 10,
      offset: (page - 1) * 20,
      attributes: [
        'id',
        'product',
        'canceled_at',
        'start_date',
        'end_date',
        'created_at',
      ],
      include: [
        {
          model: File,
          as: 'signature',
          attributes: ['id', 'name', 'path', 'url'],
        },
        {
          model: Deliveryman,
          as: 'deliveryman',
          attributes: ['id', 'name', 'email'],
          include: [
            {
              model: File,
              as: 'avatar',
              attributes: ['id', 'name', 'path', 'url'],
            },
          ],
        },
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
            'zipcode',
          ],
        },
      ],
    });

    return res.json(deliveries);
  }
}

export default new ShowController();
