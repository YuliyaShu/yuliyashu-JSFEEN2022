import { pageWrapper } from './body-wrapper';
import createCardPageTrain from './page-cards-train';
import click from './event-card-click';
import createCardPagePlay from './page-cards-play';
import { playMode } from './event-game-start';

setTimeout(() => {
  const categoryItems = document.querySelectorAll('.category__item');
  for (let i = 0; i < categoryItems.length; i += 1) {
    categoryItems[i].addEventListener(('click'), (event) => {
      if (event.target === categoryItems[i]) {
        const categoryClicked1 = event.target.innerText.toLowerCase();
        pageWrapper.element.children[1].innerHTML = '';
        if (!document.querySelector('.switch__input').checked) {
          createCardPageTrain(categoryClicked1);
        } else {
          createCardPagePlay(categoryClicked1);
        }
      } else {
        const categoryClicked2 = event.target.parentElement.innerText.toLowerCase();
        pageWrapper.element.children[1].innerHTML = '';
        if (!document.querySelector('.switch__input').checked) {
          createCardPageTrain(categoryClicked2);
          setTimeout(() => {
            click();
          }, 100);
        } else {
          createCardPagePlay(categoryClicked2);
          setTimeout(() => {
            playMode();
          }, 100);
        }
      }
    });
  }
}, 100);

export {};
