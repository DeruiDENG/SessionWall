import { isCardValid } from './card';

const readCards = () => [];

const persistCard = (card) => {
  if (isCardValid(card)) {
    let cardsInStorage = localStorage.getItem('SessionWallCards') || [];
    cardsInStorage = cardsInStorage.filter(cardInStorage => cardInStorage.id !== card.id);
    cardsInStorage.push(card);
    localStorage.setItem('SessionWallCards', cardsInStorage);
  }
};

const removeCard = cardId => cardId;

export default { readCards, persistCard, removeCard };
