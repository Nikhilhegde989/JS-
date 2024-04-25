const accountId = 12345
var accountName = "Nikhil"
let accountMail = "nikhil@gmail.com"
accountPlace = "Sirsi"
let accountState //undefined

// accountId =  12 its a const so you cannot modify the value of it

//dont use var because it causes issues in functional & block scope 
//use let only for variables

// you can directly assign  a varibale without using const or let or var. but its not a good practice.


console.log(accountId)
console.log(accountName)

console.table([accountId,accountMail,accountName,accountPlace,accountState])

//console.table([]) will print all the varible values in a tabular format.
