// Usecontext.js
import React, { createContext } from 'react';
import Child from './Child';

const MyContext = createContext();

const Usecontext = () => {
  const contextValue = 'I am from context';

  return (
    <div>
    
      <MyContext.Provider value={contextValue}>
        <Child />
      </MyContext.Provider>
    </div>
  );
}

export default Usecontext;
export {MyContext}

