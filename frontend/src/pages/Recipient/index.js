import React from 'react';
import { Link } from 'react-router-dom';
import { MdAdd, MdMoreHoriz } from 'react-icons/md';

// import history from '../../services/history';

// import avatar from '../../assets/avatar.png';
// import api from '../../services/api';

import { Container, Table } from './styles';

export default function Recipient() {
  // function handleCreate() {
  //   history.push('/order/create');
  // }

  return (
    <Container>
      <header>
        <strong>Gerenciando destinatários</strong>
        <div>
          <input type="text" placeholder="Bucar por destinatários" />
          <Link to="/recipient_create">
            <button type="button">
              <MdAdd size={20} color="#FFF" />
              Cadastrar
            </button>
          </Link>
        </div>
        <Table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>Endereço</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#01</td>
              <td>Ludwig Van Beethoven</td>
              <td>Rua Beethoven, 1729, Diadema - São Paulo</td>
              <td>
                <button type="button">
                  <MdMoreHoriz size={20} color="#C6C6C6" />
                </button>
              </td>
            </tr>
          </tbody>
        </Table>
      </header>
    </Container>
  );
}
