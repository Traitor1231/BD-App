import React from 'react';
import TerminalInterface from "./TerminalInterface/TerminalInterface";
import {OperatorTextWrapper} from "./OperatorsStyles";

const Megafon = (props) =>{

    return (
        <main>
            <section>
                <OperatorTextWrapper>MEGAFON</OperatorTextWrapper>
                <TerminalInterface props={props}/>
            </section>
        </main>
    )

}

export default Megafon