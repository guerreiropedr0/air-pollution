import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import styles from './Countries.module.css';
import countryToPath, { searchFunc } from '../Helpers/helper';
import fetchCountryPollution from '../../redux/polution/polution';
import Search from '../Search/Search';

const Countries = () => {
  const continents = useSelector((state) => state.allReducer.continents);

  const [currentContinent, setCurrentContinent] = useState(null);

  useEffect(() => {
    const current = window.location.href.slice(window.location.href.lastIndexOf('/') + 1);
    setCurrentContinent(current);
  }, []);

  const dispatch = useDispatch();
  const handleClick = ({ id, textContent }) => {
    dispatch(fetchCountryPollution(id.split(' '), textContent));
  };

  const [value, setValue] = useState('');

  const handleSearch = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <section className={styles.heading}>
        <img
          className={styles.placeholder}
          src="https://upload.wikimedia.org/wikipedia/commons/8/80/World_map_-_low_resolution.svg"
          alt="Placeholder"
        />
        <h1>
          {continents[currentContinent] && continents[currentContinent][0].continents.toUpperCase()}
          <br />
          <span>{continents[currentContinent] && continents[currentContinent].length}</span>
        </h1>
      </section>
      <div className={styles.contain}>
        <h2 className={styles.title}>Countries:</h2>
        <Search handleSearch={handleSearch} data={value} />
      </div>
      <ul className={styles['countries-grid']}>
        {continents[currentContinent]
          && continents[currentContinent]
            .filter((c) => searchFunc(c.name, value))
            .map(({ name, latlng }) => (
              <li key={name.common}>
                <NavLink
                  id={`${latlng[0]} ${latlng[1]}`}
                  to={countryToPath(name.common)}
                  onClick={(event) => handleClick(event.target)}
                >
                  {name.common}
                </NavLink>
              </li>
            ))}
      </ul>
    </>
  );
};
export default Countries;
