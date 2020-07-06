import React from 'react'
import TerminalInterface from './TerminalInterface'
import { validate } from '../../../Utils/Utils'

type FormInputsValidateDataType = {
    name: string,
    mask: Array<string>,
    placeholder: string,
    type: string,
    guide: boolean,
    autoComplete: string,
    validate: string | undefined,
    attribute: 'submit' | 'reset' | 'button',
    text: string,
    ref: string
}

const TerminalInterfaceProps = {
  AttrubutesDataForForm: [
    {
      name: 'Phone',
      mask: ['+', 7, ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/],
      placeholder: 'Телефон',
      type: 'tel',
      guide: true,
      autoComplete: 'off',
      validate: undefined,
      attribute: 'submit',
      text: 'Оплатить',
      ref: '#'
    },
    {
      name: 'Sum',
      mask: [/\d/, /\d/, /\d/, /\d/],
      placeholder: 'Сумма',
      type: 'text',
      guide: false,
      autoComplete: 'off',
      validate,
      attribute: 'button',
      text: 'Назад',
      ref: '/'
    }
  ] as Array<FormInputsValidateDataType>
};

const TerminalInterfaceContainer: React.FC = () => <TerminalInterface TerminalInterfaceProps={TerminalInterfaceProps.AttrubutesDataForForm}/>;

export default TerminalInterfaceContainer
