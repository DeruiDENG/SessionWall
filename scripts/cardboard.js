import $ from 'jquery';
import card from './card';

const $cardContainer = $('.js-card-container');

const onClickCard = (e) => {
  const $card = $(e.currentTarget);
  $card.removeClass('card--empty');
  $card.find('card__input').focus();
};

const insertEmptyCard = (htmlGenerator) => {
  const $card = $($.parseHTML(htmlGenerator()));
  $card.on('click', onClickCard);
  $cardContainer.append($card);
};

const init = () => {
  insertEmptyCard(card.generateEmptyCardHtml());
};

export default { init };
