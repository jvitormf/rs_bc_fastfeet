import React, { useState } from 'react';
import PropTypes from 'prop-types';

import { MdMoreHoriz } from 'react-icons/md';

import { Container, Badge, MenuList, Option } from './styles';

export default function ActionMenu({ children, primary }) {
  const [visible, setVisible] = useState(false);

  function handleToggleVisible() {
    setVisible(!visible);
  }

  return (
    <Container>
      <Badge onClick={handleToggleVisible}>
        <MdMoreHoriz size={20} color="#C6C6C6" />
      </Badge>
      <MenuList visible={visible} primary={primary}>
        <Option>{children}</Option>
      </MenuList>
    </Container>
  );
}

ActionMenu.propTypes = {
  children: PropTypes.element.isRequired,
  primary: PropTypes.bool.isRequired,
};
