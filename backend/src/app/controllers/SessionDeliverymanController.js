import jwt from 'jsonwebtoken';
import * as Yup from 'yup';

import authConfig from '../../config/auth';
import Deliveryman from '../models/Deliveryman';

class SessionDeliverymanController {
  async store(req, res) {
    const schema = Yup.object().shape({
      email: Yup.string()
        .email()
        .required(),
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({ error: 'Validation Fails' });
    }

    const { email } = req.body;

    const deliveryman = await Deliveryman.findOne({ where: { email } });

    if (!deliveryman) {
      return res.status(401).json({ error: 'Deliveryman not found' });
    }

    const { id, name } = deliveryman;

    return res.json({
      deliveryman: {
        id,
        name,
        email,
      },
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      }),
    });
  }
}

export default new SessionDeliverymanController();
