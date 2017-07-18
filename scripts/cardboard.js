import $ from 'jquery';
import _ from 'lodash';
import cardHelper from './card';
import storage from './storage';

const $cardContainer = $('.js-card-container');

const insertCardDom = (card) => {
  const $card = $($.parseHTML(cardHelper.generateCardHtml(card)));
  $cardContainer.append($card);
  $card.focus();
};

const onClickEmptyCard = () => {
  const card = cardHelper.generateEmptyCard({ color: 'red' });
  insertCardDom(card);
  storage.persistCard(card);
};

const bind = () => {
  $('.js-new-card').on('click', onClickEmptyCard);
};

const init = () => {
  bind();
  const cardsFromStorage = storage.readCards();
  _.forEach(cardsFromStorage, insertCardDom);
};

export default { init };
