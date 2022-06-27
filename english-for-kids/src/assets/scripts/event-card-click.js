import { pageWrapper } from './body-wrapper';
import createCardPageTrain from './page-cards';
import textToSpeech from './text-to-speech';

setTimeout(() => {
  const categoryItems = document.querySelectorAll('.category__item');
  for (let i = 0; i < categoryItems.length; i += 1) {
    categoryItems[i].addEventListener(('click'), (event) => {
      const categoryClicked = event.target.parentElement.innerText.toLowerCase();
      pageWrapper.element.children[1].innerHTML = '';
      createCardPageTrain(categoryClicked);

      const cardItem = document.querySelector('.card-train__wrapper');
      cardItem.addEventListener(('click'), (eventCard) => {
        const cardClicked = eventCard.target.parentElement.innerText.toLowerCase();
        textToSpeech(cardClicked);
      });
    });
  }
}, 300);
