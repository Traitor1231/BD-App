import React from 'react';
import TerminalInterface from "./TerminalInterface/TerminalInterface";
import {OperatorTextWrapper} from "./OperatorsStyles";


const Mts = (props) => {

    return (
        <div>
            <OperatorTextWrapper>MTS</OperatorTextWrapper>
            <TerminalInterface/>
        </div>
    )

}

export default Mts