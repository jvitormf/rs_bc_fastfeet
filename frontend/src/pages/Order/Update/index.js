import React from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@rocketseat/unform';
import { MdCheck, MdChevronLeft } from 'react-icons/md';

import history from '../../../services/history';

import { Container, Button, BackButton, Produto, ComboBox } from './styles';

export default function Update() {
  function handleSubmit() {
    history.push('/');
  }
  return (
    <Container>
      <header>
        <div>
          <strong>Edição de encomendas</strong>
          <div>
            <Link to="/order">
              <BackButton type="button">
                <MdChevronLeft size={20} color="#FFF" />
                Voltar
              </BackButton>
            </Link>
            <Button type="button">
              <MdCheck size={20} color="#FFF" />
              Salvar
            </Button>
          </div>
        </div>
      </header>
      <Form onSubmit={handleSubmit}>
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
