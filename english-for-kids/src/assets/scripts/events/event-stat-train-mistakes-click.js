import createMistakesPageTrain from '../pages/page-mistakes-train';
import click from './event-card-click';

function trainMistakesStat() {
  document.querySelector('.main__stat-buttons-train')
    .addEventListener('click', () => {
      createMistakesPageTrain();
      setTimeout(() => {
        click();
      }, 100);
    });
}

export default trainMistakesStat;
