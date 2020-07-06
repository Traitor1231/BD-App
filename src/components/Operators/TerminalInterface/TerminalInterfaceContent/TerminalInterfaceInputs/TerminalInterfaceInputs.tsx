import React from 'react'
import { Field } from 'formik'
import { ErrorText, InputMask } from './TerminalInterfaceInputsStyles'
import { TerminalInterfacePropsType } from '../../../../../Types/TerminalInterfacePropsType';

// @ts-ignore
const TerminalInterfaceInputs: React.FC<TerminalInterfacePropsType> = ({ TerminalInterfaceProps }) => {
  return (
    TerminalInterfaceProps.map((InputsAttributesData) => (
      <div>
        <ErrorText name={InputsAttributesData.name} component="div"/>
        <Field name={InputsAttributesData.name}
          validate={InputsAttributesData.validate}
          render={({ field } : { field:any }) => (
            <InputMask
              {...field}
              mask={InputsAttributesData.mask}
              placeholder={InputsAttributesData.placeholder}
              type={InputsAttributesData.type}
              guide={InputsAttributesData.guide}
              autoComplete={InputsAttributesData.autoComplete}
            />
          )}
        />
      </div>
    ))
  )
};
export default TerminalInterfaceInputs
