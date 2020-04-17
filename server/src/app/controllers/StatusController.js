import * as Yup from 'yup';
import { parseISO, getHours, startOfDay, endOfDay } from 'date-fns';
import { Op } from 'sequelize';

import Delivery from '../models/Delivery';
import Deliveryman from '../models/Deliveryman';

class StatusController {
  async update(request, response) {
    const schema = Yup.object().shape({
      start_date: Yup.string().required(),
    });

    if (!(await schema.isValid(request.body)))
      return response.status(400).json({ error: 'Validation fails' });

    const { delivery_id, deliveryman_id } = request.params;

    const deliveryman = await Deliveryman.findByPk(deliveryman_id);

    if (!deliveryman)
      return response.status(400).json({ error: 'Deliveryman not found' });

    const delivery = await Delivery.findByPk(delivery_id);

    if (!delivery)
      return response.status(400).json({ error: 'Delivery not found' });

    const { start_date } = request.body;

    if (delivery.canceled_at || delivery.end_date || delivery.start_date)
      return response.status(400).json({ error: 'Delivery closed' });

    const parsedStart = parseISO(start_date);

    const hour = getHours(parsedStart);

    if (hour <= 8 || hour >= 18)
      return response
        .status(400)
        .json({ error: 'The start date must be between 08:00 and 18:00' });

    const deliveries = await Delivery.findAll({
      where: {
        deliveryman_id,
        canceled_at: null,
        start_date: {
          [Op.between]: [startOfDay(parsedStart), endOfDay(parsedStart)],
        },
        end_date: null,
      },
    });

    if (deliveries.length >= 5)
      return response
        .status(400)
        .json({ error: 'Deliveryman already has 5 deliveries on the day.' });

    const updated = await delivery.update(request.body);

    return response.json(updated);
  }
}

export default new StatusController();
