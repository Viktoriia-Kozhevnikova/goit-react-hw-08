import clsx from 'clsx';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => {
  const getLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.activeLink);
  };

  return (
    <nav className={s.nav}>
      <NavLink className={getLinkClass} to='/'>
        Home
      </NavLink>
      <NavLink className={getLinkClass} to='/contacts'>
        Contacts
      </NavLink>
    </nav>
  );
};

export default Navigation;
