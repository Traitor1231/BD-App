import React from 'react';
import TerminalInterface from "./TerminalInterface/TerminalInterface";
import {OperatorTextWrapper} from "./OperatorsStyles";


const BeeLine = (props) => {

    return (
        <main>
            <section>
                <OperatorTextWrapper>BEELINE</OperatorTextWrapper>
                <TerminalInterface props={props}/>
            </section>
        </main>
    )

}

export default BeeLine