// import guessClick from './event-card-guess';
// import textToSpeech from './text-to-speech';

// function playModeContinue(nameIncome) {
//   const nameOfCardsContinue = localStorage.getItem('nameOfCards').split(',');
//   console.log(nameOfCardsContinue);
//   console.log(nameIncome);
//   if (nameOfCardsContinue.includes(nameIncome)) {
//     const newNameOfCards = nameOfCardsContinue.
// splice(nameOfCardsContinue.indexOf(nameIncome), 1);
//     localStorage.setItem('nameOfCards', newNameOfCards);
//     console.log(newNameOfCards);
//     console.log(nameOfCardsContinue);
//   }
//   const startButton = document.querySelector('.card-play__begin-button');
//   if (startButton.textContent === 'START') {
//     const random = Math.floor(Math.random() * nameOfCardsContinue.length);
//     textToSpeech(nameOfCardsContinue[random]);
//     localStorage.setItem('savedSound', nameOfCardsContinue[random]);
//     startButton.textContent = 'REPEAT';
//     guessClick(nameOfCardsContinue[random]);
//   } else if (startButton.textContent === 'REPEAT') {
//     const getSound = localStorage.getItem('savedSound');
//     textToSpeech(getSound);
//     guessClick(getSound);
//   }
// }

// export default playModeContinue;
