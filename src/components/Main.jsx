import React, { useState, useEffect } from "react";
import { api } from "./../utils/Api";
import Card from "./Card";

function Main(props) {  
  const [userName, setUserName] = useState("");
  const [userDescription, setUserDescription] = useState("");
  const [userAvatar, setUserAvatar] = useState("");
  const [cards, setCards] = useState([]);

  useEffect(() => {
    api
      .getAllInitialData()
      .then((data) => {
        const [profile, cards] = data;

        setUserName(profile.name);
        setUserDescription(profile.about);
        setUserAvatar(profile.avatar);
        setCards(cards);
      })
      .catch((err) => console.log(err));
  }, []);

  const initialCards = cards.map((card) => (
    <Card
      key={card._id}
      name={card.name}
      link={card.link}
      likes={card.likes}
      onCardClick={props.onCardClick}
    />
    
  ));

  return (
    <main className="content">
      <section className="profile">
        <button className="profile__avatar-btn" onClick={props.onEditAvatar}>
          <img
            className="profile__avatar"
            src={userAvatar}
            alt="аватар пользователя"
          />
        </button>
        <div className="profile__info">
          <div className="profile__description">
            <h1 className="profile__title">{userName}</h1>
            <p className="profile__subtitle">{userDescription}</p>
          </div>
          <button
            className="profile__edit-btn btn-hover"
            type="button"
            onClick={props.onEditProfile}
          ></button>
        </div>
        <button
          className="profile__add-btn btn-hover"
          type="button"
          onClick={props.onAddPlace}
        ></button>
      </section>

      <section className="photos">
        <ul className="photos__elements">{initialCards}</ul>
      </section>
    </main>
  );
}
export default Main;
