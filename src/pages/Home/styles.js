import styled from 'styled-components';

import homePageBackgroundImg from '../../assets/StarWarsBackground.png';

export const Container = styled.div`
  height: 100vh;
  width: 100%;
`;

export const Description = styled.div`
  height: 100vh;
  display: flex;
  flex: 1;

  justify-content: center;

  div {

    white-space: pre-wrap;

    font-size: 14px;
    color: #fff;

    line-height: auto;
    padding: 10px 10px 20px;
    margin: 5px 0;
    border-radius: 5px;

    /* background: rgba(0, 0, 0, 0.5); */

    h2{
      margin-bottom: 10px;
      font-weight: bold;
      color: #ffd900;
    }

    p {
      font-weight: bold;
      color: #ffd900;
    }
  }
`;

export const Background = styled.div`
  flex: 1;
  height: 100vh;
  background: url(${homePageBackgroundImg}) no-repeat center;
  background-size: cover;
`;
