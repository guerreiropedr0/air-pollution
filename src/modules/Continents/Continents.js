import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import { searchFunc } from '../Helpers/helper';
import styles from './Continents.module.css';

const Continents = ({ data }) => {
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
      {links.filter((link) => searchFunc(link, data)).map((item) => (
        <li key={item.text}>
          <NavLink to={item.path}>{item.text}</NavLink>
          <small>
            {!state.loading && continents[item.id].length}
            {' '}
            countries
          </small>
        </li>
      ))}
    </ul>
  );
};

Continents.propTypes = {
  data: PropTypes.string.isRequired,
};

export default Continents;
