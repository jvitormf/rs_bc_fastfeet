import Mail from '../../lib/Mail';

// teste commit
class OrderCancellationMail {
  get key() {
    return 'OrderCancellationMail';
  }

  async handle({ data }) {
    const { deliveryman, recipient, product } = data;

    await Mail.sendMail({
      to: `${deliveryman.name} <${deliveryman.email}>`,
      subject: 'Entrega cancelada',
      template: 'orderCancellation',
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

export default new OrderCancellationMail();
