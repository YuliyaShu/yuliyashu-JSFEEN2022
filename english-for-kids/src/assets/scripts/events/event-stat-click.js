import setStatsToLocalStorage from '../main-elements/local-storage-stat';
import createStatPage from '../pages/page-stat';
import { pageWrapper } from '../main-elements/body-wrapper';

document
  .querySelector('.header__stat')
  .addEventListener('click', () => {
    setStatsToLocalStorage();
    pageWrapper.element.children[1].innerHTML = '';
    createStatPage();
  });
