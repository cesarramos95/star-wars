import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const CardDetail = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  min-height: 400px;
  min-width: 600px;

  background: #28262e;
  border-radius: 5px;


  div {
    white-space: pre-wrap;
    line-height: 24px;

    h3 {
      font-weight: bold;
      margin-bottom: 20px;
    }

    span {
      margin-left: 10px;
    }
  }
`;
