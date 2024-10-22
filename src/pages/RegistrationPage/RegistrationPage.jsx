import RegisterForm from '../../components/RegisterForm/RegisterForm';
import s from './RegistrationPage.module.css';

const RegistrationPage = () => {
  return (
    <div className={s.registrationContainer}>
      <div className={s.formContainer}>
        <RegisterForm />
      </div>
    </div>
  );
};

export default RegistrationPage;
