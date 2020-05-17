import React from 'react';
import TerminalInterface from "./TerminalInterface/TerminalInterface";
import {OperatorTextWrapper} from "./OperatorsStyles";


const BeeLine = () => {

    return (
        <main>
            <section>
                <OperatorTextWrapper>BEELINE</OperatorTextWrapper>
                <TerminalInterface/>
            </section>
        </main>
    )

}

export default BeeLine