
// task in README.md 


class Builder {
  storage = 0;
  constructor(int = 0) {
    this.int = int;
  }

  funcForStorage(expression) {
    this.storage = expression;
    this.int = this.storage;
    console.log( this.storage)
    return this;
  }

  plus() {
    return this.funcForStorage(Object.values(arguments).reduce((res, n) => res + n, (this.int)));
  }

  minus(n) {
    return (typeof this.int === 'number')
              ? this.funcForStorage(Object.values(arguments).reduce((res, n) => res - n, this.int))
              : this.funcForStorage(this.int.substring(0, this.int.length - n));
  }

  multiply(n) {
    return (typeof this.int === 'number')
              ? this.funcForStorage(n * this.int)
              : this.funcForStorage((() => {
                let arr = [];
                while (arr.length < n) {
                  arr.push(this.int);
                }
                return arr.join('');
              })());
  }

  divide(n) {
    return (typeof this.int === 'number')
              ? this.funcForStorage(Math.floor(this.int / n))
              : this.funcForStorage(this.int.substring(0, Math.floor(this.int.length / n)));
  }
  
  mod(n) {
    return (typeof this.int === 'number')
              ? this.funcForStorage(this.int % n)
              : this.funcForStorage(this.int = n);
  }

  get() {
    return this.funcForStorage(this.int);
  }

  remove(str) {
    return (typeof this.int === 'number')
              ? this.funcForStorage(+(this.int.toString().split(str.toString()).join('')))
              : this.funcForStorage(this.int.split(str).join(''));
  }

  sub(from, n) {
    return (typeof this.int === 'number')
              ? this.funcForStorage(+(this.int.toString().replace(from.toString(), n.toString())))
              : this.funcForStorage(this.int.substring(from, from + n));
  }

  static random(from, to) {
    return Math.round(Math.random() * (to - from) + from);
  }

  toString() {
    return this.storage;
  }
}

// ES6
class IntBuilder extends Builder {
  constructor(int = 0) {
    super(int);
  }
}

//ES5
function StringBuilder(int = '') {
  this.int = int;
}
StringBuilder.prototype = Object.create(Builder.prototype);
StringBuilder.prototype.constructor = StringBuilder;
StringBuilder.prototype.toString = function() {
  return this.storage;
}


//TESTS

console.log('\nTests ES6')
console.log(IntBuilder.random(10, 100));
let intBuilder = new IntBuilder(10); 
intBuilder
  .plus(2, 3, 2)              // 17;
  .minus(1, 2)                // 14;
  .multiply(2)                // 28;
  .divide(4)                  // 7;
  .mod(3)                     // 1;
  .get();                    // -> 1;
console.log('ES6 chain returns  --> ' + intBuilder)


console.log('\nTests ES5')
let strBuilder = new StringBuilder('Hello'); // 'Hello';
strBuilder
  .plus(' all', '!')                         // 'Hello all!'
  .minus(4)                                  // 'Hello '
  .multiply(3)                               // 'Hello Hello Hello '
  .divide(4)                                 // 'Hell';(strBuilder.remove('l'))                               // 'He';
  .sub(1,1)                                  // 'e';
  .get();                                    // -> 'e';
console.log('ES5 chain returns --> ' + strBuilder)