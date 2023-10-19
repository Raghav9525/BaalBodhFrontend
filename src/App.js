import PoineerAcadmeyBoot from './PoineerAcadmeyBoot'
import React from 'react';

function App() {
  console.log(process.env.REACT_APP_APP_ID)
  return (
    <div className="App">
      <PoineerAcadmeyBoot />  
    </div>
  );
}

export default App;
