import React, {useState} from 'react';
import {NavLink} from "react-router-dom";
import {
    ErrorText,
    BackButton,
    Form,
    InputWrapper,
    PayButton,
    PhoneInput,
    SumInput
} from "./TerminalinterfaceStyles";
import InputMask from 'react-input-mask';
const TerminalInterface = (props) => {
    let [EditMode,SetEditMode] = useState(false)

     if(props.props.props.store._state.operatorsInfo[0].isPayed === true){
         SetEditMode(true)
     }

    return (
        <Form action="/" onSubmit={props.props.props.FormValidate}>
            <ErrorText ref={props.props.props.ErrorTextRef} />
            <InputWrapper>
                <InputMask  mask="+7 (999) 999-99-99">
                    {() => <PhoneInput type={"tel"} onInvalid={props.props.props.PhoneValidateValue} ref={props.props.props.PhoneInputRef}  pattern={"\\+7\\s\\(\\d{3}\\)\\s\\d{3}-\\d{2}-\\d{2}"} placeholder={"Телефон"} title=""/>}
                </InputMask>
            </InputWrapper>
            <InputWrapper>
                <SumInput  type={"text"} onBlur={props.props.props.DeleteRubleSymbol} onClick={props.props.props.AddRubleSymbol} onInput={props.props.props.SumValidateMaxValue} ref={props.props.props.SumInputRef} placeholder={"Сумма"}/>
            </InputWrapper>
            <InputWrapper>
                <PayButton type={"submit"}>Оплатить</PayButton>
                <NavLink to="/">
                    <BackButton>Назад</BackButton>
                </NavLink>
            </InputWrapper>
        </Form>
    )
}

export default TerminalInterface