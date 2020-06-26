import React from 'react'
import { Field } from 'formik'
import { ErrorText, InputMask } from './TerminalInterfaceInputsStyles'
import { StoreTypes } from '../../../../../Types/Types'

// @ts-ignore
const TerminalInterfaceInputs: React.FC<StoreTypes> = ({ store }) => {
  return (
    store.FormInputsValidateData.map((store) => (
      <div>
        <ErrorText name={store.name} component="div"/>
        <Field name={store.name}
          validate={store.validate}
          render={({ field } : { field:any }) => (
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
  )
};
export default TerminalInterfaceInputs
