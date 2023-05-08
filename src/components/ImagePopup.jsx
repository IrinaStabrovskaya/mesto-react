import React from "react";

const ImagePopup = (props) => { 
  return (
    <div
      className={`pop-up pop-up_type_big-pic ${
        props.isOpen ? `pop-up_opened` : " "
      }`}
    >
      <div className="pop-up__container pop-up__container_type_big-pic">
        <button
          className="pop-up__close-btn btn-hover"
          type="button"
          onClick={props.onClose}
        ></button>
        <figure className="pop-up__pic">
          <img
            className="pop-up__image"
            src={props.card.link}
            alt={props.card.name}
          />
          <figcaption className="pop-up__caption">{props.card.name}</figcaption>
        </figure>
      </div>
    </div>
  );
};

export default ImagePopup;
