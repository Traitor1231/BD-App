import React from 'react'
import {
    ErrorText,
    InputMask,
    Button,
    Fieldset,
} from './TerminalinterfaceStyles'
import {Formik, Form, Field} from 'formik';
import * as Yup from 'yup';

type TerminalInterfacePropsType = {
    store: {
        state: {
            payableStatus: {
                isPayed: boolean | any,
            },
        },
        FormInputsValidateData: [
            {
                name: string,
                mask: Array<string>,
                placeholder: string,
                type: string,
                guide: boolean,
                autoComplete: string,
                validate: Function,
            },
        ],
        FormButtonsValidateData:[
            {
                attribute:string,
                text:string
            }
        ]
    },
};

const TerminalInterface: React.FC<TerminalInterfacePropsType> = ({ store }) => {
    const inputField = store.FormInputsValidateData.map((store) => (
        <div>
            <ErrorText name={store.name} component="div"/>
            <Field name={store.name}
                   validate={store.validate}
                   render={({field}) => (
                       <InputMask
                           {...field}
                           mask={store.mask}
                           placeholder={store.placeholder}
                           type={store.type}
                           guide={store.guide}
                           autoComplete={store.autoComplete}
                       />
                   )}
            />
        </div>
    ))
    const ButtonsField = store.FormButtonsValidateData.map((store) => (
            <Button type={store.attribute}>{store.text}</Button>
    ))
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
                }, 1000);
            }}
        >
            {({isSubmitting}) => (
                <Form>
                    <Fieldset disabled={isSubmitting}>
                        {inputField}
                        {ButtonsField}
                    </Fieldset>
                </Form>
            )}
        </Formik>
    );
};
export default TerminalInterface
