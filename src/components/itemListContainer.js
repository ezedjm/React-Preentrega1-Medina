import React from 'react';

const ItemListContainer = (props) => {
  return (
    <div className="itemListContainer">
      <h1>{props.greeting}</h1>
    </div>
  );
};

export default ItemListContainer;
