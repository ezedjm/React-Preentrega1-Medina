import React, { useState } from 'react';
import NavBar from './components/navBarSup.js';
import productosDB from './components/productosDB.js';
import './styles/styles.css';
import Banner from './components/banners.js';


const App = () => {
  const [carritoItems, setCarritoItems] = useState([]);

  const agregarCarrito = (producto) => {
    const existingItem = carritoItems.find((item) => item.id === producto.id);

    if (existingItem) {
      const actualizoItems = carritoItems.map((item) => {
        if (item.id === producto.id) {
          return { ...item, quantity: item.quantity + 1 };
        }
        return item;
      });
      setCarritoItems(actualizoItems);
    } else {
      const nuevoItem = { ...producto, quantity: 1 };
      setCarritoItems([...carritoItems, nuevoItem]);
    }
  };

  const handleClickCarrito = () => {
    setCarritoItems([]);
  };

  const calculoTotal = () => {
    let total = 0;
    carritoItems.forEach((item) => {
      total += item.precio * item.quantity;
    });
    return total;
  };

  return (
    <div>
      <NavBar handleClickCarrito={handleClickCarrito} />
      <div className="contenido">
      <Banner />
        <div className="productoListado">
          {productosDB.map((producto) => (
            <div key={producto.id} className='productoItem'>
              <h2>{producto.nombre}</h2>
              <img src={producto.imagen} alt={producto.id} />
              <p>{producto.detalle}</p>
              <p><h3>{producto.moneda} {producto.precio}</h3></p>
              <button className="" onClick={() => agregarCarrito(producto)}>Agregar al carrito</button>
            </div>
          ))}
        </div>
      </div>
      {carritoItems.length > 0 && (
        <div className="carrito">
          <h3>Carrito de Compras</h3>
          <hr />
          {carritoItems.map((item) => (
            <div key={item.id}>
              <p>
                {item.nombre} x {item.quantity}
              </p>
            </div>
          ))}
          <p>Total: ${calculoTotal()}</p>
        </div>
      )}
    </div>
  );
};

export default App;
