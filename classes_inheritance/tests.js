import Builder from "./Parent_Class/Builder.js";
import IntBuilder from "./Child_Classes/IntBuilder.js";
import StringBuilder from "./Child_Classes/StringBuilder.js";

console.log('\nTests ES6')
console.log('random method test -> ' + IntBuilder.random(10, 100));
let intBuilder = new IntBuilder(10);  // 10
console.log('IntBuilder chain of methods test -> ' + 
intBuilder
  .plus(2, 3, 2)              // 17;
  .minus(1, 2)                // 14;
  .multiply(2)                // 28;
  .divide(4)                  // 7;
  .mod(3)                     // 1;
  .get());                    // -> 1;

console.log(`\nintBuilder instanceof Builder -> ${intBuilder instanceof Builder}`);
console.log(`intBuilder instanceof IntBuilder -> ${intBuilder instanceof IntBuilder}`);


console.log('\nTests ES5')
let strBuilder = new StringBuilder('Hello'); // 'Hello';
console.log('StringBuilder chain of methods test -> ' + 
strBuilder
  .plus(' all', '!')                         // 'Hello all!'
  .minus(4)                                  // 'Hello '
  .multiply(3)                               // 'Hello Hello Hello '
  .divide(4)                                 // 'Hell';
  .remove('l')                               // 'He';
  .sub(1,1)                                  // 'e';
  .get());                                    // -> 'e';
  
  console.log(`\nstrBuilder instanceof Builder -> ${strBuilder instanceof Builder}`);
  console.log(`strBuilder instanceof StringBuilder -> ${strBuilder instanceof StringBuilder}`);