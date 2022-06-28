import { pageWrapper } from './body-wrapper';
import Card from './class-card';
import ElementNew from './class-html-element';

function createCardPagePlay(nameOfCategory) {
  console.log('HELLO PLAY!!');
  const cardCards = new ElementNew(pageWrapper.element.children[1], 'div', [['main__card-play'], ['card-play']]);
  cardCards
    .createElem();
  const playPanel = new ElementNew(cardCards.element, 'div', 'card-play__panel');
  playPanel
    .createElem();
  const playBegin = new ElementNew(playPanel.element, 'div', 'card-play__begin');
  playBegin
    .createElem();
  new ElementNew(playBegin.element, 'button', 'card-play__begin-button', 'START')
    .createElem();
  new ElementNew(playPanel.element, 'h1', 'card-train__h1', nameOfCategory.toUpperCase())
    .createElem();
  const playStars = new ElementNew(playPanel.element, 'div', 'card-play__stars');
  playStars.createElem();
  while (playStars.element.children.length < 8) {
    new ElementNew(playStars.element, 'img', 'card-play__stars-star', null, [['src', './assets/images/02icon-star.png'], ['alt', 'star image']])
      .createElem();
  }
  const cardWrapper = new ElementNew(cardCards.element, 'div', 'card-play__wrapper');
  cardWrapper
    .createElem();

  fetch(`./assets/jsons/${nameOfCategory}.json`)
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < 8; i += 1) {
        const arrOfKeys = Object.keys(data);
        const cardItemFront = new ElementNew(cardWrapper.element, 'div', ['card-play__item', `card-play__item-${arrOfKeys[i]}`]);
        cardItemFront
          .createElem();
        new Card(cardItemFront.element, `${arrOfKeys[i]}`, nameOfCategory, 'card-play__item-img').createCardImg('card-play image');
      }
    });
}

export default createCardPagePlay;
