import React from 'react';

const Cart = ({ items }) => {
  return (
    <div>
      <h2>надеюсь правильно</h2>
      <ul>
        {items.map((item, index) => (
          <li key={index}>
            <span>{item.name}</span> - <span>{item.price}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Cart;
