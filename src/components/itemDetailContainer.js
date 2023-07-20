import React from 'react';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = ({ products }) => {
  const { id } = useParams();
  const product = products.find((product) => product.id === parseInt(id));

  return (
    <div className='bodyClass'>
      {product ? (
        <div className='productoItem'>
          <h2>{product.title}</h2>
          <p>{product.description}</p>
        </div>
      ) : (
        <p className='bodyClass'>No se encontró el producto.</p>
      )}
    </div>
  );
};

export default ItemDetailContainer;
