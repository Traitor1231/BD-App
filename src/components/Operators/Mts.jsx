import React from 'react';
import TerminalInterface from "./TerminalInterface/TerminalInterface";
import {OperatorTextWrapper} from "./OperatorsStyles";


const Mts = (props) => {
    return (
        <main>
            <section>
                <OperatorTextWrapper>MTS</OperatorTextWrapper>
                <TerminalInterface props={props}/>
            </section>
        </main>
    )

}

export default Mts