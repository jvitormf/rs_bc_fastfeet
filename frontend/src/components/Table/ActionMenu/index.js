import React, { useState } from 'react';
import PropTypes from 'prop-types';

import {
  MdMoreHoriz,
  MdEdit,
  MdVisibility,
  MdDeleteForever,
} from 'react-icons/md';

import { Container, Badge, MenuList, Option } from './styles';

export default function ActionMenu({
  onView,
  onEdit,
  OnDelete,
  viewLabel,
  editLabel,
  deleteLabel,
}) {
  const [visible, setVisible] = useState(false);

  function handleToggleVisible(e) {
    e.preventDefault();
    setVisible(!visible);
  }

  return (
    <Container>
      <Badge onClick={handleToggleVisible}>
        <MdMoreHoriz size={20} color="#C6C6C6" />
      </Badge>
      <MenuList visible={visible} onClick={() => setVisible(false)}>
        {onView ? (
          <Option>
            <MdVisibility size={22} color="#8E5BE8" />
            <button type="button" onClick={onView}>
              {viewLabel}
            </button>
          </Option>
        ) : (
          ''
        )}
        {onEdit ? (
          <Option>
            <MdEdit size={22} color="#4D85EE" />
            <button type="button" onClick={onEdit}>
              {editLabel}
            </button>
          </Option>
        ) : (
          ''
        )}
        {OnDelete ? (
          <Option>
            <MdDeleteForever size={22} color="#DE3B3B" />
            <button type="button" onClick={OnDelete}>
              {deleteLabel}
            </button>
          </Option>
        ) : (
          ''
        )}
      </MenuList>
    </Container>
  );
}

ActionMenu.propTypes = {
  onView: PropTypes.func,
  onEdit: PropTypes.func,
  OnDelete: PropTypes.func,
  viewLabel: PropTypes.string,
  editLabel: PropTypes.string,
  deleteLabel: PropTypes.string,
};

ActionMenu.defaultProps = {
  onView: null,
  onEdit: null,
  OnDelete: null,
  viewLabel: 'Vizualizar',
  editLabel: 'Editar',
  deleteLabel: 'Excluir',
};
