
const cardColor = {
  red: 'red',
  purple: 'purple',
  blue: 'blue',
};

const generateEmptyCard = ({ color }) => ({ color, title: '', message: '', id: Date.now() });

const generateCardHtml = (card) => {
  const { color, title, message, id } = card;
  return `<div class='card card--empty card--${color}' data-id=${id}>
            <div class='card__title'>
                ${title}
            </div>
            <div class='card__message'>
                ${message}
            </div>  
          </div>`;
};

export default { generateCardHtml, generateEmptyCard, cardColor };
