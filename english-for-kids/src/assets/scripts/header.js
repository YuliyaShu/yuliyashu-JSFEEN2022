import ElementNew from './class-html-element';
import { pageWrapper } from './body-wrapper';

const headerBlocks = new ElementNew(pageWrapper.element.children[0], 'div', 'header__blocks');
headerBlocks.createElem();

const headerElements = ['menu', 'burger', 'switch', 'stat'];
headerElements.forEach((e) => {
  new ElementNew(headerBlocks.element, 'div', `header__${e}`, null, [['id', e]])
    .createElem();
});
const headerMenu = document.querySelector('.header__menu');

for (let i = 1; i < 4; i += 1) {
  const line = new ElementNew(headerMenu, 'span', ['header__menu-line', 'line']);
  line
    .createElem();
  new ElementNew(line.element, 'hr', ['line__hr', `line__hr-${i}`])
    .createElem();
}

const headerSwitch = document.querySelector('.header__switch');
new ElementNew(headerSwitch, 'div', 'switch')
  .createElem();
const switchWrapper = new ElementNew(headerSwitch.children[0], 'label', 'switch__wrapper');
switchWrapper
  .createElem();
new ElementNew(switchWrapper.element, 'input', 'switch__input', null, [['type', 'checkbox']])
  .createElem();
new ElementNew(switchWrapper.element, 'span', ['switch__slider', 'switch__slider_round'])
  .createElem();
new ElementNew(switchWrapper.element, 'span', 'switch__mode', null, [['data-on', 'Play'], ['data-off', 'Train']])
  .createElem();

const headerStat = document.querySelector('.header__stat');
const linkStat = new ElementNew(headerStat, 'a', 'header__stat-link', null, [['href', 'https://yuliyashu-english-for-kids.netlify.app/pages/statistic/statistic.html']]);
linkStat
  .createElem();
new ElementNew(linkStat.element, 'img', 'header__stat-img', null, [['src', './assets/images/bar-chart.png'], ['alt', 'statistics']])
  .createElem();

export {};
