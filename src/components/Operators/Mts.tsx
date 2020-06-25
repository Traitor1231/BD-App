import React from 'react'
import { OperatorTextWrapper } from './OperatorsStyles'
import TerminalInterfaceContainer from './TerminalInterface/TerminalInterfaceContaner'

const Mts: React.FC = () => {
    return (
        <main>
            <section>
                <OperatorTextWrapper>MTS</OperatorTextWrapper>
                <TerminalInterfaceContainer/>
            </section>
        </main>
    )
};

export default Mts
