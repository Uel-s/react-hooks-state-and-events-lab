import React, { useState } from 'react';

const Item = ({ itemName }) => {
  const [inCart, setInCart] = useState(false);

  const handleAddToCart = () => {
    setInCart(prevState => !prevState);
  };

  return (
    <li className={inCart ? 'in-cart' : ''}>
      {itemName}
      <button onClick={handleAddToCart}>
        {inCart ? 'Remove From Cart' : 'Add to Cart'}
      </button>
    </li>
  );
};

export default Item