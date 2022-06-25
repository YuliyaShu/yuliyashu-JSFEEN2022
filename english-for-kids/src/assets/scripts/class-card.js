import ElementNew from './class-html-element';

class Card {
  constructor(parent, nameOfCategory, jsonName, className) {
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
}

export default Card;
