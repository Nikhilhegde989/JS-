const score = 400
// console.log(score);

const balance = new Number(100)
// console.log(balance);
// in Number format you will get some extra methods

// console.log(balance.toString().length);
// console.log(balance.toFixed(1));

const otherNumber = 123.8966
console.log(otherNumber.toPrecision(6))
console.log(otherNumber.toPrecision(5))
console.log(otherNumber.toPrecision(4));
console.log(otherNumber.toPrecision(3));
console.log(otherNumber.toPrecision(2));
//precision means it gives importance only to the specific number of digits irrespective of decimal place

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN'));
//localeString means it adds , for better readability

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math);
// console.log(Math.abs(-4)); //4
// console.log(Math.round(4.6)); 
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9));
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4, 3, 6, 8));

// console.log(Math.random()); //including 0 & 1 
// console.log((Math.random()*10) + 1); //+1 to avoid 0
// console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)

//formula to get the random number in desired range.