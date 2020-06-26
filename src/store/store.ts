import BeeLine_logo from '../assets/images/Bee-Line-logo.png'
import Mts_logo from '../assets/images/Mts-logo.png'
import MegaFon_logo from '../assets/images/Megafon-logo.png'
import { validate } from '../Utils/Utils'

type OperatorsInfoType = {
    name: string
    image: string
    alt: string
}

type FormInputsValidateDataType = {
    name: string,
    mask: Array<string>,
    placeholder: string,
    type: string,
    guide: boolean,
    autoComplete: string,
    validate: string | undefined
}

type FormButtonsValidateData = {
    attribute: 'submit' | 'reset' | 'button',
    text: string,
    ref: string
}

const store = {
  operatorsInfo: [
    {
      name: 'BEELINE',
      image: BeeLine_logo,
      alt: 'BEELINE'
    },
    {
      name: 'MTS',
      image: Mts_logo,
      alt: 'MTS'
    },
    {
      name: 'MEGAFON',
      image: MegaFon_logo,
      alt: 'MEGAFON'
    }
  ] as Array<OperatorsInfoType>,
  FormInputsValidateData: [
    {
      name: 'Phone',
      mask: ['+', 7, ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, '-', /\d/, /\d/],
      placeholder: 'Телефон',
      type: 'tel',
      guide: true,
      autoComplete: 'off',
      validate: undefined
    },
    {
      name: 'Sum',
      mask: [/\d/, /\d/, /\d/, /\d/],
      placeholder: 'Сумма',
      type: 'text',
      guide: false,
      autoComplete: 'off',
      validate
    }
  ] as Array<FormInputsValidateDataType>,
  FormButtonsValidateData: [
    {
      attribute: 'submit',
      text: 'Оплатить',
      ref: '#'
    },
    {
      attribute: 'button',
      text: 'Назад',
      ref: '/'
    }
  ] as Array<FormButtonsValidateData>
};

export default store
