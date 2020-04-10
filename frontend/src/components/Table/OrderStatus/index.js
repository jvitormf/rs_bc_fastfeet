import React from 'react';

import Proptypes from 'prop-types';

import { MdFiberManualRecord } from 'react-icons/md';

import { Container } from './styles';

export default function OrderStatus({ foreground, background, name }) {
  return (
    <Container foreground={foreground} background={background} name={name}>
      <div>
        <MdFiberManualRecord size={15} color={foreground} />
        <p>{name}</p>
      </div>
    </Container>
  );
}

OrderStatus.propTypes = {
  foreground: Proptypes.string.isRequired,
  background: Proptypes.string.isRequired,
  name: Proptypes.string.isRequired,
};
