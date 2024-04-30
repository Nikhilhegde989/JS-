const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) //this insertes the dc_heros as a single element in the first array

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros) //this insertes the individual elements of the second array into the first array.
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros]
//its called spread operator. it will also work as concat but you can insert as many arrays you want. in concat its only 2. output will be a single array with individual elements
// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
//flat is used to make a single  array using nested arrays. you have to pass depth as paramater that is how complex/nested is the array. or you can simply use infinity.

// const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

// const real_another_array = another_array.flat(1)
// console.log(real_another_array) //[1, 2, 3, 4, 5, 6, 7, 6, 7, Array(2)]


console.log(real_another_array);



console.log(Array.isArray("Hitesh"))
console.log(Array.from("Hitesh"))//it will create a array with individual letters as each elements.
console.log(Array.from({name: "hitesh"})) // interesting
//it will create empty array because its a object and we have to specify whether to create array using keys or  values, else it will give a empty array.

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));
//it will convert all the values into an array/