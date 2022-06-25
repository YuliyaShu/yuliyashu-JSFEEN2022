import pageWrapper from './body-wrapper';
import createCardPageTrain from './page-cards';
import textToSpeech from './text-to-speech';

const categoryItem = document.querySelector('.category__wrapper');
categoryItem.addEventListener(('click'), (event) => {
  const categoryClicked = event.path[1].children[1].innerText.toLowerCase();
  console.log(pageWrapper);
  pageWrapper.element.children[1].innerHTML = '';
  createCardPageTrain(categoryClicked);

  const cardItem = document.querySelector('.card-train__wrapper');
  console.log(cardItem);
  cardItem.addEventListener(('click'), (eventCard) => {
    const cardClicked = eventCard.path[1].children[1].innerText.toLowerCase();
    textToSpeech(cardClicked);
  });
});
