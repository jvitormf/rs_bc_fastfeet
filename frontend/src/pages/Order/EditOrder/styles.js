import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 900px;
  margin: 30px auto;
  display: flex;
  flex-direction: column;

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

export const ComboBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  section {
    width: 420px;
    display: flex;
    flex-direction: column;

    label {
      font-size: 14px;
      font-weight: bold;
      margin-bottom: 5px;
    }
  }
`;

export const Produto = styled.div`
  margin-top: 10px;
  display: flex;
  flex-direction: column;

  strong {
    font-size: 14px;
  }

  input {
    margin-top: 5px;
    font-size: 16px;
  }
`;
