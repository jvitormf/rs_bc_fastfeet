import Mail from '../../lib/Mail';

class OrderCreationMail {
  get key() {
    return 'OrderCreationMail';
  }

  async handle({ data }) {
    const { deliveryman, recipient, product } = data;

    await Mail.sendMail({
      to: `${deliveryman.name} <${deliveryman.email}>`,
      subject: 'Nova entrega disponível',
      template: 'orderCreation',
      context: {
        deliveryman: deliveryman.name,
        client: recipient.name,
        product,
        street: recipient.street,
        number: recipient.number,
        complement: recipient.complement,
        state: recipient.state,
        city: recipient.city,
        zip_code: recipient.zip_code,
      },
    });
  }
}

export default new OrderCreationMail();
