import LoginForm from '../../components/LoginForm/LoginForm'; 
import s from './LoginPage.module.css';

const LoginPage = () => {
  return (
    <div className={s.loginContainer}>
      <div className={s.contentWrapper}>
        <LoginForm />
      </div>
    </div>
  );
};

export default LoginPage;
