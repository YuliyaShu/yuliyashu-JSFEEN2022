const { pageWrapper } = require('./body-wrapper');
const { default: ElementNew } = require('../classes/class-html-element');

const footerBlocks = new ElementNew(pageWrapper.element.children[2], 'div', 'footer__blocks');
footerBlocks.createElem();

const arrFooterLinks = [
  ['Inspired by storyset', 'https://www.freepik.com/author/stories'],
  ['YuliyaShu june 2022', 'https://github.com/YuliyaShu'],
  ['RSSchool', 'https://rs.school/'],
];
for (let i = 0; i < arrFooterLinks.length; i += 1) {
  new ElementNew(footerBlocks.element, 'a', 'footer__links', arrFooterLinks[i][0], [['href', arrFooterLinks[i][1]]]).createElem();
}
