import React, { useState, useEffect, useRef } from 'react';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { Link } from 'react-router-dom';
import {
  MdChevronLeft,
  MdChevronRight,
  MdFirstPage,
  MdLastPage,
  MdClear,
} from 'react-icons/md';

import ActionMenu from '../../components/Table/ActionMenu';
import OrderStatus from '../../components/Table/OrderStatus';
import PageHeader from '../../components/PageHeader';
import OrderTableDeliveryman from '../../components/Table/OrderTableDeliveryman';

import Modal from '../../components/Modal';

import history from '../../services/history';
import api from '../../services/api';

import logo from '../../assets/logo.svg';

import {
  Container,
  Table,
  Pagination,
  AddressInfo,
  DateInfo,
  SignatureInfo,
} from './styles';

export default function Order() {
  const [orderList, setOrderList] = useState([]);
  const [page, setPage] = useState(1);
  const [result, setResult] = useState();
  const [filter, setFilter] = useState({ product: '' });

  const modalRef = useRef(null);

  useEffect(() => {
    async function loadOrderList() {
      const response = await api.get('orders', {
        params: { page, product: filter.product },
      });

      setOrderList(response.data.rows);
      setResult(response.data.count);
    }

    loadOrderList();
  }, [page, result, filter]);

  function handleFilter(e) {
    setFilter({ product: e.target.value });
  }

  function handleClearFilter() {
    setFilter({ product: '' });
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
    history.push('/order/new');
  }

  const content = (order) => {
    return (
      <>
        <AddressInfo>
          <p>
            {`${order.recipient.street}, ${order.recipient.number}${
              order.recipient.complement
                ? `, ${order.recipient.complement}`
                : ''
            }`}
          </p>
          <p>{`${order.recipient.city} - ${order.recipient.state}`}</p>
          <p>{`${order.recipient.zip_code}`}</p>
        </AddressInfo>
        <DateInfo>
          <strong>Datas</strong>
          <p>
            <strong>Retirada: </strong>
            {order.start_date
              ? format(parseISO(order.start_date), 'dd/MM/yyyy', {
                  locale: pt,
                })
              : ''}
          </p>
          <p>
            <strong>Entrega: </strong>
            {order.end_date
              ? format(parseISO(order.end_date), 'dd/MM/yyyy', {
                  locale: pt,
                })
              : ''}
          </p>
          {order.canceled_at ? (
            <p>
              <strong>Cancelado: </strong>
              {order.canceled_at
                ? format(parseISO(order.canceled_at), 'dd/MM/yyyy', {
                    locale: pt,
                  })
                : ''}
            </p>
          ) : (
            ''
          )}
        </DateInfo>
        <SignatureInfo>
          <strong>Assinatura do destinatário</strong>
          <img src={logo} alt="Assinatura" />
        </SignatureInfo>
      </>
    );
  };

  function handleView(order) {
    modalRef.current.setModalContent(content(order));
    modalRef.current.show();
  }
  function handleEdit() {
    history.push('/order/edit');
  }
  function handleDelete() {
    history.push('/order/edit');
  }

  return (
    <Container>
      <PageHeader
        primary
        page="Gerenciando encomendas"
        handleNew={handleNewOrder}
      >
        <div>
          <input
            value={filter.product}
            onChange={handleFilter}
            name="filter"
            type="text"
            placeholder="Buscar por encomendas"
          />
          {filter.product ? (
            <button id="clearFilter" type="button" onClick={handleClearFilter}>
              <MdClear size={22} color="#FFFFFF" />
            </button>
          ) : (
            ''
          )}
        </div>
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
                <ActionMenu
                  onView={() => handleView(order)}
                  onEdit={handleEdit}
                  OnDelete={handleDelete}
                />
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <Pagination>
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
      </Pagination>
      <Modal ref={modalRef} modalTitle="Informações da Encomenda" />
    </Container>
  );
}
