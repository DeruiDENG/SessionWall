import { isCardValid } from './card';

const readCards = () => {
  const cardsStringInStorage = window.localStorage.getItem('SessionWallCards');
  return cardsStringInStorage ? JSON.parse(cardsStringInStorage) : [];
};

const persistCard = (card) => {
  if (isCardValid(card)) {
    let cardsInStorage = readCards();

    cardsInStorage = cardsInStorage.filter(cardInStorage => cardInStorage.id !== card.id);
    cardsInStorage.push(card);
    window.localStorage.setItem('SessionWallCards', JSON.stringify(cardsInStorage));
  }
};

const removeCard = (cardId) => {
  let cardsInStorage = readCards();
  cardsInStorage = cardsInStorage.filter(cardInStorage => cardInStorage.id !== cardId);
  window.localStorage.setItem('SessionWallCards', JSON.stringify(cardsInStorage));
};

export default { readCards, persistCard, removeCard };
