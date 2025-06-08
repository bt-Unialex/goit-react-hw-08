import css from './ContactForm.module.css';
import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import { useDispatch } from 'react-redux';
import { addContact } from '../../redux/contacts/operations';
import { toastError } from '../../helpers';

export default function ContactForm() {
  const ids = useId();
  const dispatch = useDispatch();

  function handleSubmit(values, actions) {
    dispatch(addContact(values));
    actions.resetForm();
  }

  const initialValues = {
    name: '',
    number: '',
  };

  const FormSchema = Yup.object().shape({
    name: Yup.string().min(3, 'Name too Short!').max(50, 'Name too Long!').required('Name required'),
    number: Yup.string()
      .matches(/^[0-9()\-\s]+$/, 'The number can contain only digits, parentheses, spaces, and dashes')
      .min(3, 'Number too Short!')
      .max(50, 'Number too Long!')
      .required('Number required'),
  });

  return (
    <Formik initialValues={initialValues} validationSchema={FormSchema} onSubmit={handleSubmit}>
      <Form className={css.wrapper}>
        <label htmlFor={`${ids}-name`}>Name</label>
        <Field autoComplete="on" className={css.field} id={`${ids}-name`} type="text" name="name" />
        <ErrorMessage name="name" render={toastError} />
        <label htmlFor={`${ids}-number`}>Number</label>
        <Field autoComplete="on" className={css.field} id={`${ids}-number`} type="text" name="number" />
        <ErrorMessage name="number" render={toastError} />
        <button className={css.btn} type="submit">
          Add contact
        </button>
      </Form>
    </Formik>
  );
}
