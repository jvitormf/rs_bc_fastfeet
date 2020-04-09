import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
`;

export const Badge = styled.button`
  background: none;
  border: 0;
  position: relative;
`;

export const MenuList = styled.div`
  position: absolute;
  width: ${(props) => (props.primary ? '120px' : '200px')};
  background: #fff;
  box-shadow: 0 0 5px #000000;
  border-radius: 4px;
  left: calc(50% - ${(props) => (props.primary ? '60px' : '100px')});
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
  flex-direction: column;

  div {
    display: flex;
    align-content: center;
    text-align: left;
    line-height: 20px;

    & + div {
      margin-top: 10px;
      padding-top: 10px;
      border-top: 1px solid rgba(0, 0, 0, 0.1);
    }
  }

  a {
    margin-top: 2px;
    font-size: 16px;
    margin-left: 5px;
    text-decoration: none;
    color: #999999;
  }
`;
