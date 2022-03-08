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
    <>
      <section className={styles.heading}>
        <img
          className={styles.placeholder}
          src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
          alt="Placeholder"
        />
        <h1>
          {continents[currentContinent]
            && continents[currentContinent][0].continents.toUpperCase()}
          <br />
          <span>
            {continents[currentContinent]
              && continents[currentContinent].length}
          </span>
        </h1>
      </section>
      <h2 className={styles.title}>Countries:</h2>
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
