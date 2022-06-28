import ElementNew from './class-html-element';

class Card {
  constructor(parent, nameOfCategory = null, jsonName = null, className = null) {
    this.parent = parent;
    this.name = nameOfCategory;
    this.jsonName = jsonName;
    this.className = className;
  }

  createCardImg(altName) {
    fetch(`./assets/jsons/${this.jsonName}.json`)
      .then((response) => response.json())
      .then((data) => {
        const arrOfValues = Object.values(data);
        for (let i = 0; i < arrOfValues.length; i += 1) {
          if (arrOfValues[i].name === this.name) {
            new ElementNew(this.parent, 'img', this.className, null, [['src', `${arrOfValues[i].url}`], ['alt', altName]])
              .createElem();
            break;
          }
        }
      });
    return this;
  }

  createCardName() {
    fetch(`./assets/jsons/${this.jsonName}.json`)
      .then((response) => response.json())
      .then((data) => {
        const arrOfValues = Object.values(data);
        for (let i = 0; i < arrOfValues.length; i += 1) {
          if (arrOfValues[i].name === this.name) {
            new ElementNew(this.parent, 'p', this.className, this.name.toUpperCase())
              .createElem();
            break;
          }
        }
      });
    return this;
  }

  createCardRotate() {
    fetch(`./assets/jsons/${this.jsonName}.json`)
      .then((response) => response.json())
      .then((data) => {
        const arrOfValues = Object.values(data);
        for (let i = 0; i < arrOfValues.length; i += 1) {
          if (arrOfValues[i].name === this.name) {
            new ElementNew(this.parent, 'p', this.className, `${arrOfValues[i].translate}`)
              .createElem();
            break;
          }
        }
      });
    return this;
  }

  createCardRotateIcon() {
    fetch(`./assets/jsons/${this.jsonName}.json`)
      .then((response) => response.json())
      .then((data) => {
        const arrOfValues = Object.values(data);
        for (let i = 0; i < arrOfValues.length; i += 1) {
          if (arrOfValues[i].name === this.name) {
            new ElementNew(this.parent, 'img', 'card-train__item-rotate', `${this.jsonName}`, [['src', './assets/images/01icons8-synchronize-150.png'], ['alt', 'rotate icon']])
              .createElem();
            break;
          }
        }
      });
    return this;
  }
}

export default Card;
