import Mail from '../../lib/Mail';

class RegistrationMail {
  get key() {
    return 'RegistrationMain';
  }

  async handle({ data }) {
    const { delivery } = data;

    await Mail.sendMail({
      to: `${delivery.deliveryman.name} <${delivery.deliveryman.email}>`,
      subject: 'Uma nova encomenda!',
      template: 'registration',
      context: {
        deliveryman: delivery.deliveryman.name,
        recipient: delivery.recipient.name,
        product: delivery.product,
      },
    });
  }
}

export default new RegistrationMail();
