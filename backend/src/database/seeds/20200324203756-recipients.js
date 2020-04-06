module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      'recipients',
      [
        {
          name: 'João Vitor',
          street: 'Av. Paulista',
          number: 5009,
          complement: '',
          state: 'SP',
          city: 'São Paulo',
          zip_code: '01311-000',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Diego Fernandes',
          street: 'Av. Paulista',
          number: 5009,
          complement: '',
          state: 'SP',
          city: 'São Paulo',
          zip_code: '01311-000',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Pedro Antunes',
          street: 'Av. Paulista',
          number: 5009,
          complement: '',
          state: 'SP',
          city: 'São Paulo',
          zip_code: '01311-000',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Rafael Almeida',
          street: 'Av. Paulista',
          number: 5009,
          complement: '',
          state: 'SP',
          city: 'São Paulo',
          zip_code: '01311-000',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Alex Santos',
          street: 'Av. Paulista',
          number: 5009,
          complement: '',
          state: 'SP',
          city: 'São Paulo',
          zip_code: '01311-000',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Daniel Moreira',
          street: 'Av. Paulista',
          number: 5009,
          complement: '',
          state: 'SP',
          city: 'São Paulo',
          zip_code: '01311-000',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Renan Silva',
          street: 'Av. Paulista',
          number: 5009,
          complement: '',
          state: 'SP',
          city: 'São Paulo',
          zip_code: '01311-000',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'José Ferreira',
          street: 'Av. Paulista',
          number: 5009,
          complement: '',
          state: 'SP',
          city: 'São Paulo',
          zip_code: '01311-000',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Aline Costa',
          street: 'Av. Paulista',
          number: 5009,
          complement: '',
          state: 'SP',
          city: 'São Paulo',
          zip_code: '01311-000',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Fulano Almeida',
          street: 'Av. Paulista',
          number: 5009,
          complement: '',
          state: 'SP',
          city: 'São Paulo',
          zip_code: '01311-000',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'Siclano Almeida',
          street: 'Av. Paulista',
          number: 5009,
          complement: '',
          state: 'SP',
          city: 'São Paulo',
          zip_code: '01311-000',
          created_at: new Date(),
          updated_at: new Date(),
        },
        {
          name: 'John Doe',
          street: 'Av. Paulista',
          number: 5009,
          complement: '',
          state: 'SP',
          city: 'São Paulo',
          zip_code: '01311-000',
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: () => {},
};
