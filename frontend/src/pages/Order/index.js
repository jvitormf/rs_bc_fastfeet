import React from 'react';
import { Link } from 'react-router-dom';
import { MdEdit, MdVisibility, MdDeleteForever } from 'react-icons/md';

import history from '../../services/history';

import ActionMenu from '../../components/ActionMenu';
import OrderStatus from '../../components/OrderStatus';
import PageHeader from '../../components/PageHeader';
import OrderTableDeliveryman from '../../components/OrderTableDeliveryman';

import api from '../../services/api';

import { Container, Table } from './styles';

export default function Order() {
  function handleNewOrder() {
    history.push('/order_new');
  }

  const status = {
    name: 'pendente',
    foreground: '#C1BC35',
    background: '#F0F0DF',
  };

  return (
    <Container>
      <PageHeader
        primary
        page="Gerenciando encomendas"
        handleNew={handleNewOrder}
      />

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
            <td>
              <p>#01</p>
            </td>
            <td>
              <p>Ludwig Van Beethoven</p>
            </td>
            <td>
              <div>
                <OrderTableDeliveryman url={null} name="John Doe" />
              </div>
            </td>
            <td>
              <p>Rio do sul</p>
            </td>
            <td>
              <p>SC</p>
            </td>
            <td>
              <OrderStatus
                foreground={status.foreground}
                background={status.background}
                name={status.name}
              />
            </td>
            <td>
              <ActionMenu primary>
                <>
                  <div>
                    <MdVisibility size={20} color="#8E5BE8" />
                    <Link to="/">Visualizar</Link>
                  </div>
                  <div>
                    <MdEdit size={20} color="#4D85EE" />
                    <Link to="/">Editar</Link>
                  </div>
                  <div>
                    <MdDeleteForever size={20} color="#DE3B3B" />
                    <Link to="/">Excluir</Link>
                  </div>
                </>
              </ActionMenu>
            </td>
          </tr>
        </tbody>
      </Table>
    </Container>
  );
}
