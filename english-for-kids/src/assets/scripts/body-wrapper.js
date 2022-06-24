import ElementNew from './class-html-element';

const page = document.querySelector('.page');
const pageWrapper = new ElementNew(page, 'div', 'page__wrapper');
pageWrapper.createElem();
const pageElements = ['header', 'main', 'footer'];
pageElements.forEach((e) => {
  new ElementNew(pageWrapper.element, e, [e, `page__${e}`])
    .createElem();
});

export default pageWrapper;
