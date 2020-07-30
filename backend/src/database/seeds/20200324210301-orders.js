module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      'orders',
      [
        {
          recipient_id: 3,
          deliveryman_id: 2,
          product: 'Smartphone1',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          recipient_id: 3,
          deliveryman_id: 1,
          product: 'Smartphone2',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          recipient_id: 1,
          deliveryman_id: 2,
          product: 'Smartphone3',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          recipient_id: 6,
          deliveryman_id: 1,
          product: 'Smartphone4',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          recipient_id: 8,
          deliveryman_id: 1,
          product: 'Smartphone5',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          recipient_id: 2,
          deliveryman_id: 3,
          product: 'Smartphone6',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          recipient_id: 2,
          deliveryman_id: 1,
          product: 'Smartphone7',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          recipient_id: 5,
          deliveryman_id: 4,
          product: 'Smartphone8',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          recipient_id: 9,
          deliveryman_id: 7,
          product: 'Smartphone9',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          recipient_id: 1,
          deliveryman_id: 1,
          product: 'Smartphone10',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          recipient_id: 9,
          deliveryman_id: 1,
          product: 'Smartphone11',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          recipient_id: 1,
          deliveryman_id: 6,
          product: 'Smartphone12',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: () => {},
};
