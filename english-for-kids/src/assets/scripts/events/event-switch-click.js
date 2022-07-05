import { pageWrapper } from '../main-elements/body-wrapper';
import click from './event-card-click';
import { playMode } from './event-game-start';
import createCardPagePlay from '../pages/page-cards-play';
import createCardPageTrain from '../pages/page-cards-train';

const switchMode = document.querySelector('.switch__mode');
const switchInput = document.querySelector('.switch__input');

function switchClick() {
  const categoryName = (document.querySelector('.card-train__h1'))
    ? document.querySelector('.card-train__h1').textContent.toLowerCase()
    : document.querySelector('.category__h1').textContent.toLowerCase();
  if (categoryName !== 'english kid') {
    pageWrapper.element.children[1].innerHTML = '';
    if (switchInput.checked) {
      createCardPageTrain(categoryName);
      setTimeout(() => {
        click();
      }, 100);
    } else {
      createCardPagePlay(categoryName);
      playMode();
    }
  }
}
switchMode.addEventListener('click', switchClick);

export {};
