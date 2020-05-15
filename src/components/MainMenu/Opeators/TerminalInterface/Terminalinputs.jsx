import React from 'react';
import {NavLink} from "react-router-dom";
import styled from "styled-components";

let ValidatePhoneInput = React.createRef();
let ValidateSumInput = React.createRef();


const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
     margin: 0px 10px;
`
const PayButton = styled.button`
    width:50%;
    padding: 10px 18px;
    font-size:12pt;
    color: white;
    border-radius: 10px 0px 0px 10px;
    height: 50px;
    background: none;
    border: 2px solid white;
    margin: 15px 0px;
    transition:0.5s;
    cursor:pointer;
    outline:none;
    :hover{
    transform: scale(1.1);
     background: white;
     border: 2px solid black;
     color:black;
    }
`
const BackButton = styled(PayButton)`
    width:50%;
    border-radius: 0px 10px 10px 0px;
`

const Input = styled.input`
    width: 100%;
    padding: 10px 18px;
    font-size:12pt;
    color: white;
    border-radius: 10px;
    height: 50px;
    background: none;
    border: 2px solid white;
    margin: 15px 0px;
    transition:1s;
    outline:none;
    ::placeholder{
    color:white;
    font-size:12pt;
    }
    :hover,:focus{
    transform: scale(1.05);  
    color:black;
    background:white;
    border: 2px solid black;
    ::placeholder{
    color:black;
    }
    ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
    }
  `
const Terminalinputs = (props) => {


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
            <div>
                <Input type={"tel"} ref={ValidatePhoneInput} placeholder={"Телефон"}/>
            </div>
            <div>
                <Input type={"number"} ref={ValidateSumInput} placeholder={"Сумма"}/>

            </div>

            <div>
                <PayButton type={"submit"}>Оплатить</PayButton>
                <NavLink to="/">
                    <BackButton>Назад</BackButton>
                </NavLink>
            </div>

        </Form>
    )

}

export default Terminalinputs