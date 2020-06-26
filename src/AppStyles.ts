import styled from 'styled-components'

export const WreapperMainContaner = styled.div`
  text-align: center;
  min-width: 300px;
  max-height: 100vh;
`;

export const MainContaner = styled.div`
  margin: auto 15%;
  opacity:0;
  transition: 1s;
  animation: show 3s 1;
  animation-fill-mode: forwards;
  animation-delay: 0.5s;
  @keyframes show{
       0%{
           opacity:0;
      }
       100% {
           opacity:1;
      }
  }
`;
