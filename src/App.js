import React, { useState, useEffect } from 'react';
import NavBar from './components/navBarSup.js';
import './styles/styles.css';
import ItemDetailContainer from './components/itemDetailContainer.js';
import ItemListContainer from './components/itemListContainer.js';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const App = () => {
  const [categories, setCategories] = useState([]);
  const [products, setProducts] = useState([]);

  const username = window.navigator?.user?.username || 'Usuario';

  useEffect(() => {
    fetch('https://fakestoreapi.com/products/categories')
      .then((response) => response.json())
      .then((data) => setCategories(data));

    fetch('https://fakestoreapi.com/products')
      .then((response) => response.json())
      .then((data) => setProducts(data));
  }, []);

  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route
            path="/"
            element={<ItemListContainer categories={categories} products={products} greeting={`¡Hola ${username}, bienvenido a mi tienda!`} />}
          />
          <Route
            path="/category/:id"
            element={<ItemListContainer categories={categories} products={products} greeting={`¡Hola ${username}, bienvenido a mi tienda!`} />}
          />
          <Route
            path="/item/:id"
            element={<ItemDetailContainer products={products} />}
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
