import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  position: relative;
`;

export const Badge = styled.button`
  background: none;
  border: 0;
  width: 20px;
  height: 20px;
  position: relative;
  border-radius: 50%;

  &:hover {
    background: ${darken(0.03, '#E9E9E9')};
  }
`;

export const MenuList = styled.div`
  position: absolute;
  width: 200px;
  background: #fff;
  box-shadow: 0 0 5px #ddd;
  border-radius: 4px;
  left: calc(50% - 100px);
  top: calc(50% + 15px);
  padding: 10px;
  display: ${(props) => (props.visible ? 'block' : 'none')};
  z-index: 2;

  &::before {
    content: '';
    position: absolute;
    left: calc(50% - 10px);
    top: -10px;
    width: 0;
    height: 0;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    border-bottom: 10px solid #ddd;
  }
`;

export const Option = styled.div`
  display: flex;

  & + div {
    margin-top: 10px;
    padding-top: 10px;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }

  button {
    margin-left: 5px;
    background: 0;
    border: none;
    font-size: 16px;
    text-decoration: none;
    color: #999999;
  }
`;
