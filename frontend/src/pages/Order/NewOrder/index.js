import React from 'react';
import { Form } from '@unform/web';

import PageHeader from '../../../components/PageHeader';

import history from '../../../services/history';

import { Container, Produto, ComboBox } from './styles';

export default function Order() {
  function handleBack() {
    history.push('/order');
  }

  function handleNewOrder() {}
  return (
    <Container>
      <PageHeader
        page="Cadastro de encomendas"
        handleNew={handleNewOrder}
        handleBack={handleBack}
      />

      <Form>
        <ComboBox>
          <div>
            <strong>Destinatário</strong>
            <select name="" id="">
              <option value="Ludwig Van Beethoven">Ludwig Van Beethoven</option>
            </select>
          </div>
          <div>
            <strong>Entregador</strong>
            <select name="" id="">
              <option value="John Doe">John Doe</option>
            </select>
          </div>
        </ComboBox>
        <Produto>
          <strong>Nome do produto</strong>
          <input type="text" placeholder="Bucar por encomendas" />
        </Produto>
      </Form>
    </Container>
  );
}
