import styled from 'styled-components';

export const Container = styled.div`
  height: max-content;

  h3 {
    font-weight: bold;
    margin: 30px 0;
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
  margin: 10px 0;

  max-height: max-content;


`;

export const Table = styled.table`
  width: 1100px;
  max-height: max-content;
  border-collapse: collapse;

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
