import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: #7d40e7;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 315px;
  text-align: center;
  background: #ffffff;
  padding: 30px;
  border-radius: 4px;

  img {
    margin-top: 5px;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 15px;

    strong {
      margin-top: 10px;
      text-transform: uppercase;
      align-self: flex-start;
      font-size: 14px;
    }

    input {
      margin-top: 5px;
      border: solid 2px;
      border-color: #dddddd;
      height: 45px;
      border-radius: 4px;
      padding: 0 15px;
    }

    span {
      color: #f64c75;
      font-weight: bold;
      align-self: flex-start;
      margin: 5px 0 5px;
    }

    button {
      margin: 10px 0;
      height: 45px;
      background: #7d40e7;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#7d40e7')};
      }
    }
  }
`;
