import PoineerAcadmeyBoot from './PoineerAcadmeyBoot'
import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import { BrowserRouter } from 'react-router-dom';
function App() {
  console.log(process.env.REACT_APP_APP_ID)
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />
      <PoineerAcadmeyBoot />  
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
