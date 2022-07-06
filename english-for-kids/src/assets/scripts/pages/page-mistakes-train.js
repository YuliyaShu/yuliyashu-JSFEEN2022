/* eslint-disable max-len */
import { pageWrapper } from '../main-elements/body-wrapper';
import Card from '../classes/class-card';
import ElementNew from '../classes/class-html-element';

function createMistakesPageTrain() {
  pageWrapper.element.children[1].innerHTML = '';
  const cardCards = new ElementNew(pageWrapper.element.children[1], 'div', [['main__card-train'], ['card-train']]);
  cardCards
    .createElem();

  new ElementNew(cardCards.element, 'h1', 'card-train__h1', 'train mistakes'.toUpperCase())
    .createElem();
  const cardWrapper = new ElementNew(cardCards.element, 'div', 'card-train__wrapper');
  cardWrapper
    .createElem();
  const arrOfMistakenWords = [];
  fetch('./assets/jsons/categories.json')
    .then((response) => response.json())
    .then((dataCategory) => {
      Object.keys(dataCategory).forEach((category) => {
        fetch(`./assets/jsons/${category}.json`)
          .then((response) => response.json())
          .then((dataCard) => {
            Object.keys(dataCard).forEach((card) => {
              arrOfMistakenWords.push([`${category}-${card}`, +localStorage.getItem(`${card}Mistake`)]);
            });
            arrOfMistakenWords.sort((a, b) => b[1] - a[1]);
            return arrOfMistakenWords;
          })
          .then((arr) => {
            cardWrapper.element.innerHTML = '';
            for (let i = 0; i < 8; i += 1) {
              if (arr[i][1]) {
                const categoryMistake = arr[i][0].split('-')[0];
                const cardMistake = arr[i][0].split('-')[1];
                const cardContainer = new ElementNew(cardWrapper.element, 'div', 'card-train__wrapper-container');
                cardContainer
                  .createElem();
                const cardFrontBack = new ElementNew(cardContainer.element, 'div', 'card-train__front-back');
                cardFrontBack
                  .createElem();
                const cardItemFront = new ElementNew(cardFrontBack.element, 'div', ['card-train__item', `card-train__item-${cardMistake}`]);
                cardItemFront
                  .createElem();
                const cardItemBack = new ElementNew(cardFrontBack.element, 'div', 'card-train__item-back-hidden');
                cardItemBack
                  .createElem();
                new Card(cardItemBack.element, cardMistake, categoryMistake, 'card-train__item-back-translate')
                  .createCardRotate();
                new Card(cardItemFront.element, cardMistake, categoryMistake, 'card-train__item-img').createCardImg('card-train image');
                setTimeout(() => {
                  new Card(cardItemFront.element, cardMistake, categoryMistake, 'card-train__item-name').createCardName();
                  setTimeout(() => { new Card(cardItemFront.element, cardMistake, categoryMistake, 'card-train__item-rotate').createCardRotateIcon(); }, 50);
                }, 50);
                localStorage.setItem(`${cardMistake}Mistake`, 0);
              }
            }
          });
      });
    });
}

export default createMistakesPageTrain;
