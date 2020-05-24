import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter} from "react-router-dom";
import App from "./App";
import {SumValidateMaxValue,PhoneValidateValue,FormValidate,AddRubleSymbol,DeleteRubleSymbol,PhoneInputRef,SumInputRef,ErrorTextRef} from "./validation/validation"
import store from "../src/store/store"
ReactDOM.render(
    <BrowserRouter>
    <App SumValidateMaxValue={SumValidateMaxValue}
         PhoneValidateValue={PhoneValidateValue}
         FormValidate={FormValidate}
         AddRubleSymbol={AddRubleSymbol}
         DeleteRubleSymbol={DeleteRubleSymbol}
         PhoneInputRef={PhoneInputRef}
         SumInputRef={SumInputRef}
         ErrorTextRef={ErrorTextRef}
         store={store}
    />
    </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
