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

      input {
        height: 36px;
        margin-top: 5px;
        border: solid 2px;
        border-color: #dddddd;
        height: 45px;
        border-radius: 4px;
        padding: 0 15px;
      }

      button {
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
      }
    }
  }
`;

export const Table = styled.table`
  width: 100%;
  margin-top: 20px;
  border: none;
  border-collapse: collapse;
  border-spacing: 0 20px;

  thead tr {
    padding-bottom: 10px;
    text-align: left;
  }

  tbody tr {
    height: 20px;
    border-top: 10px;
    padding-top: 10px;
    height: 50px;
    background: #fff;
    border-color: #fff;

    td {
      display: table-cell;
      text-align: left;
      padding: 5px 0;
      border-radius: 4px;
      max-width: 400px;

      img {
        height: 40px;
        width: 40px;
        border-radius: 50%;
        margin-right: 10px;
      }

      button {
        border: 0;
        background: none;
      }
    }
  }
`;
