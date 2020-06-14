import React from "react";
import TerminalInterface, {
    BackButtonRef,
    ErrorTextRef,
    PayButtonRef,
    PhoneInputRef,
    SumInputRef,
} from "./TerminalInterface";
import StoreContext from "../../../StoreContext";
import { rerenderEntireTree } from "../../../index";

const TerminalInterfaceContainer = () => {
    const RubleSumbol = "₽";
    const GetSumValue = (): any => SumInputRef.current!.value;
    const GetPhoneValue = (): number | string => PhoneInputRef.current!.value;
    const ChangeInputType = (Type: string): string => (SumInputRef.current!.type = Type);
    const SetErrorMessage = (Message: string): string => (ErrorTextRef.current!.innerHTML = Message);
    const SetLengthLimitValue = (): number | string => (SumInputRef.current!.value = GetSumValue().substring(0, 4));
    const SetRubbleSumbolToStringEnd = (): string => (SumInputRef.current!.value = GetSumValue() + RubleSumbol);
    const ChangeSelectionEnd = (): number => (SumInputRef.current!.selectionEnd = SumInputRef.current!.selectionStart! - 1);
    const ReplaceSumbols = (from: string | RegExp, to: string | RegExp): string | RegExp => (SumInputRef.current!.value = GetSumValue().replace(from, to));
    const isFormSubmit = (isDataSubmit: () => void, ErrorMessageText: string, logicalFlag: boolean) => {
        isInterfaceDisabled(false);
        isDataSubmit();
        alert(ErrorMessageText);
        return logicalFlag;
    };
    const isInterfaceDisabled = (logicalFlag: boolean): void => {
        SumInputRef.current!.readOnly = logicalFlag;
        PhoneInputRef.current!.readOnly = logicalFlag;
        PayButtonRef.current!.disabled = logicalFlag;
        BackButtonRef.current!.disabled = logicalFlag;
    };
    const TryAsyncRequestToServer = (submitData: () => void): void => {
        isInterfaceDisabled(true);
        SetErrorMessage("Отправка данных на сервер");
        setTimeout(() => SetErrorMessage("Ожидание ответа от сервера..."), 2000);
        setTimeout(() => {
            submitData();
            rerenderEntireTree();
        }, 4000);
    };
    return (
        <StoreContext.Consumer>
            {(store: any) => {
                const SumValidateMaxValue = (): void => {
                    if (GetSumValue().length > 3) SetLengthLimitValue();
                    ReplaceSumbols(/[^\d]/g, "");
                    SetRubbleSumbolToStringEnd();
                    ChangeSelectionEnd();
                };
                const AddRubleSymbol = (): void => {
                    ChangeInputType("text");
                    if (!GetSumValue().includes(RubleSumbol))
                        SetRubbleSumbolToStringEnd();
                    ChangeSelectionEnd();
                };
                const DeleteRubleSymbol = (): void => {
                    if (GetSumValue().includes(RubleSumbol))
                        ReplaceSumbols(RubleSumbol, "");
                    ChangeInputType("number");
                };
                const PhoneValidateValue = (e: {
                    target: { validity: { valid: boolean } },
                    preventDefault: () => void,
                }): void => {
                    if (!e.target.validity.valid)
                        SetErrorMessage("Введите корректный номер телефона");
                    e.preventDefault();
                };
                const FormValidate = (e: { preventDefault: () => void }): void => {
                    if (GetPhoneValue() === "") SetErrorMessage("Вы не заполнили поле: Телефон");
                    else if (GetSumValue() === "") SetErrorMessage('Вы не заполнили поле: "Сумма"');
                    else if (GetSumValue() > 1000 || GetSumValue() < 1) SetErrorMessage('Введите значение в диапазоне от 1 до 1000 в поле: "Сумма"');
                    else if (GetSumValue().startsWith(String(0))) SetErrorMessage('Поле: "Сумма" не может начинаться с нуля');
                    else TryAsyncRequestToServer(store.SubmitData);
                    e.preventDefault();
                };
                const isRedirect = (): boolean =>
                    Math.round(Math.random()) === 1
                        ? isFormSubmit(
                        store.RejectData,
                        SetErrorMessage("Оплата произошла успешно"),
                        true
                        )
                        : isFormSubmit(
                        store.SubmitData,
                        SetErrorMessage(
                            "При оплате произошла ошибка, попробуйте позже"
                        ),
                        false
                        );
                const ReturnToMainMenu = (): boolean => store.RejectData();
                return (
                    <TerminalInterface
                        ReturnToMainMenu={ReturnToMainMenu}
                        isRedirect={isRedirect}
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
