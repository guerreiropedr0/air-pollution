import { useDispatch } from 'react-redux';
import fetchRegion from '../../redux/countries/countries';

import styles from './Home.module.css';

const Home = () => {
  const regions = [
    'Africa',
    'Asia',
    'South America',
    'North America',
    'Europe',
    'Oceania',
  ];

  const dispatch = useDispatch();

  const handleClick = (region) => {
    dispatch(fetchRegion(region));
  };

  return (
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
      <ul className={styles.regions}>
        {regions.map((region) => (
          <li
            key={region}
            onClick={(event) => handleClick(event.target.children[0].textContent)}
          >
            <p>{region}</p>
            <small>42 countries</small>
          </li>
        ))}
      </ul>
    </main>
  );
};
export default Home;
