import React from 'react'
import TerminalInterface from './TerminalInterface'
import StoreContext from '../../../StoreContext'

const TerminalInterfaceContainer: React.FC = () => {
  return (
    <StoreContext.Consumer>
      {(store: any) => <TerminalInterface store={store}/>}
    </StoreContext.Consumer>
  )
};

export default TerminalInterfaceContainer
