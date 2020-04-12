import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Header = styled.header`
  justify-content: center;
  align-items: center;

  strong {
    display: block;
    margin-top: 5px;
    padding: 5px 0;
    font-size: 24px;
    font-weight: bold;
    color: #444444;
  }

  div {
    margin-top: 5px;
    display: flex;
    align-items: center;
    align-self: center;
    justify-content: ${(props) =>
      props.primary ? 'space-between' : 'flex-end'};

    input {
      height: 36px;
      margin-top: 5px;
      border: solid 2px;
      border-color: #dddddd;
      height: 45px;
      border-radius: 4px;
      padding: 0 15px;
    }
  }
`;

export const Button = styled.button`
  display: flex;
  margin-top: 3px;
  align-items: center;
  text-align: center;
  padding: 0 30px;
  height: 42px;
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
  margin-right: 20px;
  &:hover {
    background: ${darken(0.03, '#CCCCCC')};
  }
`;
