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
        SetEditMode(props.store._state.payableStatus.isPayed)
    }, [props.store._state.payableStatus.isPayed])
    if (EditMode === true) {
        let num = Math.floor(Math.random() * (2 - 1 + 1) + 1);
        if (num === 1) {
            props.store.SubmitData()
            alert("Оплата произошла успешно")
            return <Redirect to={"/"}/>
        } else {
            props.store.RejectData()
            alert("При оплате произошла ошибка, попробуйте позже")
        }
    }
    return (
        <Form action="/" onSubmit={props.store.FormValidate}>
            <ErrorText ref={ErrorTextRef}/>
            <InputWrapper>
                <InputMask mask="+7 (999) 999-99-99">
                    {() => <PhoneInput type={"tel"} onInvalid={props.store.PhoneValidateValue}
                                       ref={PhoneInputRef}
                                       pattern={"\\+7\\s\\(\\d{3}\\)\\s\\d{3}-\\d{2}-\\d{2}"} placeholder={"Телефон"}
                                       title=""/>}
                </InputMask>
            </InputWrapper>
            <InputWrapper>
                <SumInput type={"text"} onBlur={props.store.DeleteRubleSymbol}
                          onClick={props.store.AddRubleSymbol} onInput={props.store.SumValidateMaxValue}
                          ref={SumInputRef} placeholder={"Сумма"}/>
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