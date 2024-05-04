// singleton
// Object.create

// object literals
const mySym = Symbol("key1") //this is how you create symbols.


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",//if you want to use symbols in an object you should use it within []
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

//by  deafault the keys will be taken as strings thats why you can also acces keys using array indexing like object["key"].
// you can also access the object's keys using . operator

// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])
// console.log(JsUser[mySym])   // to access symbols which is in an object.

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser)
//if you freeze an object which means you cant change that object.

JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());