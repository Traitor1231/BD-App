import React from 'react';
import TerminalInterface from "./TerminalInterface/TerminalInterface";
import {OperatorTextWrapper} from "./OperatorsStyles";



const BeeLine = (props) =>{

    return (
        <div>
            <OperatorTextWrapper>BEELINE</OperatorTextWrapper>
            <TerminalInterface/>
        </div>
    )

}

export default BeeLine