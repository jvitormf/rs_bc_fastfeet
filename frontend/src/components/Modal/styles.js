import styled from 'styled-components';
import { darken } from 'polished';

export const Box = styled.div`
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 10px #00000033;
  width: 100%;
  max-width: 450px;
  padding: 20px;
  margin: 0 10px;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    margin-bottom: 10px;

    font-weight: bold;
    text-transform: uppercase;

    button {
      border: 0;
      background: none;

      &:hover {
        svg {
          fill: ${darken(0.15, '#bbb')};
        }
      }
    }
  }
`;

export const Container = styled.div`
  position: absolute;
  top: 0;
  left: 0;

  background: rgba(0, 0, 0, 0.8);
  width: 100%;
  height: 100%;

  display: flex;
  align-items: ${(props) => (props.atTop ? 'flex-start' : 'center')};
  justify-content: center;

  ${Box} {
    margin-top: ${(props) => (props.atTop ? '10px' : 0)};
  }
`;
