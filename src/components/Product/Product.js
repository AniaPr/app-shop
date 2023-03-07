import styles from './Product.module.scss';
import PropTypes from 'prop-types';
import { useState } from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductForm from '../ProductForm/ProductForm';

const Product = (props) => {
  const [currentColor, setCurrentColor] = useState(props.colors[0]);
  const [currentSize, setCurrentSize] = useState(props.sizes[0].name);

  const getPrice = () => {
    const findElem = props.sizes.find((size) => size.name === currentSize);

    return props.basePrice + findElem.additionalPrice;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      `Summary 
    Name: ${
      props.title
    }, Price: ${getPrice()}, Size: ${currentSize}, Color: ${currentColor}`
    );
  };

  return (
    <article className={styles.product}>
      <ProductImage
        currentColor={currentColor}
        name={props.name}
        title={props.title}
      />
      <div>
        <header>
          <h2 className={styles.name}>{props.title}</h2>
          <span className={styles.price}>Price: {getPrice()}$</span>
        </header>
        <ProductForm
          handleSubmit={handleSubmit}
          currentSize={currentSize}
          setCurrentSize={setCurrentSize}
          currentColor={currentColor}
          setCurrentColor={setCurrentColor}
          sizes={props.sizes}
          colors={props.colors}
        />
      </div>
    </article>
  );
};

Product.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  basePrice: PropTypes.number.isRequired,
  colors: PropTypes.arrayOf(PropTypes.string).isRequired,
  sizes: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string.isRequired,
      additionalPrice: PropTypes.number.isRequired,
    })
  ),
};

export default Product;
