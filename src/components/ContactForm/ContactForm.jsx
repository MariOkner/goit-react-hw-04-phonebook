import { Formik } from 'formik';
import * as yup from 'yup';
import PropTypes from 'prop-types';

import {
  Form,
  FormLabel,
  Field,
  ErrorMessage,
  Button,
} from './ContactForm.styled';

const initialValues = { name: '', number: '' };

const regexName = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const regexNumber =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

const validationSchema = yup.object({
  name: yup
    .string()
    .required('Please enter valid name')
    .matches(
      regexName,
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    ),
  number: yup
    .string()
    .required('Please enter valid number')
    .matches(
      regexNumber,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    ),
});

export const ContactForm = ({ handleSubmit }) => {
  const onSubmit = (values, { resetForm }) => {
    handleSubmit(values);
    resetForm();
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      <Form>
        <FormLabel>
          Name
          <Field type="text" name="name" />
          <ErrorMessage name="name" component="span" />
        </FormLabel>

        <FormLabel>
          <span>Number</span>
          <Field type="tel" name="number" />
          <ErrorMessage name="number" component="span" />
        </FormLabel>
        <Button type="submit">Add contact</Button>
      </Form>
    </Formik>
  );
};

ContactForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  initialValues: PropTypes.shape({
    name: PropTypes.string.isRequired,
    number: PropTypes.string.isRequired,
  }),
};
