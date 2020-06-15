import styled from 'styled-components'

export const OperatorLogoWrapper = styled.div`
  display: inline-block;
  margin: 10px 0px;
  -webkit-transition: all 0.3s ease;
  -moz-transition: all 0.3s ease;
  -o-transition: all 0.3s ease;
  transition: all 0.3s ease;
  :hover {
    -webkit-transform: scale(1.2);
    -ms-transform: scale(1.2);
    transform: scale(1.2);
    filter: invert(1);
  }
`

export const ChooseOperatorTextWrapper = styled.h1`
  font-weight: normal;
  padding: 10px 20px;
  text-align: center;
  color: white;
  font-size: 2.5vw;
  @media (max-width: 1045px) {
    font-size: 26px;
  }
`

export const OperatorLogo = styled.img`
  width: 15vw;
  @media (max-width: 1045px) {
    width: 155px;
  }
`

export const OperatorTextWrapper = styled.div`
  color: white;
  font-size: 2vw;
  @media (max-width: 1045px) {
    font-size: 20px;
  }
`
