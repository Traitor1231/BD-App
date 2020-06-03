import React, {useEffect, useState} from 'react';
import {NavLink, Redirect} from "react-router-dom";
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

export let PhoneInputRef = React.createRef();
export let SumInputRef = React.createRef();
export let ErrorTextRef = React.createRef();

const TerminalInterface = (props) => {
    let [EditMode, SetEditMode] = useState()
    useEffect(() => {
        SetEditMode(props.store.state.payableStatus.isPayed)
    }, [props.store.state.payableStatus.isPayed])
    if (EditMode === true && props.Redirect() === true) return <Redirect to={"/"}/>

    return (
        <Form action="/" onSubmit={props.FormValidate}>
            <ErrorText ref={ErrorTextRef}/>
            <InputWrapper>
                <InputMask mask="+7 (999) 999-99-99">
                    {() => <PhoneInput type={"tel"}
                                       onInvalid={props.PhoneValidateValue}
                                       ref={PhoneInputRef}
                                       pattern={"\\+7\\s\\(\\d{3}\\)\\s\\d{3}-\\d{2}-\\d{2}"}
                                       placeholder={"Телефон"}
                                       title=""/>}
                </InputMask>
            </InputWrapper>
            <InputWrapper>
                <SumInput type={"number"}
                          onBlur={props.DeleteRubleSymbol}
                          onFocus={props.AddRubleSymbol}
                          onInput={props.SumValidateMaxValue}
                          ref={SumInputRef}
                          placeholder={"Сумма"}/>
            </InputWrapper>
            <InputWrapper>
                <PayButton type={"submit"}>Оплатить</PayButton>
                <NavLink to="/">
                    <BackButton onClick={props.ReturnToMainMenu}>Назад</BackButton>
                </NavLink>
            </InputWrapper>
        </Form>

    )
}
export default TerminalInterface