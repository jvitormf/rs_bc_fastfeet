import styled from 'styled-components';

export const Container = styled.div`
  div {
    display: flex;
    width: max-content;
    background: ${(props) => props.background};
    border-radius: 15px;
    padding: 5px 10px 5px 5px;

    p {
      color: ${(props) => props.foreground};
      font-weight: bold;
      font-size: 14px;
      line-height: 16px;
      text-transform: uppercase;
      margin-left: 2px;
    }
  }
`;
