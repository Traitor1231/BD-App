import React from 'react';
import store from '../store/store'

export let PhoneInputRef = React.createRef();
export let SumInputRef = React.createRef();
export let ErrorTextRef = React.createRef();

export let SumValidateMaxValue = () => {
    if (SumInputRef.current.value.length > 3) SumInputRef.current.value = SumInputRef.current.value.substring(0, 4);
    SumInputRef.current.value = SumInputRef.current.value.replace(/[^\d]/g, '');
    SumInputRef.current.value = SumInputRef.current.value + "₽";
    SumInputRef.current.selectionEnd = SumInputRef.current.selectionStart - 1;
    if (SumInputRef.current.value[0].includes("₽")) SumInputRef.current.value = SumInputRef.current.value.replace("₽", '')
}
export let AddRubleSymbol = () => {
    if (!SumInputRef.current.value.includes("₽")) SumInputRef.current.value = SumInputRef.current.value + "₽";
    SumInputRef.current.selectionEnd = SumInputRef.current.selectionStart - 1;
}
export let DeleteRubleSymbol = () => {
    if (SumInputRef.current.value.includes("₽")) SumInputRef.current.value = SumInputRef.current.value.replace("₽", '')
}
export let PhoneValidateValue = (e) => {
    if (!e.target.validity.valid) ErrorTextRef.current.innerHTML = "Введите корректный адрес телефона";
    e.preventDefault();
};
export let FormValidate = (e) => {
    e.preventDefault()
    SumInputRef.current.value = SumInputRef.current.value.replace("₽", '')
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
        ErrorTextRef.current.innerHTML = "Ожидание ответа от сервера...";
        setTimeout(() => {
            store.ChangePayedStatus()
        }, 1000)
    }

}