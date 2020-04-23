import React from 'react';
import { Link } from 'react-router-dom';
import { MdAdd, MdMoreHoriz } from 'react-icons/md';

// import history from '../../services/history';

import avatar from '../../assets/avatar.png';
// import api from '../../services/api';

import { Container, Table } from './styles';

export default function Deliveryman() {
  return (
    <Container>
      <header>
        <strong>Gerenciando entregadores</strong>
        <div>
          <input type="text" placeholder="Bucar por entregadores" />
          <Link to="/deliveryman_create">
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
              <th>Foto</th>
              <th>Nome</th>
              <th>Email</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#01</td>
              <td>
                <img src={avatar} alt="Avatar" />
              </td>
              <td>John Doe</td>
              <td>example@gmail.com</td>
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
