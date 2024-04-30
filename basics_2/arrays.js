/* shallow copy means 2 arrays (original and copy), if
you change the array using any one of the array index, the original array will be modified 

deep copy is like creating independent array
*/


// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3)

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3)
console.log("C ", myArr);
console.log(myn2);


const array = [1, 2, 3, 4, 5];
array.splice(2, 0, 6, 7);
console.log(array); // [1, 2, 6, 7, 3, 4, 5]


//differences between slice and splice
/* slice, it doesnt changes the original array, it will return a new object which will be the part of that array. the 2nd argument/parameter that is ending point is excluded.
in splice, the original array will  be changed. or like it will be splitted.and the ending index is also included.*/


// const array = [1, 2, 3, 4, 5];
// const newArray = array.slice(1, 4); // Includes elements at indices 1, 2, and 3, but not 4
// console.log(newArray); // [2, 3, 4]


// const array = [1, 2, 3, 4, 5];
// array.splice(1, 2); // Removes elements starting from index 1 (inclusive) and removes 2 elements
// console.log(array); // [1, 4, 5]
