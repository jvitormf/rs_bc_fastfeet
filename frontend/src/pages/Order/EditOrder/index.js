import React, { useRef, useEffect, useState, useMemo } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Form } from '@unform/web';

import PageHeader from '../../../components/PageHeader';
import AsyncReactSelect from '../../../components/Form/AsyncReactSelect';

import history from '../../../services/history';
import api from '../../../services/api';

import { Container, Produto, ComboBox } from './styles';

export default function EditOrder() {
  const orderEdit = useSelector((state) => state.order.order);
  const formRef = useRef(null);
  const dispatch = useDispatch();
  const [product, setProduct] = useState();

  useEffect(() => {
    // function loadOrder() {
    formRef.current.setFieldValue('recipient_id', {
      value: orderEdit.recipient.id,
      label: orderEdit.recipient.name,
    });

    formRef.current.setFieldValue('deliveryman_id', {
      value: orderEdit.deliveryman.id,
      label: orderEdit.deliveryman.name,
    });

    formRef.current.setFieldValue('product', orderEdit.product);
    // }

    // loadOrder();
  }, [orderEdit]);

  // useEffect(() => {
  //   async function loadOrder() {
  //     const response = await api.get(`orders/6`);
  //     const { recipient, deliveryman } = response.data;

  //     formRef.current.setData(response.data);

  //     formRef.current.setFieldValue('recipient_id', {
  //       value: recipient.id,
  //       label: recipient.name,
  //     });

  //     formRef.current.setFieldValue('deliveryman_id', {
  //       value: deliveryman.id,
  //       label: deliveryman.name,
  //     });

  //     setOrder(response.data);
  //   }

  //   loadOrder();
  // }, [id]);

  async function handleSubmit() {}

  async function loadData(inputValue, path) {
    let options = [];
    if (inputValue !== '') {
      const response = await api.get(path, {
        params: { name: inputValue },
      });

      options = response.data.rows.map((item) => ({
        value: item.id,
        label: item.name,
      }));
    }

    return options;
  }

  return (
    <Container>
      <PageHeader
        primary
        page="Edição de encomendas"
        handleBack={() => history.push('order')}
        handleNew={handleSubmit}
      />

      <Form ref={formRef} onSubmit={handleSubmit}>
        <ComboBox>
          <section>
            <AsyncReactSelect
              name="recipient_id"
              label="Destinatário"
              placeholder="Destinatário"
              loadOptions={(inputValue) => loadData(inputValue, 'recipients')}
            />
          </section>
          <section>
            <AsyncReactSelect
              name="deliveryman_id"
              label="Entregador"
              placeholder="Entregador"
              loadOptions={(inputValue) => loadData(inputValue, 'deliverymans')}
            />
          </section>
        </ComboBox>
        <Produto>
          <strong>Nome do produto</strong>
          <input
            name="product"
            type="text"
            placeholder="Digite o nome do produto"
          />
        </Produto>
      </Form>
    </Container>
  );
}
