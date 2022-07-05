import ElementNew from '../classes/class-html-element';
import { pageWrapper } from '../main-elements/body-wrapper';

function createStatPage() {
  document.querySelector('.header__switch').innerHTML = '';
  const mainWrapper = pageWrapper.element.children[1];
  new ElementNew(mainWrapper, 'h1', ['category__h1', 'stat__h1'], 'statistics'.toUpperCase())
    .createElem();
  const statButtons = new ElementNew(mainWrapper, 'div', 'main__stat-buttons');
  statButtons
    .createElem();
  new ElementNew(statButtons.element, 'button', 'main__stat-buttons-train', 'TRAIN MISTAKES')
    .createElem();
  new ElementNew(statButtons.element, 'button', 'main__stat-buttons-clean', 'CLEAN STATISTICS')
    .createElem();
  const cardCards = new ElementNew(mainWrapper, 'div', [['main__stat-wrapper'], ['stat']]);
  cardCards
    .createElem();
  const namesOfColumns = [
    'Category',
    'Word',
    'Translation',
    'Total clicks',
    'Correct',
    'Mistaken',
    '% of correct',
  ];
  namesOfColumns.forEach((columnName) => new ElementNew(cardCards.element, 'div', 'stat__column-name', columnName)
    .createElem());

  fetch('./assets/jsons/categories.json')
    .then((response) => response.json())
    .then((dataCategory) => {
      Object.keys(dataCategory).forEach((category) => {
        fetch(`./assets/jsons/${category}.json`)
          .then((response) => response.json())
          .then((dataCard) => {
            Object.keys(dataCard).forEach((card) => {
              console.log(dataCard[card].translate);
              const correct = +localStorage.getItem(`${card}Correct`);
              const mistaken = +localStorage.getItem(`${card}Mistake`);
              const total = correct + mistaken;
              const percent = (total) ? (correct / total) * 100 : '-';
              new ElementNew(cardCards.element, 'div', ['stat__data', `stat__category-${category}`], `${category}`)
                .createElem();
              new ElementNew(cardCards.element, 'div', ['stat__data', `stat__word-${card}`], `${card}`)
                .createElem();
              new ElementNew(cardCards.element, 'div', ['stat__data', `stat__translate-${card}`], `${dataCard[card].translate}`)
                .createElem();
              new ElementNew(cardCards.element, 'div', ['stat__data', `stat__total-${card}`], `${total}`)
                .createElem();
              new ElementNew(cardCards.element, 'div', ['stat__data', `stat__correct-${card}`], `${correct}`)
                .createElem();
              new ElementNew(cardCards.element, 'div', ['stat__data', `stat__mistaken-${card}`], `${mistaken}`)
                .createElem();
              new ElementNew(cardCards.element, 'div', ['stat__data', `stat__percent-${card}`], `${percent}`)
                .createElem();
            });
          });
      });
    });
}

export default createStatPage;
