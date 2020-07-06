export type TerminalInterfacePropsType = {
    TerminalInterfaceProps: {
            name: string,
            mask: Array<string>,
            placeholder: string,
            type: string,
            guide: boolean,
            autoComplete: string,
            validate: string | undefined,
            attribute: 'submit' | 'reset' | 'button',
            text: string,
            ref: string
        }[],
}
