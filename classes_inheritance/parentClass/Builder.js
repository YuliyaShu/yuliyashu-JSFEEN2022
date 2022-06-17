class Builder {
  constructor(value) {
    this.value = value;
  }

  plus() {
    this.value = Object.values(arguments).reduce((res, unit) => res + unit, this.value);
    return this;
  }

  minus() {
    return this;
  }

  multiply() {
    return this;
  }

  divide() {
    return this;
  }

  get() {
    return this.value;
  }
}

export default Builder;