import { useSelector } from 'react-redux';
import { useState } from 'react';
import styles from './Home.module.css';
import Image from '../Image/Image';
import Continents from '../Continents/Continents';
import Search from '../Search/Search';

const Home = () => {
  const state = useSelector((state) => state.allReducer);
  const AIR_QUALITY = ['Good', 'Fair', 'Moderate', 'Poor', 'Very Poor'];

  const [value, setValue] = useState('');

  const handleSearch = (e) => {
    setValue(e.target.value);
  };

  return (
    <main className={styles.main}>
      {state.loading ? (
        <div data-testid="spinner" className={styles['lds-dual-ring']} />
      ) : (
        <>
          {' '}
          <Image />
          <h1 className={styles.title}>Air Quality levels:</h1>

          <ul className={styles['air-quality']}>
            {AIR_QUALITY.map((quality, index) => (
              <li key={quality}>
                <p>{quality}</p>
                <small>
                  Index:
                  {` ${index + 1}`}
                </small>
              </li>
            ))}
          </ul>
          <Search handleSearch={handleSearch} data={value} />
          <Continents data={value} />
        </>
      )}
    </main>
  );
};
export default Home;
