import React from "react";

const PopupWithForm = (props) => {
  return (
    <div
      className={`pop-up pop-up_type_${props.name} ${
        props.isOpen ? `pop-up_opened` : " "
      }`}
    >
      <div
        className={`pop-up__container pop-up__container_type_${props.nameContainer}`}
      >
        <button
          className="pop-up__close-btn btn-hover"
          type="button"
          onClick={props.onClose}
        ></button>
        <h2
          className={`pop-up__title pop-up__title_type_${props.nameTitle}`}
        >{`${props.title}`}</h2>

        <form
          className={`pop-up__form name=${props.name} action="#" noValidate`}
          onSubmit={props.onSubmit}
        >
          {props.children}
          <button
            className="pop-up__form-save-btn"
            type="submit"
            name="save-btn"
          >
            {`${props.text}`}
          </button>
        </form>
      </div>
    </div>
  );
};

export default PopupWithForm;
