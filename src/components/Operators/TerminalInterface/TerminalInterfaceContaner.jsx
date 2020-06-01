import React from 'react';
import TerminalInterface, {ErrorTextRef, PhoneInputRef, SumInputRef} from "./TerminalInterface";
import StoreContext from "../../../StoreContext";
import {rerenderEntireTree} from "../../../index";
const TerminalInterfaceContainer = () => {

    return <StoreContext.Consumer>
        {store => {
            let Sumbol = "₽"
            let SumValidateMaxValue = () => {
                if (SumInputRef.current.value.length > 3) SumInputRef.current.value = SumInputRef.current.value.substring(0, 4);
                SumInputRef.current.value = SumInputRef.current.value.replace(/[^\d]/g, '');
                SumInputRef.current.value = SumInputRef.current.value + Sumbol;
                SumInputRef.current.selectionEnd = SumInputRef.current.selectionStart - 1;
                if (SumInputRef.current.value[0].includes(Sumbol)) SumInputRef.current.value = SumInputRef.current.value.replace(Sumbol, '')
            };
            let AddRubleSymbol = () => {
                SumInputRef.current.type = "text"
                if (!SumInputRef.current.value.includes(Sumbol)) SumInputRef.current.value = SumInputRef.current.value + Sumbol;
                SumInputRef.current.selectionEnd = SumInputRef.current.selectionStart - 1;
            };
            let DeleteRubleSymbol = () => {
                if (SumInputRef.current.value.includes(Sumbol)) SumInputRef.current.value = SumInputRef.current.value.replace(Sumbol, '')
                SumInputRef.current.type = "number"
            };
            let PhoneValidateValue = (e) => {
                if (!e.target.validity.valid) ErrorTextRef.current.innerHTML = "Введите корректный адрес телефона";
                e.preventDefault();
            };
            let FormValidate = (e) => {
                e.preventDefault()
                SumInputRef.current.value = SumInputRef.current.value.replace(Sumbol, '')
                if (PhoneInputRef.current.value === "") {
                    ErrorTextRef.current.innerHTML = "Вы не заполнили поле: Телефон";
                    e.preventDefault()
                } else if (SumInputRef.current.value > 1000 || SumInputRef.current.value < 1) {
                    ErrorTextRef.current.innerHTML = "Введите значение в диапазоне от 1 до 1000 в поле: \"Сумма\"";
                    e.preventDefault()
                } else if (SumInputRef.current.value === "") {
                    ErrorTextRef.current.innerHTML = "Вы не заполнили поле: \"Сумма\"";
                    e.preventDefault()
                } else if (SumInputRef.current.value.startsWith(0)) {
                    ErrorTextRef.current.innerHTML = "Поле: \"Сумма\" не может начинаться с нуля";
                    e.preventDefault()
                } else {
                    SumInputRef.current.readOnly = true;
                    PhoneInputRef.current.readOnly = true;
                    ErrorTextRef.current.innerHTML = "Отправка данных на сервер";
                    setTimeout(() => {
                        ErrorTextRef.current.innerHTML = "Ожидание ответа от сервера...";
                    }, 2000)
                    setTimeout(() => {
                        store.SubmitData()
                        rerenderEntireTree()
                    }, 4000)
                }
            }
            let Redirect = () => {
                let num = Math.floor(Math.random() * (2 - 1 + 1) + 1);
                if (num === 1) {
                    SumInputRef.current.readOnly = false;
                    PhoneInputRef.current.readOnly = false;
                    store.RejectData()
                    alert("Оплата произошла успешно")
                    return true
                } else {
                    SumInputRef.current.readOnly = false;
                    PhoneInputRef.current.readOnly = false;
                    store.SubmitData()
                    ErrorTextRef.current.innerHTML = "При оплате произошла ошибка, попробуйте позже";
                    alert("При оплате произошла ошибка, попробуйте позже")
                }
            }
            let ReturnToMainMenu = () =>{
                store.RejectData()
            }
            return <TerminalInterface
                ReturnToMainMenu={ReturnToMainMenu}
                Redirect={Redirect}
                SumValidateMaxValue={SumValidateMaxValue}
                AddRubleSymbol={AddRubleSymbol}
                DeleteRubleSymbol={DeleteRubleSymbol}
                PhoneValidateValue={PhoneValidateValue}
                FormValidate={FormValidate}
                store={store}/>
        }
        }
    </StoreContext.Consumer>
}

export default TerminalInterfaceContainer;