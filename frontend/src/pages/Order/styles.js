import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 900px;
  margin: 10px auto;

  footer {
    margin-top: 20px;

    > div {
      display: flex;
      justify-content: center;

      button {
        display: flex;
        justify-content: space-around;
        width: max-content;
        background: #7d40e7;
        border: 0;
        border-radius: 4px;

        &:hover {
          background: ${darken(0.03, '#7d40e7')};
        }

        & + button {
          margin-left: 10px;
        }
      }

      p {
        padding: 0 20px;
        font-size: 20px;
        font-weight: bold;
        align-self: center;
      }
    }
  }
`;

export const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 10px;

  thead tr th {
    padding: 5px 10px 5px;
    text-align: left;
    font-size: 16px;
    font-weight: bold;

    &:first-child {
      width: 70px;
    }
    &:last-child {
      padding: 0;
      width: max-content;
      text-align: center;
    }
  }

  tbody tr {
    height: 50px;
    background: #ffffff;

    td {
      border: 1px solid #ffffff;
      padding: 0 10px;
      color: #666666;
      font-size: 16px;
      background: #ffffff;

      &:last-child {
        text-align: center;
      }

      &:first-child {
        border-top-left-radius: 4px;
      }

      &:last-child {
        border-top-right-radius: 4px;
      }

      &:first-child {
        border-bottom-left-radius: 4px;
      }

      &:last-child {
        border-bottom-right-radius: 4px;
      }
    }
  }
`;
