import css from './LoginForm.module.css';
import { useId } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { authLogin } from '../../redux/auth/operations';

export default function LoginForm() {
  const ids = useId();
  const dispatch = useDispatch();

  function handleSubmit(values, actions) {
    dispatch(authLogin(values));
    actions.resetForm();
  }

  const initialValues = {
    email: 'acrossorca@mail.com',
    password: 'examplepwd12345',
    // email: '',
    // password: '',
  };

  const FormSchema = Yup.object().shape({
    email: Yup.string().email('Invalid email').required('Required'),
    password: Yup.string().min(6, 'Too Short!').max(50, 'Too Long!').required('Required'),
  });

  return (
    <Formik initialValues={initialValues} validationSchema={FormSchema} onSubmit={handleSubmit}>
      <Form className={css.wrapper}>
        <label htmlFor={`${ids}-logMail`}>Email</label>
        <Field autoComplete="on" className={css.field} id={`${ids}-logMail`} type="email" name="email" />
        <ErrorMessage className={css.error} name="email" component="sup" />

        <label htmlFor={`${ids}-logPass`}>Password</label>
        <Field autoComplete="on" className={css.field} id={`${ids}-logPass`} type="text" name="password" />
        <ErrorMessage className={css.error} name="password" component="sup" />

        <button className={css.btn} type="submit">
          Log In
        </button>
      </Form>
    </Formik>
  );
}
