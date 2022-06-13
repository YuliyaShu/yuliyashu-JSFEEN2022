
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

  divide() {
    console.log(this.value);
    return this;
  }

  get() {
    console.log('-> ' + this.value)
    return this.value;
  }
}

// ES6
class IntBuilder extends Builder {

  plus(...n) {
    for (let param of arguments) {
      if  (Number.isInteger(param) === false) 
        throw new Error('IntBuilder.plus() method: parameter should be integer');
    }
    return super.plus(...n);
  }
  
  mod(n) {
    if (Number.isInteger(n) === false
     || n <= 0) 
     throw new Error('IntBuilder.mod() method: parameter should be integer and > 0');
   this.value = this.value % n;
   console.log(this.value);
   return this;
  }

  minus(...n) {
    for (let param of arguments) {
      if  (Number.isInteger(param) === false) 
      throw new Error('IntBuilder.minus() method: parameter should be integer');
    }
    this.value = Object.values(arguments).reduce((res, e) => res - e, this.value);
    return super.minus(...n);
  }

  multiply(n) {
    if (Number.isInteger(n) === false
     || n <= 0) 
     throw new Error('IntBuilder.multiply() method: parameter should be integer and > 0');
    this.value = n * this.value;
    return super.multiply(n);
  }

  divide(n) {
    if (Number.isInteger(n) === false
     || n <= 0) 
     throw new Error('IntBuilder.divide() method: parameter should be integer and > 0');
    this.value = Math.floor(this.value / n);
    return super.divide(n);;
  }

  static random(from, to) {
    if (Number.isInteger(from) === false
     || from < 0
     || Number.isInteger(to) === false
     || to < 0) 
     throw new Error('IntBuilder.random() method: parameter(s) should be integers and >= 0');
    if (to <= from)
      throw new Error('IntBuilder.random() method: second parameter should be > than first parameter')

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
  if (typeof str !== 'string') 
    throw new Error('StringBuilder.remove() method: parameter should be type of string');
  this.value = this.value.split(str).join('');
  console.log(this.value);
  return this;
}

StringBuilder.prototype.sub = function(from, n) {
  if (Number.isInteger(from) === false
   || from < 0
   || Number.isInteger(n) === false
   || n < 0) 
   throw new Error('StringBuilder.sub() method: parameter(s) should be integers and >= 0');
  if (from >= this.value.length) 
    throw new Error(`StringBuilder.sub() method: first parameter should be < than ${this.value.length} - stored value length`)
  this.value = this.value.substring(from, from + n);
  console.log(this.value);
  return this;
}

StringBuilder.prototype.minus = function(n){
  if (Number.isInteger(n) === false
   || n < 0) 
   throw new Error('StringBuilder.minus() method:parameter should be integer and >= 0');
  this.value = this.value.substring(0, this.value.length - n);
  console.log(this.value);
  return this;
}

StringBuilder.prototype.multiply = function(n) {
  if (Number.isInteger(n) === false
   || n <= 0) 
   throw new Error('StringBuilder.multiply() method: parameter should be integer and > 0');
  let str = '';
  for (let i =0; i < n; i++) {
       str += this.value;
    }
  this.value = str;
  console.log(this.value)
  return this;
}

StringBuilder.prototype.divide = function(n) {
  if (Number.isInteger(n) === false
   || n <= 0) 
   throw new Error('StringBuilder.divide() method:parameter should be integer and > 0');
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
  

