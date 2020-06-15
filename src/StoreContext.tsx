import React from 'react'

const StoreContext = React.createContext(null)

export const Provider = (props: { store: any; children: React.ReactNode; }) => (
  <StoreContext.Provider value={props.store}>
    {props.children}
  </StoreContext.Provider>
)

export default StoreContext
