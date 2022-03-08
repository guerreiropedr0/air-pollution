import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styles from './Countries.module.css';
import countryToPath from '../Helpers/helper';

const Countries = () => {
  const countries = useSelector((state) => state.continentReducer.countries);

  const handleClick = (country) => {
    console.log(country);
  };

  return (
    <ul className={styles['countries-grid']}>
      {countries.map(({ name, latlng }) => (
        <li key={name.common}>
          <NavLink
            onClick={(event) => handleClick(event.target.textContent)}
            to={countryToPath(name.common)}
            id={`${latlng[0]} ${latlng[1]}`}
          >
            {name.common}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
export default Countries;
