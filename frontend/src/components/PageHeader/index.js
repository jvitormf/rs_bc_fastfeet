import React from 'react';
import PropTypes from 'prop-types';

import { MdAdd, MdCheck, MdChevronLeft } from 'react-icons/md';

import { Container, Header, BackButton, Button } from './styles';

export default function PageHeader({
  primary = false,
  page,
  handleNew,
  handleBack,
}) {
  const [, pagina] = page.split(' ');
  return (
    <Container>
      <Header primary={primary}>
        <strong>{page}</strong>
        <div>
          {primary ? (
            <input type="text" placeholder={`Buscar por ${pagina}`} />
          ) : (
            ''
          )}
          <div>
            {primary ? (
              <Button type="button" onClick={handleNew}>
                <MdAdd size={20} color="#FFF" />
                cadastrar
              </Button>
            ) : (
              <>
                <BackButton type="button" onClick={handleBack}>
                  <MdChevronLeft size={20} color="#FFF" />
                  Voltar
                </BackButton>
                <Button type="button" onClick={handleNew}>
                  <MdCheck size={20} color="#FFF" />
                  salvar
                </Button>
              </>
            )}
          </div>
        </div>
      </Header>
    </Container>
  );
}

PageHeader.propTypes = {
  primary: PropTypes.bool,
  page: PropTypes.string.isRequired,
  handleNew: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  handleBack: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
};

PageHeader.defaultProps = {
  primary: false,
  handleBack: () => {},
};
