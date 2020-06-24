import React from 'react'
import {Fieldset, SuccessMessageText} from './TerminalinterfaceStyles'
import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import TerminalInterfaceButtons from "./TerminalInterfaceContent/TerminalInterfaceButtons";
import TerminalInterfaceInputs from "./TerminalInterfaceContent/TerminalInterfaceInputs";
import {TerminalInterfacePropsType} from "./TerminalInterfaceTypes";
import {useHistory} from "react-router-dom";

const TerminalInterface: React.FC<TerminalInterfacePropsType> = ({store}) => {
    const redirect = useHistory()
    const time = 2000
    const SuccessMessage = React.createRef() as React.RefObject<HTMLInputElement>;
    const DisplaySuccessMessage = (text: string): string => SuccessMessage.current!.innerHTML = text
    const IsPromiseSuccess = (text: string, timing: number, resolve: any): void => {
        setTimeout(() => {
            DisplaySuccessMessage(text)
            resolve()
        }, timing)
    }
    const IsPaySuccess = (setSubmitting: void, text: string, RedirectTo: string, timing?: number): void => {
        setTimeout(() => {
            DisplaySuccessMessage(text)
            redirect.push(RedirectTo)
        }, timing)
    }
    return (
        <Formik
            initialValues={{Phone: '', Sum: '', Button: ``}}
            validationSchema={Yup.object({
                Phone: Yup.string()
                    .matches(/\+7 \([0-9]{3}\) [0-9]{3}-[0-9]{2}-[0-9]{2}/, 'Введите корректный номер телефона')
                    .required('Вы не заполнили поле "Телефон"'),
                Sum: Yup.number()
                    .max(1000, 'Введите значение в диапазоне от 1 до 1000 в поле: "Сумма"!')
                    .required('Вы не заполнили поле "Сумма"'),
            })}
            onSubmit={(values, {setSubmitting}) => {
                DisplaySuccessMessage("Соединение с сервером")
                let promise = new Promise(resolve => IsPromiseSuccess("Отправка данных на сервер", time, resolve));
                promise.then(() => {
                    return new Promise(resolve => IsPromiseSuccess("Ожидание ответа от сервера", time, resolve))
                })
                    .then(() => {
                        Math.round(Math.random()) === 1 ?
                            IsPaySuccess(setSubmitting(true), "Оплата произошла успешно,возврат в главное меню", "/", time) :
                            IsPaySuccess(setSubmitting(false), "Произошла ошибка,попробуйте позже", "#")
                    });
            }}
        >
            {({isSubmitting}) => (
                <Form>
                    <SuccessMessageText ref={SuccessMessage}/>
                    <Fieldset disabled={isSubmitting}>
                        <TerminalInterfaceInputs store={store}/>
                        <TerminalInterfaceButtons store={store}/>
                    </Fieldset>
                </Form>
            )}
        </Formik>
    );
};
export default TerminalInterface
