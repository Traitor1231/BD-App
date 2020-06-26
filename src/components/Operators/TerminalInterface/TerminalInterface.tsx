import React from 'react'
import { Fieldset, SuccessMessageText } from './TerminalinterfaceStyles'
import { Formik, Form } from 'formik'
import TerminalInterfaceButtons from './TerminalInterfaceContent/TerminalInterfaceButtons/TerminalInterfaceButtons'
import TerminalInterfaceInputs from './TerminalInterfaceContent/TerminalInterfaceInputs/TerminalInterfaceInputs'
import { useHistory } from 'react-router-dom'
import { DisplaySuccessMessage, SuccessMessage } from '../../../Utils/Utils'
import { StoreTypes } from '../../../Types/Types'
import * as Yup from 'yup'

const TerminalInterface: React.FC<StoreTypes> = ({ store }) => {
  const redirect = useHistory();
  return (
    <Formik
      initialValues={{ Phone: '', Sum: '' }}
      validationSchema={Yup.object({
        Phone: Yup.string()
          .matches(/\+7 \([0-9]{3}\) [0-9]{3}-[0-9]{2}-[0-9]{2}/, 'Введите корректный номер телефона')
          .required('Вы не заполнили поле "Телефон"'),
        Sum: Yup.number()
          .max(1000, 'Введите значение в диапазоне от 1 до 1000 в поле: "Сумма"!')
          .required('Вы не заполнили поле "Сумма"')
      })}
      onSubmit={(values, { setSubmitting }) => {
        DisplaySuccessMessage('Отпрвка данных на сервер....');
        setTimeout(() => {
          if (Math.round(Math.random()) === 1) {
            setSubmitting(true);
            DisplaySuccessMessage('Оплата произошла успешно,возврат в главное меню');
            setTimeout(() => redirect.push('/'), 3000)
          } else {
            setSubmitting(false);
            DisplaySuccessMessage('В процессе оплаты произошла ошибка,попробуйте позже')
          }
        }, 3000)
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <SuccessMessageText ref={SuccessMessage}/>
          <Fieldset disabled={isSubmitting}>
            <TerminalInterfaceInputs store={store}/>
            <TerminalInterfaceButtons store={store}/>
          </Fieldset>
        </Form>
      )}
    </Formik>
  )
};
export default TerminalInterface
