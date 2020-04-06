module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      'deliverymans',
      [
        {
          name: 'João Vitor',
          email: 'example@gmail.com',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Diego Fernandes',
          email: 'example@gmail.com',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Pedro Antunes',
          email: 'example@gmail.com',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Rafael Almeida',
          email: 'example@gmail.com',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Alex Santos',
          email: 'example@gmail.com',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Daniel Moreira',
          email: 'example@gmail.com',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Renan Silva',
          email: 'example@gmail.com',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'José Ferreira',
          email: 'example@gmail.com',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Aline Costa',
          email: 'example@gmail.com',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Fulano Almeida',
          email: 'example@gmail.com',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Siclano Almeida',
          email: 'example@gmail.com',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'John Doe',
          email: 'example@gmail.com',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: () => {},
};
