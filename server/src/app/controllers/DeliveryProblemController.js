import * as Yup from 'yup';
import { format } from 'date-fns';
import pt from 'date-fns/locale/pt';

import Delivery from '../models/Delivery';
import Deliveryman from '../models/Deliveryman';
import DeliveryProblem from '../models/DeliveryProblem';
import Recipient from '../models/Recipient';

import CancellationMail from '../jobs/CancellationMail';
import Queue from '../../lib/Queue';

class ProblemController {
  async index(req, res) {
    const { page = 1 } = req.query;

    const deliveryProblems = await DeliveryProblem.findAll({
      attributes: ['id', 'description'],
      order: [['created_at']],
      limit: 4,
      offset: (page - 1) * 4,
    });

    return res.json(deliveryProblems);
  }

  async show(req, res) {
    const { deliveryId } = req.params;

    const deliveryProblem = await DeliveryProblem.findAll({
      where: { delivery_id: deliveryId },
    });

    return res.json(deliveryProblem);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      description: Yup.string().required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation Fails' });
    }

    const { deliveryId } = req.params;

    const deliveryProblem = await DeliveryProblem.create({
      ...req.body,
      delivery_id: deliveryId,
    });

    return res.json(deliveryProblem);
  }

  async update(req, res) {
    const { id } = req.params;

    const problem = await DeliveryProblem.findByPk(id, {
      attributes: ['id', 'delivery_id', 'description'],
      include: [
        {
          model: Delivery,
          as: 'delivery',
          attributes: [
            'id',
            'product',
            'canceled_at',
            'start_date',
            'end_date',
          ],
          include: [
            {
              model: Recipient,
              as: 'recipient',
              attributes: [
                'id',
                'name',
                'street',
                'complement',
                'house',
                'zipcode',
                'city',
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
        },
      ],
    });

    if (!problem) return res.status(400).json({ error: 'Problem not found' });

    const { delivery_id } = problem;

    const delivery = await Delivery.findByPk(delivery_id);

    if (!delivery) return res.status(400).json({ error: 'Delivery not found' });

    delivery.canceled_at = new Date();

    await delivery.save();

    await Queue.add(CancellationMail.key, {
      problem,
    });

    return res.json(delivery);
  }

  async delete(req, res) {
    const { problemId } = req.params;
    const deliveryProblem = await DeliveryProblem.findByPk(problemId);

    if (!deliveryProblem) {
      return res.status(400).json({ error: 'Problem does not exists.' });
    }

    const delivery = await Delivery.findByPk(deliveryProblem.delivery_id);

    if (!delivery) {
      return res.status(400).json({ error: 'Delivery does not exists.' });
    }

    delivery.canceled_at = new Date();

    delivery.save();

    return res.json(delivery);
  }
}

export default new ProblemController();
