import React, { useState } from 'react';
import NavBar from './components/navBarSup.js';
import './styles/styles.css';

import ItemListContainer from './components/itemListContainer.js';


const App = () => {
  
  const username = window.navigator?.user?.username || 'Usuario'; 

  
  return (
    <div>
      <NavBar />

      <ItemListContainer greeting={`¡Hola ${username}, bienvenido a mi tienda!`} />
      
     
    </div>
  );
};

export default App;
