import Sequelize, { Model } from 'sequelize';

class Order extends Model {
  static init(sequelize) {
    super.init(
      {
        product: Sequelize.STRING,
        canceled_at: Sequelize.DATE,
        start_date: Sequelize.DATE,
        end_date: Sequelize.DATE,
        status: {
          type: Sequelize.VIRTUAL,
          get() {
            const updatedStatus = {
              name: 'pendente',
              foreground: '#C1BC35',
              background: '#F0F0DF',
            };

            if (this.end_date) {
              updatedStatus.name = 'entregue';
              updatedStatus.foreground = '#2CA42B';
              updatedStatus.background = '#DFF0DF';
              return updatedStatus;
            }

            if (this.canceled_at) {
              updatedStatus.name = 'cancelada';
              updatedStatus.foreground = '#DE3B3B';
              updatedStatus.background = '#FAB0B0';
              return updatedStatus;
            }

            if (this.start_date) {
              updatedStatus.name = 'retirada';
              updatedStatus.foreground = '#4D85EE';
              updatedStatus.background = '#BAD2FF';
              return updatedStatus;
            }

            return updatedStatus;
          },
        },
      },
      {
        sequelize,
      }
    );

    return this;
  }

  static associate(models) {
    this.belongsTo(models.Recipient, {
      foreignKey: 'recipient_id',
      as: 'recipient',
    });
    this.belongsTo(models.Deliveryman, {
      foreignKey: 'deliveryman_id',
      as: 'deliveryman',
    });
    this.belongsTo(models.File, {
      foreignKey: 'signature_id',
      as: 'signature',
    });
  }
}

export default Order;
