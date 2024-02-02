import React from "react";
import "./Cards.scss";

const Cards = ({ imageSrc, altText, title, description }) => {
  return (
    <div className="card-two">
      <img src={imageSrc} alt={altText} className="card-two__image" />
      <div className="card-two__content">
        <h1 className="card-two__title">{title}</h1>
        <p className="card-two__description">{description}</p>
        <button type="button" className="card-two__button">
          Read
        </button>
      </div>
    </div>
  );
};

export default Cards;
