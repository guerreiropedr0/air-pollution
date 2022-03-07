import { useDispatch, useSelector } from 'react-redux';
import fetchRegion from '../../redux/countries/countries';
import styles from './Regions.module.css';

const Regions = () => {
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

  const handleClick = (region) => {
    dispatch(fetchRegion(region));
  };

  return (
    <ul className={styles.regions}>
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

export default Regions;
