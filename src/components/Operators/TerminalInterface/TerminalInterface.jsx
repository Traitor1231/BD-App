import React from 'react';
import {NavLink} from "react-router-dom";
import {BackButton, Form, Input, InputWrapper, PayButton} from "./TerminalinterfaceStyles";

let ValidatePhoneInput = React.createRef();
let ValidateSumInput = React.createRef();

const TerminalInterface = () => {


    let SubmitForm = (e) => {
        e.preventDefault()

        /* let PhoneText = ValidatePhoneInput.current.value;
           let SumText = ValidatePhoneInput.current.value;

   /!*        if (PhoneText > 1000 || PhoneText < 0) {
               alert("Введите значение в диапазоне от 0 до 1000")
               e.preventDefault()
           } else if (PhoneText === "") {
               alert("Вы не заполнили поле с телефоном")
               e.preventDefault()
           }
           if (SumText > 1000 || SumText < 0) {
               alert("Введите значение в диапазоне от 0 до 1000")
               e.preventDefault()
           } else if (SumText === "") {
               alert("Вы не заполнили поле c суммой")
               e.preventDefault()
           } else {
               alert("успех")
           }*!/*/

    }
    return (
        <Form action="/" onSubmit={SubmitForm}>
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