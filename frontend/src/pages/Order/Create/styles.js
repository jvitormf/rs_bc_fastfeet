import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 900px;
  margin: 30px auto;
  display: flex;
  flex-direction: column;

  header {
    justify-content: center;
    align-items: center;

    strong {
      display: block;
      margin-top: 10px;
      padding: 5px 0;
      font-size: 24px;
      font-weight: bold;
      color: #444444;
    }

    div {
      margin-top: 10px;
      display: flex;
      align-items: center;
      align-self: center;
      justify-content: space-between;

      div {
        width: 30%;
        margin-left: 60px;
      }
    }
  }

  form {
    width: 100%;
    margin-top: 20px;
    border: 0;
    border-radius: 4px;
    align-items: center;
    align-self: center;
    justify-self: center;
    background: #fff;
    padding: 15px;
  }
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  text-align: center;
  padding: 0 30px;
  height: 40px;
  background: #7d40e7;
  font-weight: bold;
  color: #fff;
  border: 0;
  border-radius: 4px;
  font-size: 14px;
  text-transform: uppercase;
  transition: background 0.2s;

  &:hover {
    background: ${darken(0.03, '#7d40e7')};
  }
`;

export const BackButton = styled(Button)`
  background: #cccccc;
  &:hover {
    background: ${darken(0.03, '#CCCCCC')};
  }
`;

export const ComboBox = styled.div`
  display: flex;
  align-items: center;

  div {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;

    strong {
      font-size: 14px;
    }

    select {
      margin-top: 5px;
      width: 405px;
      height: 45px;
      border-radius: 4px;
      border-color: #dddddd;
      background: #ffffff;
    }
  }
`;

export const Produto = styled.div`
  margin-top: 10px;

  strong {
    font-size: 14px;
  }

  input {
    display: flex;
    flex-direction: column;
    margin-top: 5px;
    width: 840px;
    height: 45px;
    border: 1px solid;
    border-color: #dddddd;
    border-radius: 4px;
    background: #ffffff;
    text-align: justify;
  }
`;
