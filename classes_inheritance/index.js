
// task in README.md 


class Builder {
  storage = 0;
  constructor(int = 0) {
    this.int = int;
  }

  funcForStorage(expression) {
    this.storage = expression;
    this.int = this.storage;
    return this.storage;
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
StringBuilder.superclass = Builder.prototype;



//TESTS

console.log('\nTests ES6')
console.log(IntBuilder.random(10, 100));          // 42;
let intBuilder = new IntBuilder(10); // 10;
console.log(intBuilder.plus(2, 3, 2))                     // 17;
console.log(intBuilder.minus(1, 2))                       // 14;
console.log(intBuilder.multiply(2))                       // 28;
console.log(intBuilder.divide(4))                         // 7;
console.log(intBuilder.mod(3))                            // 1;
console.log(intBuilder.get());                            // -> 1;
console.log('additional tests')
console.log(intBuilder.plus(2, 104, 103))                 // 210;
console.log(intBuilder.remove(1))                         // 20;
console.log(intBuilder.sub(2, 5))                         // 50;


console.log('\nTests ES5')
let strBuilder = new StringBuilder('Hello'); // 'Hello';
console.log(strBuilder.plus(' all', '!'))                         // 'Hello all!'
console.log(strBuilder.minus(4))                                  // 'Hello '
console.log(strBuilder.multiply(3))                               // 'Hello Hello Hello '
console.log(strBuilder.divide(4))                                 // 'Hell';
console.log(strBuilder.remove('l'))                               // 'He';
console.log(strBuilder.sub(1,1))                                  // 'e';
console.log(strBuilder.get());                                    // -> 'e';
console.log('additional tests');
console.log(strBuilder.mod('Good work!'));                        // 'Good work!';