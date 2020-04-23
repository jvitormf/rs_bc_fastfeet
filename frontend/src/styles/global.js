import { createGlobalStyle } from 'styled-components';
import { darken } from 'polished';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');
  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body, #root {
    background: #F5F5F5;
    height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button {
    font: 14px 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  input {
    height: 45px;
    border: solid 2px #dddddd;
    border-radius: 4px;
    padding: 0 10px;

    &:hover {
      border: solid 2px ${darken(0.06, '#CCCCCC')};
    }

    &:focus {
      border: solid 2px #7d40e7;
    }
  }
`;
