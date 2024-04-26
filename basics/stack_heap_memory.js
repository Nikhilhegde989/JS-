//all primitive data types are stored in stack that is call by value or copy by value
// all non primitive data type values are stored in heap
//i.e call by reference

let username1 = "Nikhil"
let username2 = username1
username2 = "Hegde"
console.log(username1)
console.log(username2)



let userOne = {
    name :"Nikhil",
    email :"nikhil@gmail.com" 
}

let userTwo = userOne
userTwo.email = "user2@gmail.com"

console.log(userOne.email)
console.log(userTwo.email)