import _ from 'lodash';

const cardColor = {
  red: 'red',
  purple: 'purple',
  blue: 'blue',
  yellow: 'yellow',
};
const isValidColor = ({ color }) => _.includes(_.values(cardColor), color);
const isValidId = ({ id }) => _.isNumber(id);
const cardValidators = [_.isObject, isValidColor, isValidId];
const isCardValid = card => _.every(cardValidators, validate => validate(card));


const generateEmptyCard = ({ color }) => ({ color, title: '', message: '', id: Date.now() });

const generateCardHtml = (card) => {
  const { color, title, message, id } = card;
  return `<div class='card js-card card--${color}' data-id=${id} data-color=${color}>
            <div class='card__input'>
              <div class='card__title js-card-title' contenteditable>
                  ${title}
              </div>
              <div class='card__message js-card-message' contenteditable>
                  ${message}
              </div>  
            </div>
            <div class='card__footer'>
                <div class='card__colors-selector'>
                    <div class='card__color-option js-color-option red ${color === cardColor.red ? 'selected' : ''}' data-color='${cardColor.red}'></div>
                    <div class='card__color-option js-color-option blue ${color === cardColor.blue ? 'selected' : ''}' data-color='${cardColor.blue}'></div>
                    <div class='card__color-option js-color-option yellow ${color === cardColor.yellow ? 'selected' : ''}' data-color='${cardColor.yellow}'></div>
                    <div class='card__color-option js-color-option purple ${color === cardColor.purple ? 'selected' : ''}' data-color='${cardColor.purple}'></div>
                </div>
                <div class='card__footer-action js-remove-card'>
                    Remove
                </div>
            </div>
          </div>`;
};

export { generateCardHtml, generateEmptyCard, isCardValid, cardColor };
