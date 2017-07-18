import $ from 'jquery';
import _ from 'lodash';
import { generateCardHtml, generateEmptyCard, cardColor } from './card';
import storage from './storage';

const $cardContainer = $('.js-card-container');

const insertCardDom = (card) => {
  const $card = $($.parseHTML(generateCardHtml(card)));
  $cardContainer.append($card);
  $card.find('.js-card-title').focus();
};

const onClickEmptyCard = () => {
  const card = generateEmptyCard({ color: cardColor.red });
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
