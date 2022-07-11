import Card from '../classes/class-card';
import ElementNew from '../classes/class-html-element';
import eventMenuClick from '../events/event-menu-click';

const headerBurger = document.querySelector('.header__burger');
headerBurger.classList.add('burger');

const burgerLogo = new ElementNew(headerBurger, 'div', ['burger__logo', 'open']);
burgerLogo
  .createElem();
new ElementNew(burgerLogo.element, 'a', 'burger__logo-name', 'ENGLISH KID', [['href', 'https://yuliyashu-english-for-kids.netlify.app/']])
  .createElem();

const burgerMenu = new ElementNew(headerBurger, 'div', ['burger__menu', 'open']);
burgerMenu
  .createElem();

fetch('./assets/jsons/categories.json')
  .then((response) => response.json())
  .then((data) => {
    for (let i = 0; i < Object.keys(data).length; i += 1) {
      const arrOfValues = Object.values(data);
      const menuItem = new ElementNew(burgerMenu.element, 'div', ['burger__menu-item']);
      menuItem.createElem();
      new Card(menuItem.element)
        .addImg(arrOfValues[i].url, 'burger__menu-item-img', arrOfValues[i].name)
        .addName(arrOfValues[i].name.toUpperCase(), 'burger__menu-item-name');
    }
    eventMenuClick();
  });

export {};
