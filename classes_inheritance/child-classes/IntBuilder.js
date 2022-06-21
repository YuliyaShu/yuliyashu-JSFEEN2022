import Builder from '../Builder.js';

class IntBuilder extends Builder {
  constructor(value = 0) {
    if (!Number.isInteger(value)) {
      throw new Error('Parameter should be integer');
    }
    super(value);
  }

  plus(...numbers) {
    this.value = numbers.reduce((res, unit) => {
      if (!Number.isInteger(unit)) {
        throw new Error('IntBuilder.plus() method: parameter should be integer');
      } else {
        return res + unit;
      }
    }, this.value);
    return this;
  }

  mod(num) {
    if (!Number.isInteger(num) || num === 0) {
      throw new Error('IntBuilder.mod() method: parameter should be integer and not 0');
    }
    this.value %= num;
    return this;
  }

  minus(...numbers) {
    this.value = numbers.reduce((res, unit) => {
      if (!Number.isInteger(unit)) {
        throw new Error('IntBuilder.minus() method: parameter should be integer');
      } else {
        return res - unit;
      }
    }, this.value);
    return this;
  }

  multiply(num) {
    if (!Number.isInteger(num)) {
      throw new Error('IntBuilder.multiply() method: parameter should be integer');
    }
    this.value *= num;
    return this;
  }

  divide(num) {
    if (!Number.isInteger(num) || num === 0) {
      throw new Error('IntBuilder.divide() method: parameter should be integer and not 0');
    }
    this.value = Math.floor(this.value / num);
    return this;
  }

  static random(from, to) {
    if (!Number.isInteger(from) || !Number.isInteger(to)) {
      throw new Error('IntBuilder.random() method: parameter(s) should be integers');
    }
    if (to <= from) {
      throw new Error('IntBuilder.random() method: second parameter should be > than first parameter');
    }
    return Math.round(Math.random() * (to - from) + from);
  }

  get() {
    return this.value;
  }
}

export default IntBuilder;
