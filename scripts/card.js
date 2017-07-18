
const cardColor = {
  red: 'red',
  purple: 'purple',
  blue: 'blue',
};

const generateEmptyCard = ({ color }) => ({ color, title: '', message: '', id: Date.now() });

const generateCardHtml = (card) => {
  const { color, title, message, id } = card;
  return `<div class='card card--${color}' data-id=${id}>
            <div class='card__input'>
              <div class='card__title js-card-title' contenteditable>
                  ${title}
              </div>
              <div class='card__message' contenteditable>
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

export { generateCardHtml, generateEmptyCard, cardColor };
