import React from "react";
import PopupWithForm from "../PopupWithForm";

const PopupEditProfile = (props) => {
  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      name="edit"
      title="Редактировать профиль"
      text="Сохранить"
    >
      <input
        className="pop-up__form-input pop-up__form-input_type_name"
        required
        type="text"
        name="name"
        placeholder="Имя"
        minLength="2"
        maxLength="40"
      />

      <span className="pop-up__form-input-error name-error"></span>

      <input
        className="pop-up__form-input pop-up__form-input_type_about"
        required
        type="text"
        name="about"
        placeholder="О себе"
        minLength="2"
        maxLength="200"
      />

      <span className="pop-up__form-input-error about-error"></span>
    </PopupWithForm>
  );
};
export default PopupEditProfile;
