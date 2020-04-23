import React from 'react';
import PropTypes from 'prop-types';

import { MdAdd, MdCheck, MdChevronLeft } from 'react-icons/md';

import { Container, Header, BackButton, Button } from './styles';

export default function PageHeader({
  children,
  search = false,
  page,
  handleNew,
  handleBack,
}) {
  return (
    <Container>
      <Header search={search}>
        <strong>{page}</strong>
        <div>
          {children}
          <div>
            {search ? (
              <Button
                type="button"
                onClick={handleNew}
                className="ActionButton"
              >
                <MdAdd size={20} color="#FFF" />
                cadastrar
              </Button>
            ) : (
              <>
                <BackButton
                  type="button"
                  onClick={handleBack}
                  className="ActionButton"
                >
                  <MdChevronLeft size={20} color="#FFF" />
                  Voltar
                </BackButton>
                <Button
                  type="button"
                  onClick={handleNew}
                  className="ActionButton"
                >
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
  search: PropTypes.bool,
  page: PropTypes.string.isRequired,
  children: PropTypes.element,
  handleNew: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
    .isRequired,
  handleBack: PropTypes.oneOfType([PropTypes.element, PropTypes.func]),
};

PageHeader.defaultProps = {
  children: <></>,
  search: false,
  handleBack: () => {},
};
