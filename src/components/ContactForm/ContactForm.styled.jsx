import styled from '@emotion/styled';
import {
  Form as FormikForm,
  ErrorMessage as FormErrorMessage,
  Field as FormField,
} from 'formik';

export const Form = styled(FormikForm)`
  display: inline-flex;

  flex-direction: column;
  gap: 16px;

  padding: 20px 200px 20px 20px;

  border: 1px solid #00008b;
  border-radius: 5px;
`;

export const FormLabel = styled.label`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const Field = styled(FormField)`
  outline: none;

  border: 1px solid #000000;
  border-radius: 3px;

  &:hover,
  &:focus {
    border: 1px solid #7b68ee;
    box-shadow: 0px 0px 3px 0.7px #7b68ee;
  }
`;

export const ErrorMessage = styled(FormErrorMessage)`
  color: red;
`;

export const Button = styled.button`
  width: 120px;
  padding: 5px;

  background-color: #00008b;
  color: #ffffff;
  border-radius: 5px;
  border: transparent;

  &:hover {
    background-color: #7b68ee;
  }
`;
