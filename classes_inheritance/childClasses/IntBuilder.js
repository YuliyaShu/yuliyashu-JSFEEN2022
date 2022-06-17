import Builder from "../parentClass/Builder.js";

class IntBuilder extends Builder {

  plus(...n) {
    for (let param of arguments) {
      if  (!Number.isInteger(param)) { 
        throw new Error('IntBuilder.plus() method: parameter should be integer');
      }
    }
    return super.plus(...n);
  }
  
  mod(n) {
    if (!Number.isInteger(n) || n <= 0) {
      throw new Error('IntBuilder.mod() method: parameter should be integer and > 0');
    }
   this.value = this.value % n;
   return this;
  }

  minus() {
    for (let param of arguments) {
      if  (!Number.isInteger(param)) {
        throw new Error('IntBuilder.minus() method: parameter should be integer');
      }
    }
    this.value = Object.values(arguments).reduce((res, numMinus) => res - numMinus, this.value);
    return this;
  }

  multiply(n) {
    if (!Number.isInteger(n) || n <= 0) {
      throw new Error('IntBuilder.multiply() method: parameter should be integer and > 0');
    }
    this.value = n * this.value;
    return this;
  }

  divide(n) {
    if (!Number.isInteger(n) || n <= 0) {
      throw new Error('IntBuilder.divide() method: parameter should be integer and > 0');
    }
    this.value = Math.floor(this.value / n);
    return this;
  }

  static random(from, to) {
    if (!Number.isInteger(from) || from < 0
      ||!Number.isInteger(to) || to < 0) {
        throw new Error('IntBuilder.random() method: parameter(s) should be integers and >= 0');
      }
    if (to <= from) {
      throw new Error('IntBuilder.random() method: second parameter should be > than first parameter');
    }
    return Math.round(Math.random() * (to - from) + from);
  }
}

export default IntBuilder;
