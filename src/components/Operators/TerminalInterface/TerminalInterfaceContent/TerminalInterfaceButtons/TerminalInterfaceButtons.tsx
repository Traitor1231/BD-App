import React from 'react'
import { Button } from './TerminalInterfaceButtonStyles'
import { StoreTypes } from '../../../../../Types/Types'
import { useHistory } from 'react-router-dom'

// @ts-ignore
const TerminalInterfaceButtons: React.FC<StoreTypes> = ({ store }) => {
  const history = useHistory();
  return (
    store.FormButtonsValidateData.map((store) => (
      <Button onClick={() => history.push(store.ref)} type={store.attribute}>{store.text}</Button>
    ))
  )
};
export default TerminalInterfaceButtons
