import React from 'react';
import {NavLink} from "react-router-dom";
import {ErrorDiv,BackButton, Form, Input, InputWrapper, PayButton} from "./TerminalinterfaceStyles";

let ValidatePhoneInput = React.createRef();
let ValidateSumInput = React.createRef();

const TerminalInterface = () => {


    let SubmitForm = (e) => {
        e.preventDefault()
        let PhoneText = ValidatePhoneInput.current.value;
        let SumText = ValidateSumInput.current.value;
        let error = document.querySelector(".error")
        if (PhoneText > 1000 || PhoneText < 0) {
            error.innerHTML = "Введите значение в диапазоне от 0 до 1000 в поле: Телефон";
            e.preventDefault()
        } else if (PhoneText === "") {
            error.innerHTML = "Вы не заполнили поле: Телефон";
            e.preventDefault()
        } else if (SumText > 1000 || SumText < 0) {
            error.innerHTML = "Введите значение в диапазоне от 0 до 1000 в поле: Сумма";
            e.preventDefault()
        } else if (SumText === "") {
            error.innerHTML = "Вы не заполнили поле: Сумма";
            e.preventDefault()
        } else {
            error.innerHTML = "успех";
        }

    }

    return (
        <Form  action="/" onSubmit={SubmitForm}>
            <ErrorDiv className={"error"}></ErrorDiv>
            <InputWrapper>
                <Input type={"tel"} ref={ValidatePhoneInput} placeholder={"Телефон"}/>
            </InputWrapper>
            <InputWrapper>
                <Input type={"number"} ref={ValidateSumInput} placeholder={"Сумма"}/>
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