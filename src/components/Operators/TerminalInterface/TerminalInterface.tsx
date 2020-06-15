import React, { useEffect, useState } from 'react'
import { NavLink, Redirect } from 'react-router-dom'
import InputMask from 'react-input-mask'
import {
  ErrorText,
  BackButton,
  Form,
  InputWrapper,
  PayButton,
  PhoneInput,
  SumInput
} from './TerminalinterfaceStyles'

export const PhoneInputRef = React.createRef() as React.RefObject<HTMLInputElement>
export const SumInputRef = React.createRef() as React.RefObject<HTMLInputElement>
export const ErrorTextRef = React.createRef() as React.RefObject<HTMLDivElement>
export const PayButtonRef = React.createRef() as React.RefObject<HTMLButtonElement>
export const BackButtonRef = React.createRef() as React.RefObject<HTMLButtonElement>
type TerminalInterfacePropsType = {
    FormValidate: (e: { preventDefault: () => void }) => void,
    PhoneValidateValue: (e: any) => void,
    ReturnToMainMenu: () => boolean,
    SumValidateMaxValue: () => void,
    DeleteRubleSymbol: () => void,
    AddRubleSymbol: () => void,
    isRedirect: () => boolean,
    store: {
        state: {
            payableStatus: {
                isPayed: boolean | any,
            },
        },
    },
};
const TerminalInterface: React.FC<TerminalInterfacePropsType> = ({
  store,
  isRedirect,
  FormValidate,
  PhoneValidateValue,
  DeleteRubleSymbol,
  AddRubleSymbol,
  SumValidateMaxValue,
  ReturnToMainMenu
}) => {
  const [EditMode, SetEditMode] = useState()
  useEffect(() => {
    SetEditMode(store.state.payableStatus.isPayed)
  }, [store.state.payableStatus.isPayed])
  if (EditMode === true && isRedirect()) return <Redirect to="/" />

  return (
    <Form action="/" onSubmit={FormValidate}>
      <ErrorText ref={ErrorTextRef} />
      <InputWrapper>
        <InputMask mask="+7 (999) 999-99-99">
          {() => (
            <PhoneInput
              type="tel"
              onInvalid={PhoneValidateValue}
              ref={PhoneInputRef}
              pattern={'\\+7\\s\\(\\d{3}\\)\\s\\d{3}-\\d{2}-\\d{2}'}
              placeholder="Телефон"
              title=""
            />
          )}
        </InputMask>
      </InputWrapper>
      <InputWrapper>
        <SumInput
          type="number"
          onBlur={DeleteRubleSymbol}
          onFocus={AddRubleSymbol}
          onInput={SumValidateMaxValue}
          ref={SumInputRef}
          placeholder="Сумма"
        />
      </InputWrapper>
      <InputWrapper>
        <PayButton ref={PayButtonRef} type="submit">
                    Оплатить
        </PayButton>
        <NavLink to="/">
          <BackButton ref={BackButtonRef} onClick={ReturnToMainMenu}>
                        Назад
          </BackButton>
        </NavLink>
      </InputWrapper>
    </Form>
  )
}
export default TerminalInterface
