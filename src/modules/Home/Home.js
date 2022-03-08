import styles from './Home.module.css';
import Image from '../Image/Image';
import Continents from '../Continents/Continents';

const Home = () => {
  const AIR_QUALITY = ['Good', 'Fair', 'Moderate', 'Poor', 'Very Poor'];
  return (
    <main className={styles.main}>
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
      <Continents />
    </main>
  );
};
export default Home;
