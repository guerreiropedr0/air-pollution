import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styles from './Countries.module.css';
import { countryToPath } from '../Helpers/helper';

const Countries = () => {
  const continents = useSelector((state) => state.allReducer.continents);
  const currentContinent = useSelector(
    (state) => state.currentContinentReducer.currentContinent,
  );
  return (
    // const handleClick = (country) => {
    //   return
    // };
    <>
      <h1>{currentContinent}</h1>
      <h2>{continents[currentContinent].length}</h2>
      <ul className={styles['countries-grid']}>
        {continents[currentContinent].map(({ name }) => (
          <li key={name.common}>
            <NavLink to={countryToPath(name.common)}>{name.common}</NavLink>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Countries;
