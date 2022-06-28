function playMode() {
  const startButton = document.querySelector('.card-play__begin-button');
  console.log(startButton);
  startButton.addEventListener('click', () => {
    const nameOfGameCategory = document.querySelector('.card-train__h1').textContent.toLowerCase();
    fetch(`./assets/jsons/${nameOfGameCategory}.json`)
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  });
}

export default playMode;
