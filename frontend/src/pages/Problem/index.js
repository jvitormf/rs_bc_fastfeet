import React from 'react';
// import { Link } from 'react-router-dom';
import { MdMoreHoriz } from 'react-icons/md';

// import history from '../../services/history';

// import avatar from '../../assets/avatar.png';
// import api from '../../services/api';

import { Container, Table } from './styles';

export default function Problem() {
  return (
    <Container>
      <header>
        <strong>Problemas na entrega</strong>
        <div>
          <input type="text" placeholder="Bucar por problemas" />
        </div>
        <Table>
          <thead>
            <tr>
              <th>Encomenda</th>
              <th>Problema</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>#01</td>
              <td>Usuário ausente</td>
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
