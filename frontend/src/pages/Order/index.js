import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  MdEdit,
  MdVisibility,
  MdDeleteForever,
  MdChevronLeft,
  MdChevronRight,
  MdFirstPage,
  MdLastPage,
} from 'react-icons/md';

import history from '../../services/history';

import ActionMenu from '../../components/ActionMenu';
import OrderStatus from '../../components/OrderStatus';
import PageHeader from '../../components/PageHeader';
import OrderTableDeliveryman from '../../components/OrderTableDeliveryman';

import api from '../../services/api';

import { Container, Table } from './styles';

export default function Order() {
  const [orderList, setOrderList] = useState([]);
  const [page, setPage] = useState(1);
  const [result, setResult] = useState();
  const [filter, setFilter] = useState();

  useEffect(() => {
    async function loadOrderList() {
      const response = await api.get('orders', {
        params: { page },
      });

      setOrderList(response.data.rows);
      setResult(response.data.count);
    }

    loadOrderList();
  }, [page, result]);

  function handleFilter() {
    setFilter();
  }

  function handleFirstPage() {
    setPage(1);
  }

  function handlePrevPage() {
    if (page > 1) {
      setPage(page - 1);
    }
  }

  function handleNextPage() {
    if (page < result / 10) {
      setPage(page + 1);
    }
  }

  function handleLastPage() {
    setPage(Math.ceil(result / 10));
  }

  function handleNewOrder() {
    history.push('/order_new');
  }

  return (
    <Container>
      <PageHeader
        primary
        page="Gerenciando encomendas"
        handleNew={handleNewOrder}
      >
        <input type="text" placeholder="Buscar por encomendas" />
      </PageHeader>

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
          {orderList.map((order) => (
            <tr key={order.id}>
              <td>#{order.id}</td>
              <td>{order.recipient.name}</td>
              <td>
                <div>
                  <OrderTableDeliveryman
                    url={order.deliveryman.avatar}
                    name={order.deliveryman.name}
                  />
                </div>
              </td>
              <td>{order.recipient.city}</td>
              <td>{order.recipient.state}</td>
              <td>
                <OrderStatus
                  foreground={order.status.foreground}
                  background={order.status.background}
                  name={order.status.name}
                />
              </td>
              <td>
                <ActionMenu primary>
                  <>
                    <div>
                      <MdVisibility size={22} color="#8E5BE8" />
                      <Link to="/">Visualizar</Link>
                    </div>
                    <div>
                      <MdEdit size={22} color="#4D85EE" />
                      <Link to="/order_edit">Editar</Link>
                    </div>
                    <div>
                      <MdDeleteForever size={22} color="#DE3B3B" />
                      <Link to="/">Excluir</Link>
                    </div>
                  </>
                </ActionMenu>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <footer>
        <div>
          <button type="button" onClick={handleFirstPage}>
            <MdFirstPage size={36} color="#FFF" />
          </button>
          <button type="button" onClick={handlePrevPage}>
            <MdChevronLeft size={36} color="#FFF" />
          </button>
          <p>{page}</p>
          <button type="button" onClick={handleNextPage}>
            <MdChevronRight size={36} color="#FFF" />
          </button>
          <button type="button" onClick={handleLastPage}>
            <MdLastPage size={36} color="#FFF" />
          </button>
        </div>
      </footer>
    </Container>
  );
}
