import React from 'react';
import {NavLink} from "react-router-dom";
import {
    ErrorDiv,
    BackButton,
    Form,
    InputWrapper,
    PayButton,
    PhoneInput,
    SumInput
} from "./TerminalinterfaceStyles";
import InputMask from 'react-input-mask';
import {PhoneInputRef,SumInputRef}  from "../../../validation/validation"
const TerminalInterface = (props) => {
    return (
        <Form action="/" onSubmit={props.props.validators.SubmitForm}>
            <ErrorDiv className={"error"}></ErrorDiv>
            <InputWrapper>
                <InputMask  mask="+7 (999) 999-99-99">
                    {() => <PhoneInput title="" onInvalid={props.props.validators.PhoneValidateValue} pattern={"\\+7\\s\\(\\d{3}\\)\\s\\d{3}-\\d{2}-\\d{2}"} type={"tel"} ref={PhoneInputRef} placeholder={"Телефон"}/>}
                </InputMask>
            </InputWrapper>
            <InputWrapper>
                <SumInput type={"number"} onInput={props.props.validators.SumValidateMaxValue} ref={SumInputRef} placeholder={"Сумма"}/>
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