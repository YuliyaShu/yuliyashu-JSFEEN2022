import { pageWrapper } from './body-wrapper';
import click from './event-card-click';
import playMode from './event-game';
import createCardPagePlay from './page-cards-play';
import createCardPageTrain from './page-cards-train';

const headerMenu = document.querySelector('.header__menu');
function toggle() {
  document.querySelector('html').classList.toggle('open');
  document.querySelector('.page__burger').classList.toggle('overlay');
  headerMenu.classList.toggle('open');
  document.querySelector('.header__burger').classList.toggle('open');
}

headerMenu.addEventListener(('click'), toggle);

document.querySelector('.page__burger').addEventListener(('click'), toggle);

setTimeout(() => {
  const burgerMenuItems = document.querySelectorAll('.burger__menu-item');
  for (let i = 0; i < burgerMenuItems.length; i += 1) {
    burgerMenuItems[i].addEventListener(('click'), (eventMenu) => {
      if (eventMenu.target === burgerMenuItems[i]) {
        const menuClicked1 = eventMenu.target.innerText.toLowerCase();
        pageWrapper.element.children[1].innerHTML = '';
        toggle();
        if (!document.querySelector('.switch__input').checked) {
          createCardPageTrain(menuClicked1);
        } else {
          createCardPagePlay(menuClicked1);
        }
      } else {
        const menuClicked2 = eventMenu.target.parentElement.innerText.toLowerCase();
        pageWrapper.element.children[1].innerHTML = '';
        toggle();
        if (!document.querySelector('.switch__input').checked) {
          createCardPageTrain(menuClicked2);
          setTimeout(() => {
            click();
          }, 100);
        } else {
          createCardPagePlay(menuClicked2);
          setTimeout(() => {
            playMode();
          }, 100);
        }
      }
    });
  }
}, 100);

export {};
