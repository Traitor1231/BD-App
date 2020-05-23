import React from 'react';

export let PhoneInputRef = React.createRef();
export let SumInputRef = React.createRef();
export let ErrorTextRef = React.createRef();

export let SumValidateMaxValue = () => {
    if (SumInputRef.current.value.length > 3) SumInputRef.current.value = SumInputRef.current.value.substring(0, 4);
}
export let PhoneValidateValue = (e) => {
    if (!e.target.validity.valid) ErrorTextRef.current.innerHTML = "Введите корректный адрес телефона"; e.preventDefault();

};
export let SubmitForm = (e) => {
    e.preventDefault()
    if (PhoneInputRef.current.validity.valid  && SumInputRef.current.validity.valid )  ErrorTextRef.current.innerHTML = "Оплачено";
    if (PhoneInputRef.current.value === "") ErrorTextRef.current.innerHTML = "Вы не заполнили поле: Телефон"; e.preventDefault()
    if (SumInputRef.current.value > 1000 || SumInputRef.current.value < 1) ErrorTextRef.current.innerHTML = "Введите значение в диапазоне от 1 до 1000 в поле: \"Сумма\""; e.preventDefault()
    if (SumInputRef.current.value === "") ErrorTextRef.current.innerHTML = "Вы не заполнили поле: \"Сумма\"";e.preventDefault()
    if (SumInputRef.current.value.startsWith(0))  ErrorTextRef.current.innerHTML = "Поле: \"Сумма\" не может начинаться с нуля"; e.preventDefault()

}