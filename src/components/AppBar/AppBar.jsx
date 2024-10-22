import { useSelector } from 'react-redux';
import { selectIsLoggedIn } from '../../redux/auth/selectors';
import Navigation from '../Navigation/Navigation';
import UserMenu from '../UserMenu/UserMenu';
import AuthNav from '../AuthNav/AuthNav';
import SearchBox from '../SearchBox/SearchBox';
import s from './AppBar.module.css';

const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={s.container}>
      <div className={s.headerContent}>
        <Navigation className={s.navigation} />
        {isLoggedIn ? (
          <div className={s.searchAndMenu}>
            <SearchBox className={s.search} />
            <UserMenu />
          </div>
        ) : (
          <AuthNav />
        )}
      </div>
    </header>
  );
};

export default AppBar;
