import styles from './Home.module.css';

const Home = () => (
  <main className={styles.main}>
    <h1 className={styles.title}>Air Quality levels:</h1>
    <ul className={styles['air-quality']}>
      <li>
        {' '}
        <p>Very Poor</p>
        <small>Index: 5</small>
      </li>
      <li>
        <p>Poor</p>
        <small>Index: 4</small>
      </li>
      <li>
        <p>Moderate</p>
        <small>Index: 3</small>
      </li>
      <li>
        <p>Fair</p>
        <small>Index: 2</small>
      </li>
      <li>
        <p>Good</p>
        <small>Index: 1</small>
      </li>
    </ul>
  </main>
);

export default Home;
