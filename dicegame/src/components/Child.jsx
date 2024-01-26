// Child.js
import React, { useContext } from 'react';
import MyContext from '../MyContext';  // Import your context

const Child = () => {
  const contextValue = useContext(MyContext);

  return (
    <div>
      <div>{contextValue}</div>
    </div>
  );
}

export default Child;

