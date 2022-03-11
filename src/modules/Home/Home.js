import { useSelector } from 'react-redux';
import styles from './Home.module.css';
import Image from '../Image/Image';
import Continents from '../Continents/Continents';

const Home = () => {
  const state = useSelector((state) => state.allReducer);
  const AIR_QUALITY = ['Good', 'Fair', 'Moderate', 'Poor', 'Very Poor'];

  return (
    <main className={styles.main}>
      {state.loading ? (
        <div data-testid="spinner" className={styles['lds-dual-ring']} />
      ) : (
        <>
          {' '}
          <div className={styles.contain}>
            {' '}
            <Image />
            <div className={styles['contain-2']}>
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
            </div>
          </div>
          <Continents />
        </>
      )}
    </main>
  );
};
export default Home;
