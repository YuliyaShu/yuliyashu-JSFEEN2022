class Builder {
  constructor(value) {
    this.value = value;
  }

  plus() {
    throw new Error('You have to implement the method plus!');
  }

  minus() {
    throw new Error('You have to implement the method minus!');
  }

  multiply() {
    throw new Error('You have to implement the method multiply!');
  }

  divide() {
    throw new Error('You have to implement the method divide!');
  }

  get() {
    return this.value;
  }
}

export default Builder;
