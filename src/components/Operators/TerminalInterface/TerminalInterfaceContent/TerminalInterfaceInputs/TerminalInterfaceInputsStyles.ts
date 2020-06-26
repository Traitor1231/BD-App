import styled from 'styled-components'
import { ErrorMessage } from 'formik'
import MaskedInput from 'react-text-mask'

export const ErrorText = styled(ErrorMessage)`
  color: white;
  font-size: 4vw;
  @media (max-width: 357px) {
    font-size: 14px;
  }
`;

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
`;
