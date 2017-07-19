import _ from 'lodash';

const cardColor = {
  red: 'red',
  purple: 'purple',
  blue: 'blue',
};
const isValidColor = ({ color }) => _.includes(_.values(cardColor), color);
const isValidId = ({ id }) => _.isNumber(id);
const cardValidators = [_.isObject, isValidColor, isValidId];
const isCardValid = card => _.every(cardValidators, validate => validate(card));


const generateEmptyCard = ({ color }) => ({ color, title: '', message: '', id: Date.now() });

const generateCardHtml = (card) => {
  const { color, title, message, id } = card;
  return `<div class='card js-card card--${color}' data-id=${id}>
            <div class='card__input'>
              <div class='card__title js-card-title' contenteditable>
                  ${title}
              </div>
              <div class='card__message js-card-message' contenteditable>
                  ${message}
              </div>  
            </div>
            <div class='card__footer'>
                <div class='card__footer-action js-remove-card'>
                    Remove
                </div>
            </div>
          </div>`;
};

export { generateCardHtml, generateEmptyCard, isCardValid, cardColor };
