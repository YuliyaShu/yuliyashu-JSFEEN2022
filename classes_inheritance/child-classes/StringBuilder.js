import Builder from "../Builder.js";

function StringBuilder(value = '') {
  this.value = value;
}
StringBuilder.prototype = Object.create(Builder.prototype);
StringBuilder.prototype.constructor = StringBuilder;


StringBuilder.prototype.plus = function(...strings) {
  this.value = strings.reduce((res, unit) => {
    if (typeof unit !== 'string') {
      throw new Error('StringBuilder.plus() method: parameter should be string');
    } else {
      return res + unit;
    }
  }, this.value);
  return this;
}

StringBuilder.prototype.remove = function(str) {
  if (typeof str !== 'string') {
    throw new Error('StringBuilder.remove() method: parameter should be type of string');
  }
  this.value = this.value.split(str).join('');
  return this;
}

StringBuilder.prototype.sub = function(fromNum, num) {
  if (!Number.isInteger(fromNum) || fromNum < 0
   || !Number.isInteger(num) || num < 0) {
    throw new Error('StringBuilder.sub() method: parameter(s) should be integers and >= 0');
   }
  if (fromNum >= this.value.length) {
    throw new Error(`StringBuilder.sub() method: first parameter should be < than ${this.value.length} - stored value length`);
  }
  this.value = this.value.substring(fromNum, fromNum + num);
  return this;
}

StringBuilder.prototype.minus = function(num){
  if (!Number.isInteger(num) || num < 0) {
    throw new Error('StringBuilder.minus() method:parameter should be integer and >= 0');
  }
  this.value = this.value.substring(0, this.value.length - num);
  return this;
}

StringBuilder.prototype.multiply = function(num) {
  if (!Number.isInteger(num) || num <= 0) {
    throw new Error('StringBuilder.multiply() method: parameter should be integer and > 0');
  }
  let str = '';
  for (let i =0; i < num; i++) {
    str += this.value;
  }
  this.value = str;
  return this;
}

StringBuilder.prototype.divide = function(num) {
  if (!Number.isInteger(num) || num <= 0) {
    throw new Error('StringBuilder.divide() method:parameter should be integer and > 0');
  }
  this.value = this.value.substring(0, Math.floor(this.value.length / num));
  return this;
}

export default StringBuilder;