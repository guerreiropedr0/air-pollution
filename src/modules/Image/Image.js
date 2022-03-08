import styles from './Image.module.css';
import image from '../../images/mobile-image.jpg';

const Template = () => (
  <img src={image} alt="Air Pollution" className={styles.image} />
);

export default Template;
