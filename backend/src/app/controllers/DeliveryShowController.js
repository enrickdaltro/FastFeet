import Delivery from '../models/Delivery';

class DeliveryShowController {
  async show(req, res) {
    const { deliveryId } = req.params;

    const delivery = await Delivery.findOne({
      where: { id: deliveryId },
      attributes: [
        'id',
        'product',
        'start_date',
        'end_date',
        'canceled_at',
        'created_at',
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
            'zipcode',
          ],
        },
      ],
    });

    return res.json(delivery);
  }
}

export default new DeliveryShowController();
