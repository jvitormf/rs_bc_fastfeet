import React from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@rocketseat/unform';
import { MdCheck, MdChevronLeft } from 'react-icons/md';

import history from '../../../services/history';

import { Container, Button, BackButton, Address } from './styles';

export default function Create() {
  function handleSubmit() {
    history.push('/');
  }
  return (
    <Container>
      <header>
        <div>
          <strong>Cadastro de destinatário</strong>
          <div>
            <Link to="/recipient">
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
        <Address>
          <strong>Nome</strong>
          <input type="text" placeholder="John Doe" />
          <strong>Email</strong>
          <input type="text" placeholder="example@gmail.com" />
        </Address>
      </Form>
    </Container>
  );
}
