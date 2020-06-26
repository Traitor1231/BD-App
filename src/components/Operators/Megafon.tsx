import React from 'react'
import { OperatorTextWrapper } from './OperatorsStyles'
import TerminalInterfaceContainer from './TerminalInterface/TerminalInterfaceContaner'

const Megafon: React.FC = () => {
  return (
    <main>
      <section>
        <OperatorTextWrapper>MEGAFON</OperatorTextWrapper>
        <TerminalInterfaceContainer/>
      </section>
    </main>
  )
};
export default Megafon
