import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from './Countries.module.css';
import { countryToPath } from '../Helpers/helper';

const Countries = () => {
  const continents = useSelector((state) => state.allReducer.continents);

  const [currentContinent, setCurrentContinent] = useState(null);

  useEffect(() => {
    const current = window.location.href.slice(
      window.location.href.lastIndexOf('/') + 1,
    );
    setCurrentContinent(current);
  }, []);

  return (
    // const handleClick = (country) => {
    //   return
    // };
    <>
      <h1>{currentContinent}</h1>
      <h2>
        {continents[currentContinent] && continents[currentContinent].length}
      </h2>
      <ul className={styles['countries-grid']}>
        {continents[currentContinent]
          && continents[currentContinent].map(({ name }) => (
            <li key={name.common}>
              <NavLink to={countryToPath(name.common)}>{name.common}</NavLink>
            </li>
          ))}
      </ul>
    </>
  );
};
export default Countries;
