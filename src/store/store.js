import BeeLine_logo from "../assets/images/Bee-Line-logo.png"
import Mts_logo from "../assets/images/Mts-logo.png"
import MegaFon_logo from "../assets/images/Megafon-logo.png"
import {rerenderEntireTree} from "../index";
import {PhoneInputRef,SumInputRef,ErrorTextRef} from "../components/Operators/TerminalInterface/TerminalInterface"

let store = {

    _state: {
        operatorsInfo: [
            {
                name: "BEELINE",
                image: BeeLine_logo,
                alt: "BEELINE",
            },
            {
                name: "MTS",
                image: Mts_logo,
                alt: "MTS",
            }
            ,
            {
                name: "MEGAFON",
                image: MegaFon_logo,
                alt: "MEGAFON",
            }
        ],
        payableStatus: {
            isPayed: false
        }
    },
    getState() {
        return this._state;
    },
    SubmitData() {
        this.getState().payableStatus.isPayed = false
    },
    RejectData() {
        this.getState().payableStatus.isPayed = true
    },
    SumValidateMaxValue() {
        if (SumInputRef.current.value.length > 3) SumInputRef.current.value = SumInputRef.current.value.substring(0, 4);
        SumInputRef.current.value = SumInputRef.current.value.replace(/[^\d]/g, '');
        SumInputRef.current.value = SumInputRef.current.value + "₽";
        SumInputRef.current.selectionEnd = SumInputRef.current.selectionStart - 1;
        if (SumInputRef.current.value[0].includes("₽")) SumInputRef.current.value = SumInputRef.current.value.replace("₽", '')
    },
    AddRubleSymbol() {
        if (!SumInputRef.current.value.includes("₽")) SumInputRef.current.value = SumInputRef.current.value + "₽";
        SumInputRef.current.selectionEnd = SumInputRef.current.selectionStart - 1;
    },
    DeleteRubleSymbol() {
        if (SumInputRef.current.value.includes("₽")) SumInputRef.current.value = SumInputRef.current.value.replace("₽", '')
    },
    PhoneValidateValue(e) {
        if (!e.target.validity.valid) ErrorTextRef.current.innerHTML = "Введите корректный адрес телефона";
        e.preventDefault();
    },
    FormValidate(e) {
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
            ErrorTextRef.current.innerHTML = "Отправка данных на сервер";
            setTimeout(() => {
                ErrorTextRef.current.innerHTML = "Ожидание ответа от сервера...";
            }, 1000)
            setTimeout(() => {
                store.RejectData()
                rerenderEntireTree()
                if (store.getState().payableStatus.isPayed === true) {
                    ErrorTextRef.current.innerHTML = "При оплате произошла ошибка, попробуйте позже";
                }
            }, 2000)
        }
    }
}
export default store;