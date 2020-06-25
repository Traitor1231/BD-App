export type StoreTypes = {
    store: {
        operatorsInfo: {
            name: string,
            image: string,
            alt: string,
        }[],
        FormInputsValidateData: {
            name: string,
            mask: Array<string>,
            placeholder: string,
            type: string,
            guide: boolean,
            autoComplete: string,
            validate: string | undefined
        }[],
        FormButtonsValidateData: {
            attribute: 'submit' | 'reset' | 'button',
            text: string,
            ref: string
        }[],
    },
};