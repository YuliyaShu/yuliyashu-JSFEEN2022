function setStatsToLocalStorage() {
  fetch('./assets/jsons/categories.json')
    .then((response) => response.json())
    .then((dataCategory) => {
      Object.keys(dataCategory).forEach((category) => {
        fetch(`./assets/jsons/${category}.json`)
          .then((response) => response.json())
          .then((dataCard) => {
            Object.keys(dataCard).forEach((card) => {
              localStorage.setItem(`${card}Correct`, 0);
              localStorage.setItem(`${card}Mistake`, 0);
            });
          });
      });
    });
}

export default setStatsToLocalStorage;
