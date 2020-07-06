import React from 'react'
import { Button } from './TerminalInterfaceButtonStyles'
import { useHistory } from 'react-router-dom'
import { TerminalInterfacePropsType } from '../../../../../Types/TerminalInterfacePropsType';

// @ts-ignore
const TerminalInterfaceButtons: React.FC<TerminalInterfacePropsType> = ({ TerminalInterfaceProps }) => {
  const history = useHistory();
  return (
    TerminalInterfaceProps.map((ButtonsAttributesData) => (
      <Button onClick={() => history.push(ButtonsAttributesData.ref)} type={ButtonsAttributesData.attribute}>{ButtonsAttributesData.text}</Button>
    ))
  )
};
export default TerminalInterfaceButtons
