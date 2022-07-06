import { pageWrapper } from '../main-elements/body-wrapper';
import Card from '../classes/class-card';
import ElementNew from '../classes/class-html-element';

function createCardPageTrain(nameOfCategory) {
  const cardCards = new ElementNew(pageWrapper.element.children[1], 'div', [['main__card-train'], ['card-train']]);
  cardCards
    .createElem();

  new ElementNew(cardCards.element, 'h1', 'card-train__h1', nameOfCategory.toUpperCase())
    .createElem();
  const cardWrapper = new ElementNew(cardCards.element, 'div', 'card-train__wrapper');
  cardWrapper
    .createElem();

  fetch(`./assets/jsons/${nameOfCategory}.json`)
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < 8; i += 1) {
        const arrOfKeys = Object.keys(data);
        const cardContainer = new ElementNew(cardWrapper.element, 'div', 'card-train__wrapper-container');
        cardContainer
          .createElem();
        const cardFrontBack = new ElementNew(cardContainer.element, 'div', 'card-train__front-back');
        cardFrontBack
          .createElem();
        const cardItemFront = new ElementNew(cardFrontBack.element, 'div', ['card-train__item', `card-train__item-${arrOfKeys[i]}`]);
        cardItemFront
          .createElem();
        const cardItemBack = new ElementNew(cardFrontBack.element, 'div', 'card-train__item-back-hidden');
        cardItemBack
          .createElem();
        new Card(cardItemBack.element, arrOfKeys[i], nameOfCategory, 'card-train__item-back-translate')
          .createCardRotate();
        new Card(cardItemFront.element, `${arrOfKeys[i]}`, nameOfCategory, 'card-train__item-img')
          .createCardImg('card-train image');
        setTimeout(() => {
          new Card(cardItemFront.element, `${arrOfKeys[i]}`, nameOfCategory, 'card-train__item-name')
            .createCardName();
          setTimeout(() => {
            new Card(cardItemFront.element, `${arrOfKeys[i]}`, nameOfCategory, 'card-train__item-rotate')
              .createCardRotateIcon();
          }, 50);
        }, 50);
      }
    });
}

export default createCardPageTrain;
