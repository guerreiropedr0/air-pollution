import PropTypes from 'prop-types';
import styles from './Search.module.css';

const Search = ({ handleSearch, data }) => (
  <input className={styles.search} type="search" value={data} onChange={handleSearch} placeholder="Search region :)" />
);

Search.propTypes = {
  handleSearch: PropTypes.func.isRequired,
  data: PropTypes.string.isRequired,

};

export default Search;
