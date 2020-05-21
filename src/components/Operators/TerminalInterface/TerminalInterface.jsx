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
let PhoneInputRef = React.createRef();
let SumInputRef = React.createRef();

const TerminalInterface = () => {


    let SumValidateMaxValue = () => {
        let SumMax = SumInputRef
     //   if(!SumMax.current.value.includes("₽")){
     //   SumMax.current.value = SumMax.current.value +"₽"

        if (SumMax.current.value.length > 4 ) {
            SumMax.current.value = SumMax.current.value.substring(0, 4);

        }
    }


    let PhoneValidateValue = (e) => {
        let error = document.querySelector(".error");
        if (!e.target.validity.valid ) {
            e.preventDefault();
            error.innerHTML = "Введите корректный адрес телефона";
        }


    };

    let SubmitForm = (e) => {


        e.preventDefault()
        let PhoneText = PhoneInputRef.current.value;
        let SumText = SumInputRef.current.value;
        let error = document.querySelector(".error");

        if (PhoneText === "") {
            error.innerHTML = "Вы не заполнили поле: Телефон";
            e.preventDefault()
        } else if (SumText > 1000 || SumText < 1) {
            error.innerHTML = "Введите значение в диапазоне от 1 до 1000 в поле: \"Сумма\"";
            e.preventDefault()
        } else if (SumText === "") {
            error.innerHTML = "Вы не заполнили поле: \"Сумма\"";
            e.preventDefault()
        } else if(SumText.startsWith(0)){
            error.innerHTML = "Поле: \"Сумма\" не может начинаться с нуля";
            e.preventDefault()
        } else {
            error.innerHTML = "Оплачено";
        }



    }



    return (

        <Form action="/" onSubmit={SubmitForm}>
            <ErrorDiv className={"error"}></ErrorDiv>
            <InputWrapper>
                <InputMask  mask="+7 (999) 999-99-99">
                    {() => <PhoneInput title="" onInvalid={PhoneValidateValue} pattern={"\\+7\\s\\(\\d{3}\\)\\s\\d{3}-\\d{2}-\\d{2}"} type={"tel"} ref={PhoneInputRef} placeholder={"Телефон"}/>}
                </InputMask>
            </InputWrapper>
            <InputWrapper>
                <SumInput onInput={SumValidateMaxValue} ref={SumInputRef} placeholder={"Сумма"}/>
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