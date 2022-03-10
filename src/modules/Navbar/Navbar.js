import { useNavigate } from 'react-router-dom';
import { AiOutlineLeft, AiOutlineClose } from 'react-icons/ai';
import { IoSettingsSharp } from 'react-icons/io5';
import { useState } from 'react';
import styles from './Navbar.module.css';

const Navbar = () => {
  const navigate = useNavigate();

  const [modalVisible, setModalVisible] = useState(false);
  const [theme, setTheme] = useState({
    color: ['Pink', 'Blue'],
    isPink: true,
  });

  const handleTheme = () => {
    if (theme.isPink) {
      document.documentElement.style.setProperty('--primary-color', '#4369b2');
      document.documentElement.style.setProperty(
        '--secondary-color',
        '#3f62a4',
      );
      document.documentElement.style.setProperty('--tertiary-color', '#3b5a99');
      document.documentElement.style.setProperty(
        '--quaternary-color',
        '#456bb2',
      );
    } else {
      document.documentElement.style.setProperty('--primary-color', '#eb4c89');
      document.documentElement.style.setProperty(
        '--secondary-color',
        '#de4682',
      );
      document.documentElement.style.setProperty('--tertiary-color', '#d4447b');
      document.documentElement.style.setProperty(
        '--quaternary-color',
        '#f44f8f',
      );
    }
    setTheme({ ...theme, isPink: !theme.isPink });
  };

  return (
    <nav className={styles['nav-bar']}>
      <ul className={styles['nav-links']}>
        <li>
          {window.location.href !== 'http://localhost:3000/' && window.location.href !== 'guerreiropedr0-air-pollution.netlify.app' && (
            <AiOutlineLeft
              className={styles['nav-icon']}
              onClick={() => navigate(-1)}
            />
          )}
        </li>
        <li className={styles['nav-item']}>2022 stats</li>
        <li>
          <IoSettingsSharp
            data-testid="icon"
            className={styles['nav-icon']}
            onClick={() => setModalVisible(!modalVisible)}
          />
        </li>
      </ul>
      {modalVisible && (
        <div className={styles.modal}>
          <div className={styles['modal-content']}>
            <button
              className={styles.theme}
              onClick={handleTheme}
              type="button"
            >
              Change Theme To
              {' '}
              {theme.isPink ? theme.color[1] : theme.color[0]}
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
