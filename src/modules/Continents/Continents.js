import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import styles from './Continents.module.css';

const Continents = () => {
  const continents = useSelector((state) => Object.values(state.allReducer.continents));

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

  const handleClick = (continent) => {
    console.log(continent);
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
            {continents[id] && continents[id].length}
            {' '}
            countries
          </small>
        </li>
      ))}
    </ul>
  );
};

export default Continents;
