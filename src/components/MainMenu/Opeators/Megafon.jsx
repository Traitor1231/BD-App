import React from 'react';
import TerminalInterface from "./TerminalInterface/TerminalInterface";
import styled from "styled-components";

const OperatorTextWrapper = styled.div`
    color:white;
    font-size:10vw;
`

const Megafon = (props) =>{

    return (
        <div>

            <OperatorTextWrapper>MEGAFON</OperatorTextWrapper>
            <TerminalInterface/>
        </div>
    )

}

export default Megafon