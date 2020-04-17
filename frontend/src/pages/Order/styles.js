import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  max-width: 900px;
  margin: 10px auto;

  .show {
    display: block !important;
  }

  #clearFilter {
    display: flex;
    margin-top: 3px;
    margin-left: 5px;
    display: flex;
    padding: 0 10px;
    height: 42px;
    background: #7d40e7;
    border: 0;
    border-radius: 4px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.03, '#7d40e7')};
    }
  }
`;

export const Table = styled.table`
  display: table;
  width: 100%;
  margin-top: 10px;
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

export const Pagination = styled.div`
  margin-top: 15px;
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
`;

export const AddressInfo = styled.div`
  strong {
    font-size: 14px;
  }

  p {
    margin-top: 5px;
    font-size: 16px;
    line-height: 20px;
  }
`;

export const DateInfo = styled.div`
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);

  > strong {
    font-size: 14px;
  }

  p {
    margin-top: 5px;
    font-size: 16px;
    line-height: 20px;
  }
`;

export const SignatureInfo = styled.div`
  margin-top: 10px;
  padding-top: 10px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;

  img {
    margin: 15px;
    padding: 5px;
    width: 250px;
    height: 50px;
  }
`;
