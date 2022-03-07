import { useDispatch, useSelector } from 'react-redux';
import fetchContinent from '../../redux/continents/continents';
import styles from './Continents.module.css';

const Continents = () => {
  const state = useSelector((state) => state.allReducer.countries);

  const europeCountries = state.filter(
    ({ continents }) => continents === 'Europe',
  );

  const asiaCountries = state.filter(({ continents }) => continents === 'Asia');

  const southAmericaCountries = state.filter(
    ({ continents }) => continents === 'South America',
  );

  const northAmericaCountries = state.filter(
    ({ continents }) => continents === 'North America',
  );

  const africaCountries = state.filter(
    ({ continents }) => continents === 'Africa',
  );

  const oceaniaCountries = state.filter(
    ({ continents }) => continents === 'Oceania',
  );

  const continentsNumbers = [
    africaCountries.length,
    asiaCountries.length,
    southAmericaCountries.length,
    northAmericaCountries.length,
    europeCountries.length,
    oceaniaCountries.length,
  ];

  const dispatch = useDispatch();

  const continents = [
    'Africa',
    'Asia',
    'South America',
    'North America',
    'Europe',
    'Oceania',
  ];

  const handleClick = (continent) => {
    dispatch(fetchContinent(continent));
  };

  return (
    <ul className={styles.continents}>
      {continents.map((continent, index) => (
        <li key={continent}>
          <button
            type="button"
            onClick={(event) => handleClick(event.target.textContent)}
          >
            {continent}
          </button>
          <small>
            {continentsNumbers[index]}
            {' '}
            countries
          </small>
        </li>
      ))}
    </ul>
  );
};

export default Continents;
