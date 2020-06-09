import React from 'react';
import TerminalInterface, {
  BackButtonRef,
  ErrorTextRef,
  PayButtonRef,
  PhoneInputRef,
  SumInputRef,
} from './TerminalInterface';
import StoreContext from '../../../StoreContext';
import { rerenderEntireTree } from '../../../index';

const TerminalInterfaceContainer = () => {
  const RubleSumbol = '₽';
  const ErrorMessage = (Message) => ErrorTextRef.current.innerHTML = Message;
  const SumValue = () => SumInputRef.current.value;
  const PhoneValue = () => PhoneInputRef.current.value;
  const selectionEndStart = () => SumInputRef.current.selectionEnd = SumInputRef.current.selectionStart - 1;
  const ChangeType = (Type) => SumInputRef.current.type = Type;
  const isInterfaceDisabled = (logicalFlag) => {
    SumInputRef.current.readOnly = logicalFlag;
    PhoneInputRef.current.readOnly = logicalFlag;
    PayButtonRef.current.disabled = logicalFlag;
    BackButtonRef.current.disabled = logicalFlag;
  };
  const isFormSubmit = (isDataSubmit, ErrorMessageText, logicalFlag) => {
    isInterfaceDisabled(false);
    isDataSubmit();
    alert(ErrorMessageText);
    return logicalFlag;
  };

  return (
    <StoreContext.Consumer>
      {(store) => {
        const SumValidateMaxValue = () => {
          if (SumValue().length > 3) {
            SumInputRef.current.value = SumValue().substring(0, 4);
          }
          SumInputRef.current.value = SumValue().replace(/[^\d]/g, '');
          SumInputRef.current.value = SumValue() + RubleSumbol;
          selectionEndStart();
        };
        const AddRubleSymbol = () => {
          ChangeType('text');
          if (!SumValue().includes(RubleSumbol)) {
            SumInputRef.current.value = SumValue() + RubleSumbol;
          }
          selectionEndStart();
        };
        const DeleteRubleSymbol = () => {
          if (SumValue().includes(RubleSumbol)) {
            SumInputRef.current.value = SumValue().replace(RubleSumbol, '');
          }
          ChangeType('number');
        };
        const PhoneValidateValue = (e) => {
          if (!e.target.validity.valid) {
            ErrorMessage('Введите корректный номер телефона');
          }
          e.preventDefault();
        };
        const FormValidate = (e) => {
          if (PhoneValue() === '') {
            ErrorMessage('Вы не заполнили поле: Телефон');
          } else if (SumValue() === '') {
            ErrorMessage('Вы не заполнили поле: "Сумма"');
          } else if (SumValue() > 1000 || SumValue() < 1) {
            ErrorMessage('Введите значение в диапазоне от 1 до 1000 в поле: "Сумма"');
          } else if (SumValue().startsWith(0)) {
            ErrorMessage('Поле: "Сумма" не может начинаться с нуля');
          } else {
            isInterfaceDisabled(true);
            ErrorMessage('Отправка данных на сервер');
            setTimeout(() => {
              ErrorMessage('Ожидание ответа от сервера...');
            }, 2000);
            setTimeout(() => {
              store.SubmitData();
              rerenderEntireTree();
            }, 4000);
          }
          e.preventDefault();
        };
        const Redirect = () => (
          Math.round(Math.random()) === 1
            ? isFormSubmit(
              store.RejectData,
              ErrorMessage('Оплата произошла успешно'),
              true,
            )
            : isFormSubmit(
              store.SubmitData,
              ErrorMessage('При оплате произошла ошибка, попробуйте позже'),
              false,
            ));
        const ReturnToMainMenu = () => store.RejectData();
        return (
          <TerminalInterface
            ReturnToMainMenu={ReturnToMainMenu}
            Redirect={Redirect}
            SumValidateMaxValue={SumValidateMaxValue}
            AddRubleSymbol={AddRubleSymbol}
            DeleteRubleSymbol={DeleteRubleSymbol}
            PhoneValidateValue={PhoneValidateValue}
            FormValidate={FormValidate}
            store={store}
          />
        );
      }}
    </StoreContext.Consumer>
  );
};

export default TerminalInterfaceContainer;
