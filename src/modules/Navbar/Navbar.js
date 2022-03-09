import { useNavigate } from 'react-router-dom';
import { AiOutlineLeft, AiOutlineClose } from 'react-icons/ai';
import { IoSettingsSharp } from 'react-icons/io5';
import { useState } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const navigate = useNavigate();

  const [modalVisible, setModalVisible] = useState(false);
  const [theme, setTheme] = useState(false);

  const handleTheme = () => {
    if (!theme) {
      document.documentElement.style.setProperty('--primary-color', '#4369b2');
      document.documentElement.style.setProperty('--secondary-color', '#3f62a4');
      document.documentElement.style.setProperty('--tertiary-color', '#3b5a99');
      document.documentElement.style.setProperty('--quaternary-color', '#456bb2');
    } else {
      document.documentElement.style.setProperty('--primary-color', '#eb4c89');
      document.documentElement.style.setProperty('--secondary-color', '#de4682');
      document.documentElement.style.setProperty('--tertiary-color', '#d4447b');
      document.documentElement.style.setProperty('--quaternary-color', '#f44f8f');
    }
    setTheme(!theme);
  };

  return (
    <nav className={styles['nav-bar']}>
      <ul className={styles['nav-links']}>
        <li className={styles['nav-icon']}>
          {window.location.href !== 'http://localhost:3000/' && (
            <AiOutlineLeft onClick={() => navigate(-1)} />
          )}
        </li>
        <li className={styles['nav-item']}>2022 stats</li>
        <li className={styles['nav-icon']}>
          <IoSettingsSharp onClick={() => setModalVisible(!modalVisible)} />
        </li>
      </ul>
      {modalVisible && (
        <div className={styles.modal}>
          <div className={styles['modal-content']}>
            <button className={styles.theme} onClick={handleTheme} type="button">
              Change Theme
            </button>
            <AiOutlineClose
              className={styles.close}
              onClick={() => setModalVisible(!modalVisible)}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
