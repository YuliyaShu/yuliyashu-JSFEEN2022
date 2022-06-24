import pageWrapper from './body-wrapper';
import ElementNew from './class-html-element';

const categoryCards = new ElementNew(pageWrapper.element.children[1], 'div', [['main-category'], ['category']]);
categoryCards
  .createElem();

new ElementNew(categoryCards.element, 'h1', 'category__h1', 'english kid'.toUpperCase())
  .createElem();
const categoryWrapper = new ElementNew(categoryCards.element, 'div', 'category__wrapper');
categoryWrapper
  .createElem();

for (let i = 0; i < 9; i += 1) {
  fetch('../jsons/categories.json')
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      new ElementNew(categoryWrapper.element, 'div', ['category__item', `category__item-${data[i].name}`])
        .createElem();
    });
}

export {};
