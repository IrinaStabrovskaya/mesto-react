import React from "react";

//в этом компоненте использован дополнительный функционал
// контейнера лайков и отображения количества лайков
//т.е. если лайков нет, то их количество не отображается, если есть, то все отображается по ТЗ.
//Этот функционал был применен в ПР9, поэтому реализован и этой работе.

const Card = ({ link, name, likes, onCardClick }) => {
  const hasLikes = likes.length !== 0;

  function handleClick() {
    onCardClick({ link, name });
  }

  return (
    <li className="photos__element">
      <button className="photos__delete-btn btn-hover" type="button"></button>
      <img
        className="photos__image"
        src={link}
        alt={name}
        onClick={handleClick}
      />
      <div className="photos__description">
        <h2 className="photos__title">{name}</h2>
        <div
          className={`photos__like ${
            !hasLikes ? "" : `photos__like_with-counter`
          }`}
        >
          <button
            className="photos__heart-btn btn-hover"
            type="button"
          ></button>
          <div className="photos__like-counter">
            {!hasLikes ? "" : `${likes.length}`}
          </div>
        </div>
      </div>
    </li>
  );
};

export default Card;
