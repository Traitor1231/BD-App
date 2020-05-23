import React from 'react';
import {Route} from "react-router-dom";
import Mts from "./components/Operators/Mts";
import BeeLine from "./components/Operators/BeeLine";
import Megafon from "./components/Operators/Megafon";
import Navigation from "./components/Navigation/Navigation";
import {MainContaner, WreapperMainContaner} from "./AppStyles";;

const App = (props) => {
    return (
        <WreapperMainContaner>
            <MainContaner>
                <Route exact path='/' render={ () => <Navigation /> } />
                <Route path='/Mts'  render={ () => <Mts validators={props}/>}/>
                <Route path='/BeeLine' render={ () => <BeeLine validators={props}/> } />
                <Route path='/Megafon' render={ () => <Megafon validators={props}/> } />
            </MainContaner>
        </WreapperMainContaner>
    )

}

export default App