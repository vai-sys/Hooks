// App.js
import React from 'react';
import Usecontext from './components/Usecontext';
import Child from './components/Child';
import MyContext from './MyContext';  // Import your context

function App() {
  const contextValue = 'I am from context';
  return (
    <div className="App">
      {/* <MyContext.Provider value={contextValue}>
        <Usecontext />
        <Child />
      </MyContext.Provider> */}


      
    </div>
  );
}

export default App;



