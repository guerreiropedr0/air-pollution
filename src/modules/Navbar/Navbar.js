import { AiOutlineLeft } from 'react-icons/ai';
import { IoSettingsSharp } from 'react-icons/io5';
import styles from './Navbar.module.css';

const Navbar = () => (
  <nav className={styles['nav-bar']}>
    <ul className={styles['nav-links']}>
      <li className={styles['nav-back-icon']}>
        <AiOutlineLeft />
      </li>
      <li className={styles['nav-item']}>2022 stats</li>
      <li className={styles['nav-settings-icon']}>
        <IoSettingsSharp />
      </li>
    </ul>
  </nav>
);

export default Navbar;
