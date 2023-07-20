import React from 'react';
import { Link, useParams } from 'react-router-dom';

const ItemListContainer = ({ categories, products, greeting }) => {
  const { id } = useParams();

  // filtrar productos
  const getFilteredProducts = () => {
    if (id && id !== 'JUANIT') {
      // Si hay categoría seleccionada 
      return products.filter((product) => product.category === id);
    }
    // Si no hay categoría, carga vacio el array 
    return [];
  };

  return (
    <div>
      <h2 className='bodyClass'>{greeting}</h2>
      <h3 className='bodyClass'>Categorías:</h3>
      <ul className='bodyClass'>
        {categories.map((category) => (
          <li key={category} className='categoryItem'>
            <Link to={`/category/${category}`}>{category}</Link>
          </li>
        ))}
      </ul>

      {/* borro productos y mensaje */}
      {(!id || id === 'JUANIT') && (
        <div>
          <h3 className='bodyClass'>Seleccione una categoría para ver los productos.</h3>
        </div>
      )}

      {/* Renderiza productos de categorias */}
      {id && id !== 'JUANIT' && (
        <div>
          <h3 className='bodyClass'>Productos de la categoría "{id}":</h3>
          {getFilteredProducts().length > 0 ? (
            <ul className='bodyClass'>
              {getFilteredProducts().map((product) => (
                <li key={product.id} className='listItem'>
                  <Link to={`/item/${product.id}`} className='productoItem'>
                    <h4>{product.title}</h4>
                    <p>{product.description}</p>
                  </Link>
                </li>
              ))}
            </ul>
          ) : (
            <p className='bodyClass'>No hay productos disponibles en esta categoría.</p>
          )}
        </div>
      )}
    </div>
  );
};

export default ItemListContainer;
