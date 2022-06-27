import { pageWrapper } from './body-wrapper';
import Card from './class-card';
import ElementNew from './class-html-element';

function createCardPageTrain(nameOfCategory) {
  const categoryCards = new ElementNew(pageWrapper.element.children[1], 'div', [['main__card-train'], ['card-train']]);
  categoryCards
    .createElem();

  new ElementNew(categoryCards.element, 'h1', 'card-train__h1', nameOfCategory.toUpperCase())
    .createElem();
  const categoryWrapper = new ElementNew(categoryCards.element, 'div', 'card-train__wrapper');
  categoryWrapper
    .createElem();

  for (let i = 0; i < 8; i += 1) {
    fetch(`./assets/jsons/${nameOfCategory}.json`)
      .then((response) => response.json())
      .then((data) => {
        const arrOfKeys = Object.keys(data);
        const categoryItem = new ElementNew(categoryWrapper.element, 'div', ['card-train__item', `card-train__item-${arrOfKeys[i]}`]);
        categoryItem.createElem();
        new Card(categoryItem.element, `${arrOfKeys[i]}`, nameOfCategory, 'card-train__item-img').createCardImg('card-train image');
        setTimeout(() => new Card(categoryItem.element, `${arrOfKeys[i]}`, nameOfCategory, 'card-train__item-name').createCardName(), 300);
      });
  }
}

export default createCardPageTrain;
