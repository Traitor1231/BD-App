import React from 'react';
import TerminalInterface from "./TerminalInterface";
import StoreContext from "../../../StoreContext";

const TerminalInterfaceContainer = () => {

    return <StoreContext.Consumer>
        {store => {
            return <TerminalInterface store={store}/>
        }
        }
    </StoreContext.Consumer>
}

export default TerminalInterfaceContainer;