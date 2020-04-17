import * as Yup from 'yup';
import { Op } from 'sequelize';

import Delivery from '../models/Delivery';
import Deliveryman from '../models/Deliveryman';
import File from '../models/File';
import Recipient from '../models/Recipient';

import RegistrationMail from '../jobs/RegistrationMail';
import Queue from '../../lib/Queue';

class DeliveryController {
  async index(req, res) {
    const { product, page = 1 } = req.query;

    const delivery = await Delivery.findAll({
      where: {
        product: {
          [Op.iLike]: `%${product}%`,
        },
      },
      attributes: ['id', 'product', 'start_date', 'end_date', 'canceled_at'],
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
            'zipcode',
          ],
        },
        {
          model: Deliveryman,
          as: 'deliveryman',
          attributes: ['id', 'name', 'email'],
          include: [
            {
              model: File,
              as: 'avatar',
              attributes: ['id', 'path', 'url'],
            },
          ],
        },
        {
          model: File,
          as: 'signature',
          attributes: ['id', 'path', 'url'],
        },
      ],
      order: [['created_at']],
      limit: 3,
      offset: (page - 1) * 4,
    });
    return res.json(delivery);
  }

  async show(req, res) {
    const { deliveryId } = req.params;
    const { page = 1 } = req.query;

    const delivery = await Delivery.findOne({
      where: {
        id: deliveryId,
      },
      attributes: ['id', 'product', 'start_date', 'end_date', 'canceled_at'],
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
            'zipcode',
          ],
        },
        {
          model: Deliveryman,
          as: 'deliveryman',
          attributes: ['id', 'name', 'email'],
          include: [
            {
              model: File,
              as: 'avatar',
              attributes: ['id', 'path', 'url'],
            },
          ],
        },
        {
          model: File,
          as: 'signature',
          attributes: ['id', 'path', 'url'],
        },
      ],
      order: [['created_at']],
      limit: 3,
      offset: (page - 1) * 3,
    });

    return res.json(delivery);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      recipient_id: Yup.number()
        .positive()
        .required(),
      deliveryman_id: Yup.number()
        .positive()
        .required(),
      product: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body)))
      return res.status(400).json({ error: 'Validation fails' });

    const { recipient_id, deliveryman_id, product } = req.body;

    const checkDeliveryExists = await Delivery.findOne({
      where: {
        recipient_id,
        deliveryman_id,
        product,
      },
    });

    if (checkDeliveryExists)
      return res.status(400).json({ error: 'Delivery already exists' });

    const deliveryman = await Deliveryman.findByPk(deliveryman_id);

    if (!deliveryman)
      return res.status(400).json({ error: 'Deliveryman not found' });

    const recipient = await Recipient.findByPk(recipient_id);

    if (!recipient)
      return res.status(400).json({ error: 'Recipient not found' });

    const delivery = await Delivery.create(req.body);

    await delivery.reload({
      attributes: ['id', 'product', 'canceled_at', 'start_date', 'end_date'],
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
            'zipcode',
          ],
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
          model: File,
          as: 'signature',
          attributes: ['id', 'name', 'path', 'url'],
        },
      ],
    });

    await Queue.add(RegistrationMail.key, {
      delivery,
    });

    return res.json(delivery);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      recipient_id: Yup.number(),
      deliveryman_id: Yup.number(),
      product: Yup.string(),
      signature_id: Yup.number(),
      canceled_at: Yup.string(),
      start_date: Yup.string(),
      end_date: Yup.string(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation Fails' });
    }

    const { deliveryId } = req.params;

    const delivery = await Delivery.findByPk(deliveryId);

    if (!delivery) {
      return res.status(401).json({ error: 'Delivery not found' });
    }

    const updatedDelivery = await delivery.update(req.body);

    return res.json(updatedDelivery);
  }

  async delete(req, res) {
    const { deliveryId } = req.params;

    const delivery = await Delivery.findByPk(deliveryId);

    if (!delivery) {
      return res.status(400).json({ error: 'Delivery not found' });
    }

    await delivery.destroy();

    return res.json();
  }
}

export default new DeliveryController();
