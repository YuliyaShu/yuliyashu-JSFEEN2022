import Card from './class-card';
import ElementNew from './class-html-element';

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
      const arrOfKeys = Object.keys(data);
      const menuItem = new ElementNew(burgerMenu.element, 'div', ['burger__menu-item']);
      menuItem.createElem();
      new Card(menuItem.element, `${arrOfKeys[i]}`, 'categories', 'burger__menu-item-img').createCardImg('category image');
      new Card(menuItem.element, `${arrOfKeys[i]}`, 'categories', 'burger__menu-item-name').createCardName();
    }
  });

export {};
