import React from 'react';
import {NavLink, Route} from "react-router-dom";
import Mts from "./Opeators/Mts";
import BeeLine from "./Opeators/BeeLine";
import Megafon from "./Opeators/Megafon";
import Navigation from "./Navigation/Navigation";
import styled from "styled-components";


const WreapperMainContaner = styled.div`
      height: ${document.querySelector("html").clientHeight + "px"};
      border: solid 1px red;
      display:flex;
      justify-content:center;
      align-items:center
`

const Header = styled.h2`
  padding: 10px 20px;
  text-align: center;
  color: black;
  fontSize: 22px
`;
const MainContaner = styled.div`
  width: 600px;
  border: solid 1px black;
  min-width:320px;
`

const MainMenu = (props) => {

    return (
        <WreapperMainContaner>
            <MainContaner>
                <Header> MainMenu </Header>
                <Route exact path='/' component={Navigation}/>
                <Route path='/Mts' component={Mts}/>
                <Route path='/BeeLine' component={BeeLine}/>
                <Route path='/Megafon' component={Megafon}/>
            </MainContaner>
        </WreapperMainContaner>
    )

}

export default MainMenu