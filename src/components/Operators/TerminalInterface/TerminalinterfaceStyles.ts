import styled from 'styled-components'
import {ErrorMessage} from "formik";
import MaskedInput from "react-text-mask";

export const Button = styled.button`
  width: 50%;
  padding: 10px 2vw;
  font-size: 4vw;
  color: white;
  border-radius: 500px 0px 0px 500px;
  background: none;
  border: 2px solid white;
  margin: 1.3vw 0px;
  transition: 0.3s;
  cursor: pointer;
  outline: none;
  :hover {
    transform: scale(1.1);
    background: white;
    border: 2px solid black;
    color: black;
  }
  @media (max-width: 357px) {
    font-size: 14px;
  }
`

export const ErrorText = styled(ErrorMessage)`
  color: white;
  font-size: 4vw;
  @media (max-width: 357px) {
    font-size: 14px;
  }
`

export const SuccessMessageText = styled.div`
  color: white;
  font-size: 4vw;
  @media (max-width: 357px) {
    font-size: 14px;
  }
`

export const InputMask = styled(MaskedInput)`
  -moz-appearance: textfield;
  width: 100%;
  padding: 10px 2vw;
  font-size: 4vw;
  color: white;
  border-radius: 500px;
  background: none;
  border: 2px solid white;
  margin: 1.3vw 0px;
  transition: 0.3s;
  outline: none;
  ::-ms-clear {
    display: none;
  }
  ::placeholder {
    opacity: 1;
    color: white;
    font-size: 4vw;
    @media (max-width: 357px) {
      font-size: 14px;
    }
  }
  :-ms-input-placeholder {
    color: white;
  }
  ::-ms-input-placeholder {
    color: white;
  }
  :invalid {
    box-shadow: none;
  }
  :-moz-submit-invalid {
    box-shadow: none;
  }
  :-moz-ui-invalid {
    box-shadow: none;
  }
  :hover,
  :focus {
    transform: scale(1.05);
    color: black;
    background: white;
    border: 2px solid black;
    ::placeholder {
      color: black;
    }
    ::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
    }
  }
  @media (max-width: 357px) {
    font-size: 14px;
  }
`

export const Fieldset = styled.fieldset`
  display: block;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
  padding-block-start: 0px;
  padding-inline-start: 0px;
  padding-inline-end: 0px;
  padding-block-end: 0px;
  min-inline-size: initial;
  border-width: 0px;
  border-style: none;
  border-color: initial;
  border-image: none;
`