import styled from 'styled-components';
import AsyncSelect from 'react-select/async';

export const Select = styled(AsyncSelect)`
  width: 100%;

  .react-select__control {
    height: 45px;
    font-size: 16px;
    border: 2px solid #dddddd;
  }

  .react-select__value-container {
    height: 40px;
    font-size: 16px;
    align-content: center;
    padding: 0 10px;
  }

  .react-select__control.react-select__control--is-focused {
    border-color: #7d40e7 !important;
    box-shadow: none;
  }

  .react-select__value-container.react-select__value-container--has-value {
    .react-select__single-value {
      transform: none !important;
    }
    .css-b8ldur-Input {
      margin: 0;
      padding: 0;
    }
  }

  .react-select__single-value {
    position: unset !important;
    font-size: 16px;
  }
`;
