import { useDispatch, useSelector } from 'react-redux'; 
import { selectIsLoggedIn, selectUser } from '../../redux/auth/selectors';
import { logout } from '../../redux/auth/operations';
import toast from 'react-hot-toast';
import s from './UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const currentUser = useSelector(selectUser);
  const isLoggedIn = useSelector(selectIsLoggedIn);

  const handleLogout = () => {
    dispatch(logout())
      .then(() => {
        toast.success(`See you soon, ${currentUser.name}!`);
      })
      .catch(() => {
        toast.error('Failed');
      });
  };

  return (
    <div className={s.userMenu}>
      {isLoggedIn && <p className={s.welcomeText}>Welcome, {currentUser.name}!</p>}
      <button onClick={handleLogout} type="button" className={s.logoutButton}>
        Logout
      </button>
    </div>
  );
};

export default UserMenu;
