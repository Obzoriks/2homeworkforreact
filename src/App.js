import React from 'react';
import Button from './components/button/button';
import Cart from './components/cart/cart';
import What from './components/what/what';

const App = () => {
  const handleClick = () => {
    console.log('Жмяк');
  };

  const cartItems = [
    { name: 'Item 1', price: 10 },
    { name: 'Item 2', price: 20 },
    { name: 'Item 3', price: 30 }
  ];

  return (
    <div>
      <h1>я не понял</h1>
      <Button text="Click me" onClick={handleClick} />
      <Cart items={cartItems} />
      <What prop1="Value 1" prop2="Value 2" />
    </div>
  );
}

export default App;
