import React from "react";

export const SuccessMessage = React.createRef() as React.RefObject<HTMLInputElement>;
export const DisplaySuccessMessage = (text: string): void => {
    SuccessMessage.current!.innerHTML = text
}
export const validate = (value: string, error: string = 'Поле: "Сумма" не может начинаться с нуля'):string | undefined => {
    if (value.startsWith("0")) return error;
}