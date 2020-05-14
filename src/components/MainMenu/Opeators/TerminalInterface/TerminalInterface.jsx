import React from 'react';
import {NavLink} from "react-router-dom";
import styled from "styled-components";

let ValidatePhoneInput = React.createRef();
let ValidateSumInput = React.createRef();


const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
`
const Button = styled.button`

`

const TerminalInterface = (props) => {


    let SubmitForm = (e) => {

        let PhoneText = ValidatePhoneInput.current.value;
        let SumText = ValidatePhoneInput.current.value;

        if (PhoneText > 1000 || PhoneText < 0) {
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
        }

    }
    return (
        <Form action="/" onSubmit={SubmitForm}>
            <div>
                <input type={"phone"} ref={ValidatePhoneInput} placeholder={"Телефон"}/>
            </div>
            <div>
                <input type={"number"} ref={ValidateSumInput} placeholder={"Сумма"}/>
            </div>
            <div>
                <Button type={"submit"}>Оплатить</Button>
            </div>
            <NavLink to="/">
                <Button>Назад</Button>
            </NavLink>
        </Form>
    )

}

export default TerminalInterface