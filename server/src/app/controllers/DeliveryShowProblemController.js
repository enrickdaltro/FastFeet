import DeliveryProblem from '../models/DeliveryProblem';

class DeliveryShowProblemController {
  async index(req, res) {
    const { deliveryId } = req.params;

    const deliveryProblem = DeliveryProblem.findAll({
      where: { delivery_id: deliveryId },
      attributes: ['id', 'description', 'created_at'],
    });

    return res.json(deliveryProblem);
  }
}

export default new DeliveryShowProblemController();
