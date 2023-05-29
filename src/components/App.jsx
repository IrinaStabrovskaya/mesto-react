import "../index.css";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupEditProfile from "./PopupWithForm/PopupEditProfile";
import PopupAddCard from "./PopupWithForm/PopupAddCard";
import PopupUpdateAvatar from "./PopupWithForm/PopupUpdateAvatar";
import PopupConfirm from "./PopupWithForm/PopupConfirm";
import ImagePopup from "./ImagePopup";
import { useState, useEffect } from "react";
import { api } from "./../utils/Api";
import { CurrentUserContext } from "../contexts/CurrentUserContext";

const App = () => {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({});
  const [currentUser, setCurrentUser] = useState({});
  const [cards, setCards] = useState([]);

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true);
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true);
  };

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true);
  };

  const handleCardClick = (cardData) => {
    setIsImagePopupOpen(true);
    setSelectedCard(cardData);    
  };

  const closeAllPopups = () => {
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsImagePopupOpen(false);
  };

  const handleCardLike = (card) => {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    api.changeLikeCardStatus(card.cardId, !isLiked).then((newCard) => {
      setCards((state) =>
        state.map((c) => (c._id === card.cardId ? newCard : c))
      );
    });
  };

  const handleCardDelete = (card) => {
    api.deleteCard(card.cardId).then(() => {
      setCards((cards) => cards.filter((c) => c._id !== card.cardId));
    });
  };

  const handleUpdateUser = (data) => {
    return api.setInfo(data).then((data) => {
      setCurrentUser(data);
      closeAllPopups();
    });
  };

  const handleUpdateAvatar = (avatar) => {
    return api.setAvatar(avatar).then((res) => {
      setCurrentUser(res);
      closeAllPopups();
    });
  };

  const handleAddNewCard = (data) => {
    return api.setNewCard(data).then((newCard) => {
      setCards([newCard, ...cards]);
      closeAllPopups();
    });
  };

  useEffect(() => {
    api.getInfo().then((data) => {
      setCurrentUser(data);
    });
  }, []);

  useEffect(() => {
    api.getInitialsCards()
      .then((cards) => {
        setCards(cards);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <Header />
      <Main
        onEditProfile={handleEditProfileClick}
        onAddPlace={handleAddPlaceClick}
        onEditAvatar={handleEditAvatarClick}
        onCardClick={handleCardClick}
        cards={cards}
        onCardLike={handleCardLike}
        onCardDelete={handleCardDelete}
      />
      <Footer />
      <PopupEditProfile
        isOpen={isEditProfilePopupOpen}
        onClose={closeAllPopups}
        onUpdateUser={handleUpdateUser}
      />
      <PopupAddCard
        isOpen={isAddPlacePopupOpen}
        onClose={closeAllPopups}
        onAddNewCard={handleAddNewCard}
      />
      <PopupUpdateAvatar
        isOpen={isEditAvatarPopupOpen}
        onClose={closeAllPopups}
        onUpdateAvatar={handleUpdateAvatar}
      />
      <PopupConfirm />
      <ImagePopup
        card={selectedCard}
        isOpen={isImagePopupOpen}
        onClose={closeAllPopups}
      />
    </CurrentUserContext.Provider>
  );
};

export default App;
