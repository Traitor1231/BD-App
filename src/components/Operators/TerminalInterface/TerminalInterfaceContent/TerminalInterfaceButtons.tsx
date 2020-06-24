import React from "react";
import {Button} from "../TerminalinterfaceStyles";
import {TerminalInterfacePropsType} from "../TerminalInterfaceTypes";

// @ts-ignore
const TerminalInterfaceButtons: React.FC<TerminalInterfacePropsType> = ({ store }) => {
    return (
        store.FormButtonsValidateData.map((store) => (
            <Button type={store.attribute}>{store.text}</Button>
        ))
    );
};
export default TerminalInterfaceButtons
