import Mail from '../../lib/Mail';

class CancellationMail {
  get key() {
    return 'CancellationMain';
  }

  async handle({ data }) {
    const { problem } = data;

    await Mail.sendMail({
      to: `${problem.delivery.deliveryman.name} <${problem.delivery.deliveryman.email}>`,
      subject: 'Entrega cancelada',
      template: 'cancellation',
      context: {
        deliveryman: problem.delivery.deliveryman.name,
        recipient: problem.delivery.recipient.name,
        product: problem.delivery.product,
        description: problem.description,
      },
    });
  }
}

export default new CancellationMail();
