import React from 'react'
import { OperatorTextWrapper } from './OperatorsStyles'
import TerminalInterfaceContainer from './TerminalInterface/TerminalInterfaceContaner'

const BeeLine: React.FC = () => {
  return (
    <main>
      <section>
        <OperatorTextWrapper>BEELINE</OperatorTextWrapper>
        <TerminalInterfaceContainer/>
      </section>
    </main>
  )
};
export default BeeLine
