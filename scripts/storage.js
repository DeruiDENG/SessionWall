import { isCardValid } from './card';

const cardStorageKey = 'SessionWallCards';

const readCards = () => {
  const cardsStringInStorage = window.localStorage.getItem(cardStorageKey);
  return cardsStringInStorage ? JSON.parse(cardsStringInStorage) : [];
};

const persistCard = (card) => {
  if (isCardValid(card)) {
    let cardsInStorage = readCards();

    cardsInStorage = cardsInStorage.filter(cardInStorage => cardInStorage.id !== card.id);
    cardsInStorage.push(card);
    window.localStorage.setItem(cardStorageKey, JSON.stringify(cardsInStorage));
  }
};

const removeCard = (cardId) => {
  let cardsInStorage = readCards();
  cardsInStorage = cardsInStorage.filter(cardInStorage => cardInStorage.id !== cardId);
  window.localStorage.setItem(cardStorageKey, JSON.stringify(cardsInStorage));
};

const updateCard = (cardId, { title, message, color }) => {
  const cardsInStorage = readCards();
  const propsToUpdate = _.pickBy({
    title,
    message,
    color,
  }, prop => prop !== undefined);
  const updatedCard = _.assign(_.find(cardsInStorage, cardInStorage => cardInStorage.id === cardId),
    propsToUpdate);
  if (isCardValid(updatedCard)) {
    window.localStorage.setItem(cardStorageKey, JSON.stringify(cardsInStorage));
  }
};

const clearAll = () => {
  window.localStorage.removeItem(cardStorageKey);
};

export default { readCards, persistCard, removeCard, updateCard, clearAll };
