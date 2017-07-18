import $ from 'jquery'

let count = 0; 
const $cardContainer = $('.js-card-container');

const generateEmptyCardHtml = () => {
    return `<div class='card card--empty'>
                <form>
                    
                </form>
                <textarea class='card__input'></textarea>
            </div>`;   
};

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
    insertEmptyCard(generateEmptyCardHtml);
    count++;
    console.log(`count: ${count}`);
};

export default { init };
