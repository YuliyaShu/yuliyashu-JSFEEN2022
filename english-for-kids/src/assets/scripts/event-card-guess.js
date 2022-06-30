// import playModeContinue from './event-game-continue';
// import textToSpeech from './text-to-speech';

// function guessClick(name) {
//   const cardItem = localStorage.getItem('nameOfCards').split(',');
//   console.log(cardItem);
//   const startButton = document.querySelector('.card-play__begin-button');
//   for (let j = 0; j < cardItem.length; j += 1) {
//     cardItem[j].addEventListener(('click'), (eventCard) => {
//       const cardClick = (eventCard.target === cardItem[j])
//         ? eventCard.target.children[1].innerText.toLowerCase()
//         : eventCard.target.parentElement.children[1].innerText.toLowerCase();
//       if (name === cardClick) {
//         textToSpeech('super');
//         startButton.textContent = 'START';
//         cardItem[j].classList.add('card-play__item-inactive');
//         playModeContinue(name);
//       }
//     });
//   }
// }

// export default guessClick;
