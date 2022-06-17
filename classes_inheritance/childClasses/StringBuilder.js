import Builder from "../parentClass/Builder.js";

function StringBuilder(value = '') {
  this.value = value;
}
StringBuilder.prototype = Object.create(Builder.prototype);
StringBuilder.prototype.constructor = StringBuilder;


StringBuilder.prototype.plus = function(...str) {
  console.log
  if (str.forEach((strUnit) => typeof strUnit !== 'string')) {
    throw new Error('StringBuilder.plus() method: parameters should be type of string');
  }
  this.value = Object.values(str).reduce((res, unit) => res + unit, this.value);
  return this;
}

StringBuilder.prototype.remove = function(str) {
  if (typeof str !== 'string') {
    throw new Error('StringBuilder.remove() method: parameter should be type of string');
  }
  this.value = this.value.split(str).join('');
  return this;
}

StringBuilder.prototype.sub = function(from, n) {
  if (!Number.isInteger(from) || from < 0
   || !Number.isInteger(n) || n < 0) {
    throw new Error('StringBuilder.sub() method: parameter(s) should be integers and >= 0');
   }
  if (from >= this.value.length) {
    throw new Error(`StringBuilder.sub() method: first parameter should be < than ${this.value.length} - stored value length`);
  }
  this.value = this.value.substring(from, from + n);
  return this;
}

StringBuilder.prototype.minus = function(n){
  if (!Number.isInteger(n) || n < 0) {
    throw new Error('StringBuilder.minus() method:parameter should be integer and >= 0');
  }
  this.value = this.value.substring(0, this.value.length - n);
  return this;
}

StringBuilder.prototype.multiply = function(n) {
  if (!Number.isInteger(n) || n <= 0) {
    throw new Error('StringBuilder.multiply() method: parameter should be integer and > 0');
  }
  let str = '';
  for (let i =0; i < n; i++) {
    str += this.value;
  }
  this.value = str;
  return this;
}

StringBuilder.prototype.divide = function(n) {
  if (!Number.isInteger(n) || n <= 0) {
    throw new Error('StringBuilder.divide() method:parameter should be integer and > 0');
  }
  this.value = this.value.substring(0, Math.floor(this.value.length / n));
  return this;
}

export default StringBuilder;