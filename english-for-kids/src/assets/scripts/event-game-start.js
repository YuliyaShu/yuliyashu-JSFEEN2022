/* eslint-disable no-use-before-define */
// import guessClick from './event-card-guess';
import { pageWrapper } from './body-wrapper';
import { createFinishPageFailed, createFinishPageSuccess } from './page-game-end';
import textToSpeech from './text-to-speech';

function startClick() {
  const startButton = document.querySelector('.card-play__begin-button');
  if (!startButton) {
    const continueButton = document.querySelector('.card-play__continue-button');
    continueButton.addEventListener('click', () => {
      const getSound = localStorage.getItem('savedSound');
      console.log(getSound);
      textToSpeech(getSound);
    });
  } else {
    startButton.classList.add('card-play__continue-button');
    startButton.classList.remove('card-play__begin-button');
    console.log('start');
    const nameOfGameCategory = document.querySelector('.card-train__h1').textContent.toLowerCase();
    fetch(`./assets/jsons/${nameOfGameCategory}.json`)
      .then((response) => response.json())
      .then((data) => {
        const nameOfCards = Object.keys(data);
        localStorage.setItem('nameOfCards', nameOfCards);
        if (startButton.textContent === 'START') {
          const random = Math.floor(Math.random() * nameOfCards.length);
          console.log(nameOfCards[random]);
          textToSpeech(nameOfCards[random]);
          localStorage.setItem('savedSound', nameOfCards[random]);
          startButton.textContent = 'REPEAT';
          guessClick(nameOfCards[random]);
        } else if (startButton.textContent === 'REPEAT') {
          const getSound = localStorage.getItem('savedSound');
          console.log(localStorage.getItem('savedSound'));
          console.log(getSound);
          textToSpeech(getSound);
          guessClick(getSound);
        }
      });
  }
}

function playMode() {
  const startButton = document.querySelector('.card-play__begin-button');
  startButton.addEventListener('click', startClick);
}

function click(eventCard) {
  const continueButton = document.querySelector('.card-play__continue-button');
  const name1 = localStorage.getItem('name');
  console.log(name1);
  const cardClick = (eventCard.target.tagName.toLowerCase() !== 'img')
    ? eventCard.target.children[1].innerText.toLowerCase()
    : eventCard.target.parentElement.children[1].innerText.toLowerCase();
  const cardItem = (eventCard.target.tagName.toLowerCase() !== 'img')
    ? eventCard.target
    : eventCard.target.parentElement;
  console.log(cardClick);
  console.log(name1 === cardClick);
  if (name1 === cardClick) {
    console.log('m here');
    textToSpeech('yes');
    continueButton.textContent = 'START';
    cardItem.classList.add('card-play__item-inactive');
    cardItem.classList.remove('card-play__item');
    let nameSuccess = +localStorage.getItem('countOfSuccess');
    nameSuccess += 1;
    localStorage.setItem('countOfSuccess', nameSuccess);
    console.log(name1);
    playModeContinue(name1);
  } else {
    const currentCountOfFailed = +localStorage.getItem('countOfFailed');
    const newCountOfFailed = currentCountOfFailed + 1;
    localStorage.setItem('countOfFailed', newCountOfFailed);
    console.log(newCountOfFailed);
    textToSpeech('no');
    // guessClick(name);
  }
  // lse {
  //   const currentCountOfFailed = localStorage.getItem('countOfFailed');
  //   const newCountOfFailed = currentCountOfFailed + 1;
  //   localStorage.setItem('countOfFailed', newCountOfFailed);
  //   startButton.textContent = 'START';
  //   textToSpeech('no');
  // }
}

function guessClick(name) {
  console.log(name);
  localStorage.setItem('name', name);
  const cardPlayWrapper = document.querySelector('.card-play__wrapper');
  // const cardPlayItems = document.querySelectorAll('.card-play__item');

  cardPlayWrapper.addEventListener('click', click);
}

function playModeContinue(nameIncome) {
  const nameOfCardsContinue = localStorage.getItem('nameOfCards').split(',');
  console.log(nameOfCardsContinue);
  if (nameOfCardsContinue.includes(nameIncome)) {
    nameOfCardsContinue.splice(nameOfCardsContinue.indexOf(nameIncome), 1);
    localStorage.setItem('nameOfCards', nameOfCardsContinue);
    console.log(nameOfCardsContinue);
  }
  if (!nameOfCardsContinue.length) {
    const cardItemInactive = document.querySelectorAll('.card-play__item-inactive');
    for (let h = 0; h < cardItemInactive.length; h += 1) {
      cardItemInactive[h].classList.remove('card-play__item-inactive');
      cardItemInactive[h].classList.add('card-play__item');
    }
    const continueButton = document.querySelector('.card-play__continue-button');
    continueButton.classList.remove('card-play__continue-button');
    continueButton.classList.add('card-play__begin-button');
    pageWrapper.element.children[1].innerHTML = '';
    if (localStorage.getItem('countOfFailed') > 0) {
      textToSpeech('You can do it better!');
      localStorage.setItem('countOfFailed', 0);
      createFinishPageFailed();
    } else {
      textToSpeech('You have finished! Wonderful!');
      localStorage.setItem('countOfFailed', 0);
      createFinishPageSuccess();
    }
  } else {
    const continueButton = document.querySelector('.card-play__continue-button');
    if (continueButton.textContent === 'START') {
      const random = Math.floor(Math.random() * nameOfCardsContinue.length);
      console.log(nameOfCardsContinue[random]);
      textToSpeech(nameOfCardsContinue[random]);
      localStorage.setItem('savedSound', nameOfCardsContinue[random]);
      continueButton.textContent = 'REPEAT';
      guessClick(nameOfCardsContinue[random]);
    }
  }
}

export { playMode, guessClick, playModeContinue };
