import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styles from './Countries.module.css';

const Countries = () => {
  const countries = useSelector((state) => state.continentReducer.countries);

  const handleClick = (country) => {
    console.log(country);
  };

  return (
    <ul className={styles['countries-grid']}>
      {countries.map(({ name }) => (
        <li key={name.common}>
          <NavLink
            onClick={(event) => handleClick(event.target.textContent)}
            to={name.common}
          >
            {name.common}
          </NavLink>
        </li>
      ))}
    </ul>
  );
};
export default Countries;
