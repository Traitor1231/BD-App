export type TerminalInterfacePropsType = {
    store: {
        FormInputsValidateData: {
            name: string,
            mask: Array<string>,
            placeholder: string,
            type: string,
            guide: boolean,
            autoComplete: string,
            validate: string,
        }[],
        FormButtonsValidateData: {
            attribute: 'submit' | 'reset' | 'button',
            text: string
        }[],
    },
};