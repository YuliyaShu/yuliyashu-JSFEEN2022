import { pageWrapper } from './body-wrapper';
import createCardPageTrain from './page-cards';
import textToSpeech from './text-to-speech';

setTimeout(() => {
  const categoryItems = document.querySelectorAll('.category__item');
  for (let i = 0; i < categoryItems.length; i += 1) {
    categoryItems[i].addEventListener(('click'), (event) => {
      if (event.target === categoryItems[i]) {
        const categoryClicked1 = event.target.innerText.toLowerCase();
        pageWrapper.element.children[1].innerHTML = '';
        createCardPageTrain(categoryClicked1);
      } else {
        const categoryClicked2 = event.target.parentElement.innerText.toLowerCase();
        pageWrapper.element.children[1].innerHTML = '';
        createCardPageTrain(categoryClicked2);
      }

      setTimeout(() => {
        const cardItem = document.querySelectorAll('.card-train__item');
        for (let j = 0; j < cardItem.length; j += 1) {
          cardItem[j].addEventListener(('click'), (eventCard) => {
            if (eventCard.target === cardItem[j]) {
              const cardClicked1 = eventCard.target.innerText.toLowerCase();
              textToSpeech(cardClicked1);
            } else {
              const cardClicked2 = eventCard.target.parentElement.innerText.toLowerCase();
              textToSpeech(cardClicked2);
            }
          });
        }
      }, 300);
    });
  }
}, 300);
