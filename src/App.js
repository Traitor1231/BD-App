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
                <Route exact path='/' render={ () => <Navigation store={props.store}/> } />
                <Route path='/Mts'  render={ () => <Mts props={props}/>}/>
                <Route path='/BeeLine' render={ () => <BeeLine props={props}/> } />
                <Route path='/Megafon' render={ () => <Megafon props={props}/> } />
            </MainContaner>
        </WreapperMainContaner>
    )

}

export default App