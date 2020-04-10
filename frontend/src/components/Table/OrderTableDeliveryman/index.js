import React from 'react';
import PropTypes from 'prop-types';
import Avatar from 'react-avatar';

import { Container } from './styles';

export default function OrderTableDeliveryman({ url, name }) {
  return (
    <Container>
      {!url ? (
        <Avatar
          name={name}
          maxInitials={2}
          size={40}
          round
          alt="Avatar"
          textSizeRatio={2}
        />
      ) : (
        <img src={url} alt="Avatar" />
      )}
      <p>{name}</p>
    </Container>
  );
}

OrderTableDeliveryman.propTypes = {
  url: PropTypes.string,
  name: PropTypes.string.isRequired,
};

OrderTableDeliveryman.defaultProps = {
  url: '',
};
