import React, { useState, useEffect } from "react";

const Card = (card) => {
  
  function handleClick() {
    card.onCardClick(card);
  }

  return (
    <li className="photos__element">
      <button className="photos__delete-btn btn-hover" type="button"></button>
      <img
        className="photos__image"
        src={card.link}
        alt={card.name}
        onClick={handleClick}
      />
      <div className="photos__description">
        <h2 className="photos__title">{card.name}</h2>
        <div className="photos__like">
          <button
            className="photos__heart-btn btn-hover"
            type="button"
          ></button>
          <div className="photos__like-counter">{card.likes.length}</div>
        </div>
      </div>
    </li>
  );
};

export default Card;
