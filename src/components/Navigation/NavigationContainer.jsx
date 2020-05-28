import React from 'react';
import StoreContext from "../../StoreContext";
import Navigation from "./Navigation";

const NavigationContainer = () => {

    return <StoreContext.Consumer>
        {store => {
            return <Navigation props={store}/>
        }
        }
    </StoreContext.Consumer>
}

export default NavigationContainer;