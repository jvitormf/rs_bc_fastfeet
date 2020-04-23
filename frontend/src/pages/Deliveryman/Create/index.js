import React from 'react';
import { Link } from 'react-router-dom';
import { Form } from '@unform/web';
import { MdCheck, MdChevronLeft, MdInsertPhoto } from 'react-icons/md';

import history from '../../../services/history';

import { Container, Button, BackButton, Deliveryman, Photo } from './styles';

export default function Order() {
  function handleSubmit() {
    history.push('/');
  }
  return (
    <Container>
      <header>
        <div>
          <strong>Cadastro de entregadores</strong>
          <div>
            <Link to="/deliveryman">
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
        <Photo>
          <Link to="/updaloads">
            <MdInsertPhoto size={50} color="#DDDDDD" />
            <strong>Adcionar Foto</strong>
          </Link>
        </Photo>
        <Deliveryman>
          <strong>Nome</strong>
          <input type="text" placeholder="John Doe" />
          <strong>Email</strong>
          <input type="text" placeholder="example@gmail.com" />
        </Deliveryman>
      </Form>
    </Container>
  );
}
