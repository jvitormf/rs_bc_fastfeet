import styled from 'styled-components';

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

      button {
        border: 0;
        background: none;
      }
    }
  }
`;
