import React from 'react';
import Terminalinputs from "./TerminalInterface/Terminalinputs";
import {OperatorTextWrapper} from "./OperatorsStyles";



const BeeLine = (props) =>{

    return (
        <div>
            <OperatorTextWrapper>BEELINE</OperatorTextWrapper>
            <Terminalinputs/>
        </div>
    )

}

export default BeeLine