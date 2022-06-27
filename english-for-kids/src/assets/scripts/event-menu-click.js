import { pageWrapper } from './body-wrapper';
import createCardPageTrain from './page-cards';
import textToSpeech from './text-to-speech';

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
        createCardPageTrain(menuClicked1);
      } else {
        const menuClicked2 = eventMenu.target.parentElement.innerText.toLowerCase();
        pageWrapper.element.children[1].innerHTML = '';
        toggle();
        createCardPageTrain(menuClicked2);
      }

      const cardItem = document.querySelector('.card-train__wrapper');
      cardItem.addEventListener(('click'), (eventCard) => {
        if (eventCard.target === cardItem[i]) {
          const cardClicked1 = eventCard.target.parentElement.innerText.toLowerCase();
          textToSpeech(cardClicked1);
        } else {
          const cardClicked2 = eventCard.target.parentElement.innerText.toLowerCase();
          textToSpeech(cardClicked2);
        }
      });
    });
  }
}, 300);
