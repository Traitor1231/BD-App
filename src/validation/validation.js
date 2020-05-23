import React from 'react';

export let PhoneInputRef = React.createRef();
export let SumInputRef = React.createRef();
export let SumValidateMaxValue = () => {
    if (SumInputRef.current.value.length > 3) {
        SumInputRef.current.value = SumInputRef.current.value.substring(0, 4);
    }
}
export let PhoneValidateValue = (e) => {
    let error = document.querySelector(".error");
    if (!e.target.validity.valid) {
        e.preventDefault();
        error.innerHTML = "Введите корректный адрес телефона";
    }
};
export let SubmitForm = (e) => {
    e.preventDefault()
    let PhoneNumber = PhoneInputRef.current.value;
    let SumCount = SumInputRef.current.value;
    let error = document.querySelector(".error");

    if (PhoneNumber === "") {
        error.innerHTML = "Вы не заполнили поле: Телефон";
        e.preventDefault()
    } else if (SumCount > 1000 || SumCount < 1) {
        error.innerHTML = "Введите значение в диапазоне от 1 до 1000 в поле: \"Сумма\"";
        e.preventDefault()
    } else if (SumCount === "") {
        error.innerHTML = "Вы не заполнили поле: \"Сумма\"";
        e.preventDefault()
    } else if (SumCount.startsWith(0)) {
        error.innerHTML = "Поле: \"Сумма\" не может начинаться с нуля";
        e.preventDefault()
    } else {
        error.innerHTML = "Оплачено";
    }
}