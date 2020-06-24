import React from "react";
import {ErrorText, InputMask} from "../TerminalinterfaceStyles";
import {Field} from "formik";
import {TerminalInterfacePropsType} from "../TerminalInterfaceTypes";

// @ts-ignore
const TerminalInterfaceInputs: React.FC<TerminalInterfacePropsType> = ({ store }) => {
    return (
        store.FormInputsValidateData.map((store) => (
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
    );
};
export default TerminalInterfaceInputs
