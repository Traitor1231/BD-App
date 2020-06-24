import React from 'react'
import { Fieldset } from './TerminalinterfaceStyles'
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import TerminalInterfaceButtons from "./TerminalInterfaceContent/TerminalInterfaceButtons";
import TerminalInterfaceInputs from "./TerminalInterfaceContent/TerminalInterfaceInputs";
import {TerminalInterfacePropsType} from "./TerminalInterfaceTypes";
import { useHistory } from "react-router-dom";


const TerminalInterface: React.FC<TerminalInterfacePropsType> = ({ store }) => {
    const redirect = useHistory();
    return (
        <Formik
            initialValues={{Phone: '', Sum: ''}}
            validationSchema={Yup.object({
                Phone: Yup.string()
                    .matches(/\+7 \([0-9]{3}\) [0-9]{3}-[0-9]{2}-[0-9]{2}/,'Введите корректный номер телефона')
                    .required('Вы не заполнили поле "Телефон"'),
                Sum: Yup.number()
                    .max(1000, 'Введите значение в диапазоне от 1 до 1000 в поле: "Сумма"!')
                    .required('Вы не заполнили поле "Сумма"'),
            })}
            onSubmit={(values, {setSubmitting}) => {
                setTimeout(() => {
                    alert(JSON.stringify(values, null, 2));
                    setSubmitting(false);
                    redirect.push("/");
                }, 1000);
            }}
        >
            {({isSubmitting}) => (
                <Form>
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
