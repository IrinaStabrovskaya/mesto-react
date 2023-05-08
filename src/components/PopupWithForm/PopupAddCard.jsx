import React from "react";
import PopupWithForm from "../PopupWithForm";

const PopupAddCard = (props) => {
  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      name="create-card"
      title="Новое место"
      text="Создать"
    >
      <input
        className="pop-up__form-input pop-up__form-input_type_place-title"
        required
        type="text"
        name="name"
        placeholder="Название"
        minLength="2"
        maxLength="30"
      />

      <span className="pop-up__form-input-error name-error"></span>

      <input
        className="pop-up__form-input pop-up__form-input_type_link"
        required
        type="url"
        name="link"
        placeholder="Ссылка на картинку"
      />

      <span className="pop-up__form-input-error link-error"></span>
    </PopupWithForm>
  );
};

export default PopupAddCard;
