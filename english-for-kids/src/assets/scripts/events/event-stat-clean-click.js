function cleanStat() {
  document.querySelector('.main__stat-buttons-clean')
    .addEventListener('click', () => {
      // eslint-disable-next-line no-alert
      if (window.confirm('Do you definitely want to clear the statistics?')) {
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
    });
}

export default cleanStat;
