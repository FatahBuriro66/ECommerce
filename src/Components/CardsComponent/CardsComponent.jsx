import React from "react";
import Cards from "../Cards/Cards";

const CardsComponent = ({ products, addItem, removeItem, addedItems }) => {
  products.map((product) => (product.isAdded = true));

  return (
    <div className="card__body">
      {products.map((product) => (
        <Cards
          key={product.id}
          product={product}
          addItem={addItem}
          removeItem={removeItem}
          addedItems={addedItems}
        />
      ))}
    </div>
  );
};

export default CardsComponent;
