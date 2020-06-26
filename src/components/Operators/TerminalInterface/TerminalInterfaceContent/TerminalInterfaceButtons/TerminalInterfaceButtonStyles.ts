import styled from 'styled-components'

export const Button = styled.button`
  width: 50%;
  padding: 10px 2vw;
  font-size: 4vw;
  color: white;
  border-radius: 500px 0px 0px 500px;
  background: none;
  border: 2px solid white;
  margin: 1.3vw 0px;
  transition: 0.3s;
  cursor: pointer;
  outline: none;
  :hover {
    transform: scale(1.1);
    background: white;
    border: 2px solid black;
    color: black;
  }
  @media (max-width: 357px) {
    font-size: 14px;
  }
`;
