class Builder {
  constructor(value) {
    this.value = value;
  }

  plus() {
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