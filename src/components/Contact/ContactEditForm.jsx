import css from './Contact.module.css';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import { IoPerson } from 'react-icons/io5';
import { FaPhoneAlt, FaShare } from 'react-icons/fa';
import { toastError } from '../../helpers';

export default function ContactEditForm({ name, number, handleUpdate }) {
  const initialValues = {
    name: name,
    number: number,
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
    <Formik initialValues={initialValues} validationSchema={FormSchema} onSubmit={handleUpdate}>
      <Form className={css.wrapper}>
        <div className={css.fildsblock}>
          <label className={css.text}>
            <IoPerson className={css.icon} size={21} />
            <Field className={css.field} autoComplete="on" type="text" name="name" autoFocus />
          </label>
          <ErrorMessage name="name" render={toastError} />
          <label className={css.text}>
            <FaPhoneAlt className={css.icon} size={21} />{' '}
            <Field className={css.field} autoComplete="on" type="text" name="number" />
          </label>
          <ErrorMessage name="number" render={toastError} />
        </div>
        <div className={css.buttonsblock}>
          <button className={css.button} type="submit">
            <FaShare className={css.icon} size={21} />
          </button>
        </div>
      </Form>
    </Formik>
  );
}
