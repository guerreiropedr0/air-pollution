import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
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

  const links = [
    {
      path: '/africa',
      text: 'Africa',
      id: 0,
    },
    {
      path: '/asia',
      text: 'Asia',
      id: 1,
    },
    {
      path: '/southamerica',
      text: 'South America',
      id: 2,
    },
    {
      path: '/northamerica',
      text: 'North America',
      id: 3,
    },
    {
      path: '/europe',
      text: 'Europe',
      id: 4,
    },
    {
      path: '/oceania',
      text: 'Ocenia',
      id: 5,
    },
  ];

  const dispatch = useDispatch();

  const handleClick = (continent) => {
    dispatch(fetchContinent(continent));
  };

  return (
    <ul className={styles.continents}>
      {links.map(({ path, text, id }) => (
        <li key={text}>
          <NavLink
            onClick={(event) => handleClick(event.target.textContent)}
            to={path}
          >
            {text}
          </NavLink>
          <small>
            {continentsNumbers[id]}
            {' '}
            countries
          </small>
        </li>
      ))}
    </ul>
  );
};

export default Continents;
