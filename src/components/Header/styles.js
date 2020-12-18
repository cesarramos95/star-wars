import styled from 'styled-components';

export const Container = styled.header`
  display: flex;
  justify-content: space-between;

  height: 60px;
  background: #202024;
  align-items: center;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.5);

`;

export const Begin = styled.div`
   margin-left: 30px;

   a {
    color: #fff;
    width: 100%;
    padding: 10px 16px;

    text-decoration: none;

    strong {

    }
   }
`;

export const Pages = styled.div`
  display: flex;
  margin-right: 30px;
  align-items: center;

  a{
    flex: 1;
    color: #fff;
    padding: 0 20px;
    text-decoration: none;
    justify-content: space-between;
  }
`;
