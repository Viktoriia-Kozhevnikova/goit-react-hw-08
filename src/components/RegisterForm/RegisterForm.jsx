import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useDispatch } from 'react-redux';
import * as Yup from 'yup';
import { register } from '../../redux/auth/operations';
import toast from 'react-hot-toast';
import styles from './RegisterForm.module.css';

const RegistrationForm = () => {
  const dispatch = useDispatch();
  const initialFormValues = {
    name: '',
    email: '',
    password: '',
  };

  const handleFormSubmit = (formData, formikHelpers) => {
    dispatch(register(formData))
      .unwrap()
      .then((res) => {
        toast.success(`Welcome to our app, ${res.user.name}`);
      });
    formikHelpers.resetForm();
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Name is required'),
    email: Yup.string()
      .email('Invalid email address')
      .required('Email is required'),
    password: Yup.string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password is required'),
  });

  return (
    <div className={styles.formContainer}>
      <h1 className={styles.formTitle}>Welcome</h1>
      <p className={styles.formText}>Register for Your Account!</p>
      <Formik
        initialValues={initialFormValues}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
      >
        <Form>
          <div className={styles.formGroup}>
            <Field
              name="name"
              type="text"
              placeholder="Name"
              className={styles.formField}
            />
            <ErrorMessage name="name" component="div" className={styles.formError} />
          </div>

          <div className={styles.formGroup}>
            <Field
              name="email"
              type="email"
              placeholder="Email"
              className={styles.formField}
            />
            <ErrorMessage name="email" component="div" className={styles.formError} />
          </div>

          <div className={styles.formGroup}>
            <Field
              name="password"
              type="password"
              placeholder="Password"
              className={styles.formField}
            />
            <ErrorMessage name="password" component="div" className={styles.formError} />
          </div>

          <button type="submit" className={styles.submitButton}>
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
