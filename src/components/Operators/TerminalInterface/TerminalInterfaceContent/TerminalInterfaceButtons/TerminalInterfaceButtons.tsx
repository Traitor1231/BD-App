import React from "react";
import {Button} from "./TerminalInterfaceButtonStyles";
import {StoreTypes} from "../../../../../Types/Types";

// @ts-ignore
const TerminalInterfaceButtons: React.FC<StoreTypes> = ({ store }) => {

    return (
        store.FormButtonsValidateData.map((store) => (
            <Button type={store.attribute}>{store.text}</Button>
        ))
    );
};
export default TerminalInterfaceButtons
