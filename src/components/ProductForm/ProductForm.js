import OptionSize from '../OptionSize/OptionSize';
import OptionColor from '../OptionColor/OptionColor';
import Button from '../Button/Button';
import styles from './ProductForm.module.scss';
import PropTypes from 'prop-types';

const ProductForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <OptionSize
        currentSize={props.currentSize}
        setCurrentSize={props.setCurrentSize}
        sizes={props.sizes}
      />
      <OptionColor
        currentColor={props.currentColor}
        setCurrentColor={props.setCurrentColor}
        colors={props.colors}
      />
      <Button className={styles.button}>
        <span className='fa fa-shopping-cart' />
      </Button>
    </form>
  );
};

ProductForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  currentSize: PropTypes.string.isRequired,
  setCurrentSize: PropTypes.func.isRequired,
  sizes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      additionalPrice: PropTypes.number.isRequired,
    })
  ),
  currentColor: PropTypes.string.isRequired,
  setCurrentColor: PropTypes.func.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default ProductForm;
