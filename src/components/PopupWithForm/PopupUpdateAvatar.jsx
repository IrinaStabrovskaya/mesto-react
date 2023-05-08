import React from "react";
import PopupWithForm from "../PopupWithForm";

const PopupUpdateAvatar = (props) => {
  return (
    <PopupWithForm
      isOpen={props.isOpen}
      onClose={props.onClose}
      name="avatar"
      nameContainer="avatar "
      title="Обновить аватар"
      text="Сохранить"
    >
      <input
        className="pop-up__form-input pop-up__form-input_type_link"
        required
        type="url"
        name="link"
        placeholder="Ссылка на аватар"
      />

      <span className="pop-up__form-input-error link-error"></span>
    </PopupWithForm>
  );
};

export default PopupUpdateAvatar;
