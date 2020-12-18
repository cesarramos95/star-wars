import styled, { css } from 'styled-components';
import { shade } from 'polished';

export const Form = styled.form`
  margin-top: 40px;
  min-width: 700px;

  display: flex;
  justify-content: center;

  input {
    height: 50px;
    padding: 0 24px;
    border: 0;
    border-radius: 5px 0 0 5px;
    color: #3a3a3a;
    border: 2px solid #fff;
    border-right: 0;

    ${(props) => props.hasError
      && css`
        border-color: #c53030;
      `}

    &::placeholder {
      color: #a8a8b3;
    }
  }

  button {
    width: 100px;
    height: 50px;
    background: #1ec7c7;
    border-radius: 8px 5px 5px 0px;
    border: 0;
    color: #fff;
    font-weight: bold;
    transition: background-color 0.2s;

    &:hover {
      background: ${shade(0.2, '#1ec7c7')};
    }
  }
`;

export const Error = styled.span`
  display: flex;
  margin-left: 300px;
  color: #c53030;
  margin-top: 8px;
`;

export const Table = styled.table`
  max-width: 1100px;
  width: 700px;
  border-collapse: collapse;
  margin-top: 30px;

  th {
    padding: 10px;
    color: #ffd900;
    border-bottom: 1px solid #bcbcbc;
    text-align: left;
  }

  tbody {
    width: 100%;

    tr {
      text-align: left;
      border-bottom: 1px solid #bcbcbc;
      line-height: 15px;

      a {
        text-decoration: none;
        color: #fff;
      }

      td {
        padding: 10px;
        text-align: left;
      }
    }
  }
`;
