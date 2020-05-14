import React from 'react';
import {Route} from "react-router-dom";
import Mts from "./Opeators/Mts";
import BeeLine from "./Opeators/BeeLine";
import Megafon from "./Opeators/Megafon";
import Navigation from "./Navigation/Navigation";
import styled from "styled-components";


const WreapperMainContaner = styled.div`
      height: ${document.querySelector("html").clientHeight + "px"};
      display:flex;
      justify-content:center;
      align-items:center;

      
      background: linear-gradient(-45deg, #ee7752, #e73c7e, #23a6d5, #23d5ab);
      background-size: 400% 400%;
      animation: gradient 10s ease infinite;

        @keyframes gradient {
         0% {
        background-position: 0% 50%;
        }
         50% {
        background-position: 100% 50%;
         }
         100% {
        background-position: 0% 50%;
       }
}
`


const MainContaner = styled.div`
   min-width: 250px;
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
   
`

const MainMenu = (props) => {

    return (
        <WreapperMainContaner>
            <MainContaner>

                <Route exact path='/' component={Navigation}/>
                <Route path='/Mts' component={Mts}/>
                <Route path='/BeeLine' component={BeeLine}/>
                <Route path='/Megafon' component={Megafon}/>
            </MainContaner>
        </WreapperMainContaner>
    )

}

export default MainMenu