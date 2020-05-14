import React from 'react';
import TerminalInterface from "./TerminalInterface/TerminalInterface";
import styled from "styled-components";

const OperatorTextWrapper = styled.div`
    color:white;
    font-size:10vw;
`


const BeeLine = (props) =>{

    return (
        <div>
            <OperatorTextWrapper>BEELINE</OperatorTextWrapper>
            <TerminalInterface/>
        </div>
    )

}

export default BeeLine