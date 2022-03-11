import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styles from './Continents.module.css';

const Continents = () => {
  const state = useSelector((state) => state.allReducer);
  const continents = Object.values(state.continents);

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
      text: 'Oceania',
      id: 5,
    },
  ];

  return (
    <ul className={styles.continents}>
      {links.map(({ text, path, id }) => (
        <li key={text}>
          <NavLink to={path}>{text}</NavLink>
          <small>
            {!state.loading && continents[id].length}
            {' '}
            countries
          </small>
        </li>
      ))}
    </ul>
  );
};

export default Continents;
