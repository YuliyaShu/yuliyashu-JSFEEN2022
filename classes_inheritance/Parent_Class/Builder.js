class Builder {
  constructor(value) {
    this.value = value;
    console.log(this.value);
  }

  plus() {
    this.value = Object.values(arguments).reduce((res, unit) => res + unit, this.value);
    console.log(this.value);
    return this;
  }

  minus() {
    console.log(this.value);
    return this;
  }

  multiply() {
    console.log(this.value);
    return this;
  }

  divide() {
    console.log(this.value);
    return this;
  }

  get() {
    console.log('-> ' + this.value)
    return this.value;
  }
}

export default Builder;