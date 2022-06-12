
// task in README.md 


class Builder {
  constructor(value) {
    this.value = value;
    console.log(this.value);
  }

  plus(...n) {
    this.value = Object.values(arguments).reduce((res, n) => res + n, (this.value));
    console.log(this.value);
    return this;
  }

  minus(...n) {
    console.log(this.value);
    return this;
  }

  multiply() {
    console.log(this.value);
    return this;
  }

  divide(n) {
    console.log(this.value);
    return this;
  }

  get() {
    return this.value;
  }

  toString() {
    return this.value;
  }
}

// ES6
class IntBuilder extends Builder {
  
  mod(n) {
   this.value = this.value % n;
   console.log(this.value);
   return this;
  }

  minus(...n) {
    this.value = Object.values(arguments).reduce((res, e) => res - e, this.value);
    return super.minus();
  }

  multiply(n) {
    this.value = n * this.value;
    return super.multiply();
  }

  divide(n) {
    this.value = Math.floor(this.value / n);
    return super.divide();;
  }

  static random(from, to) {
    return Math.round(Math.random() * (to - from) + from);
  }
}


//ES5
function StringBuilder(value = '') {
  this.value = value;
  console.log(this.value);
}
StringBuilder.prototype = Object.create(Builder.prototype);
StringBuilder.prototype.constructor = StringBuilder;

StringBuilder.prototype.remove = function(str) {
  this.value = this.value.split(str).join('');
  console.log(this.value);
  return this;
}

StringBuilder.prototype.sub = function(from, n) {
  this.value = this.value.substring(from, from + n);
  console.log(this.value);
  return this;
}

StringBuilder.prototype.minus = function(n){
  this.value = this.value.substring(0, this.value.length - n);
  console.log(this.value);
  return this;
}

StringBuilder.prototype.multiply = function(n) {
  let str = '';
  for (let i =0; i < n; i++) {
       str += this.value;
    }
  this.value = str;
  console.log(this.value)
  return this;
}

StringBuilder.prototype.divide = function(n) {
  this.value = this.value.substring(0, Math.floor(this.value.length / n));
  console.log(this.value)
  return this;
}



//TESTS

console.log('\nTests ES6')
console.log(IntBuilder.random(10, 100));
let intBuilder = new IntBuilder(10);  // 10
intBuilder
  .plus(2, 3, 2)              // 17;
  .minus(1, 2)                // 14;
  .multiply(2)                // 28;
  .divide(4)                  // 7;
  .mod(3)                     // 1;
  .get();                    // -> 1;
console.log('-> ' + intBuilder)


console.log('\nTests ES5')
let strBuilder = new StringBuilder('Hello'); // 'Hello';
strBuilder
  .plus(' all', '!')                         // 'Hello all!'
  .minus(4)                                  // 'Hello '
  .multiply(3)                               // 'Hello Hello Hello '
  .divide(4)                                 // 'Hell';
  .remove('l')                               // 'He';
  .sub(1,1)                                  // 'e';
  .get();                                    // -> 'e';
console.log('-> ' + strBuilder)
  