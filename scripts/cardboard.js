import $ from 'jquery';
import _ from 'lodash';
import { generateCardHtml, generateEmptyCard, cardColor } from './card';
import cardStorage from './storage';

const $cardContainer = $('.js-card-container');
const $body = $('body');

const insertCardDom = (card, focus) => {
  const $card = $($.parseHTML(generateCardHtml(card)));
  $cardContainer.append($card);
  if (focus === true) {
    $card.find('.js-card-title').focus();
  }
};

const onClickEmptyCard = () => {
  const card = generateEmptyCard({ color: cardColor.yellow });
  insertCardDom(card, true);
  cardStorage.persistCard(card);
};

const onCleanupCard = () => {
  cardStorage.clearAll();
  $cardContainer.find('.js-card').remove();
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

const onClickCardColorPanel = (e) => {
  const $targetColorOption = $(e.currentTarget);
  const newColor = $targetColorOption.data('color');
  const $currentCard = $targetColorOption.closest('.js-card');
  $currentCard.find('.js-color-option').toggleClass('selected', false);
  const previousColor = $currentCard.data('color');
  $targetColorOption.toggleClass('selected', true);
  $currentCard.toggleClass(`card--${previousColor}`, false).toggleClass(`card--${newColor}`, true).data('color', newColor);
  cardStorage.updateCard($currentCard.data('id'), { color: newColor });
};

const bind = () => {
  $('.js-new-card').on('click', onClickEmptyCard);
  $('.js-clean-up-cards').on('click', onCleanupCard);

  $body.on('click', '.js-remove-card', onClickRemoveCard);
  $body.on('focus', '.js-card-title, .js-card-message', onInputFocus);
  $body.on('blur', '.js-card-title, .js-card-message', onInputBlur);
  $body.on('click', '.js-color-option', onClickCardColorPanel);
};

const init = () => {
  bind();
  const cardsFromStorage = cardStorage.readCards();
  _.forEach(cardsFromStorage, insertCardDom);
};

export default { init };
