import { pageWrapper } from './body-wrapper';
import Card from './class-card';
import ElementNew from './class-html-element';

function createCategoryPage() {
  const categoryCards = new ElementNew(pageWrapper.element.children[1], 'div', [['main-category'], ['category']]);
  categoryCards
    .createElem();

  new ElementNew(categoryCards.element, 'h1', 'category__h1', 'english kid'.toUpperCase())
    .createElem();
  const categoryWrapper = new ElementNew(categoryCards.element, 'div', 'category__wrapper');
  categoryWrapper
    .createElem();

  fetch('./assets/jsons/categories.json')
    .then((response) => response.json())
    .then((data) => {
      for (let i = 0; i < 8; i += 1) {
        const arrOfKeys = Object.keys(data);
        const categoryItem = new ElementNew(categoryWrapper.element, 'div', ['category__item', `category__item-${arrOfKeys[i]}`]);
        categoryItem.createElem();
        new Card(categoryItem.element, `${arrOfKeys[i]}`, 'categories', 'category__item-img').createCardImg('category image');
        new Card(categoryItem.element, `${arrOfKeys[i]}`, 'categories', 'category__item-name').createCardName();
      }
    });
}

createCategoryPage();

export default createCategoryPage;
