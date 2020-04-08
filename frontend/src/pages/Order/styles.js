import styled from 'styled-components';

export const Container = styled.div`
  max-width: 900px;
  margin: 10px auto;
`;

export const Table = styled.table`
  width: 100%;
  margin-top: 20px;
  border-collapse: collapse;

  thead tr {
    text-align: left;
  }

  tbody tr {
    height: 20px;
    border-top: 10px;
    padding-top: 10px;
    height: 50px;
    background: #fff;
  }

  td {
    border-radius: 4px;
  }
`;
