import s from './HomePage.module.css'; 
import { MdOutlineContactPhone } from 'react-icons/md';

const HomePage = () => {
  return (
    <div className={s.homeContainer}>
      <div className={s.contentWrapper}>
        <div className={s.iconContainer}>
          <MdOutlineContactPhone className={s.icon} />
          <h1 className={s.title}>Welcome to <span className={s.appName}>Connection</span></h1>
        </div>
        <p className={s.description}>
          Connection: Your Link to the World
        </p>
      </div>
    </div>
  );
};

export default HomePage;
