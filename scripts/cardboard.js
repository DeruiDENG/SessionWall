import $ from 'jquery';
import _ from 'lodash';
import { generateCardHtml, generateEmptyCard, cardColor } from './card';
import cardStorage from './storage';

const $cardContainer = $('.js-card-container');

const insertCardDom = (card) => {
  const $card = $($.parseHTML(generateCardHtml(card)));
  $cardContainer.append($card);
  $card.find('.js-card-title').focus();
};

const onClickEmptyCard = () => {
  const card = generateEmptyCard({ color: cardColor.red });
  insertCardDom(card);
  cardStorage.persistCard(card);
};

const onCleanupCard = () => {
  cardStorage.clearAll();
  $cardContainer.remove('.js-card');
};

const onClickRemoveCard = (e) => {
  const $cardToRemove = $(e.currentTarget).closest('.js-card');
  cardStorage.removeCard($cardToRemove.data('id'));
  $cardToRemove.remove();
};

const onInputFocus = (e) => {
  $(e.currentTarget).closest('.js-card').addClass('focus');
};

const onInputBlur = (e) => {
  const $currentCard = $(e.currentTarget).closest('.js-card');
  const cardId = $currentCard.data('id');
  const title = $currentCard.find('.js-card-title').text();
  const message = $currentCard.find('.js-card-message').text();
  cardStorage.updateCard(cardId, { title, message });
};

const bind = () => {
  $('.js-new-card').on('click', onClickEmptyCard);
  $('.js-clean-up-cards').on('click', onCleanupCard);

  $('body').on('click', '.js-remove-card', onClickRemoveCard);
  $('body').on('focus', '.js-card-title, .js-card-message', onInputFocus);
  $('body').on('blur', '.js-card-title, .js-card-message', onInputBlur);
};

const init = () => {
  bind();
  const cardsFromStorage = cardStorage.readCards();
  _.forEach(cardsFromStorage, insertCardDom);
};

export default { init };
