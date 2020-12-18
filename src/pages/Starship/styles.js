import styled from 'styled-components';

export const Container = styled.div`

  h3 {
    font-weight: bold;
    margin-top: 30px;
    display: flex;
    justify-content: center;
  }

  select {
    position: absolute;
    margin-left: 40px;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: center;

  margin: 30px 0;
`;

export const Table = styled.table`
  min-width: 1100px;
  border-collapse: collapse;
  margin: 0 30px;

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
        display: flex;
        flex-direction: column;
        text-decoration: none;
        color: #fff;
      }

      td {
        padding: 10px;
        text-align: left;
        margin-right: 5px;
      }
    }
  }
`;

export const Pagination = styled.div`
  display: flex;
  width: 1100px;
  justify-content: space-around;
  margin-top: 20px;

`;

export const PaginationButton = styled.div`
  display: flex;
`;

export const PaginationItem = styled.div`
  margin: 0 10px;
  cursor: pointer;

  ${(props) => props.isSelect && {
    background: '#6d6d6d',
    color: '#f4ede8',
    padding: '0 5px',
    borderRadius: '5px',
  }}
`;
