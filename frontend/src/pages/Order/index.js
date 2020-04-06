import React from 'react';
import { Link } from 'react-router-dom';
import { MdAdd, MdMoreHoriz } from 'react-icons/md';

import history from '../../services/history';

import avatar from '../../assets/avatar.png';
import api from '../../services/api';

import { Container, Table } from './styles';

export default function Order() {
  function handleCreate() {
    history.push('/order/create');
  }

  return (
    <Container>
      <header>
        <strong>Gerenciando encomendas</strong>
        <div>
          <input type="text" placeholder="Bucar por encomendas" />
          <Link to="/order_create">
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
              <th>Destinatário</th>
              <th>Entregador</th>
              <th>Cidade</th>
              <th>Estado</th>
              <th>Status</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#01</td>
              <td>Ludwig Van Beethoven</td>
              <td>
                <div>
                  <img src={avatar} alt="Avatar" />
                  John Doe
                </div>
              </td>
              <td>Rio do sul</td>
              <td>SC</td>
              <td>Status</td>
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
