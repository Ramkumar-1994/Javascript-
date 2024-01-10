// Defining variables with const,let,var
// let,const introduced in ECMA

const accountId=14463
console.log(accountId)
let accountEmail="ram@gmail.com"
console.log(accountEmail)
var accountPassword="12345"
console.log(accountPassword)
let accountCity="Jaipur"
console.log(accountCity)

// accountId=12546 //not allowed to change variable in const
accountEmail="rm@gmail.com"

console.log(accountEmail)
console.log(accountId,accountEmail,accountPassword,accountCity)

console.log(Math.ceil(Math.random()*10));
const min=10;
const max=20;

console.log(Math.floor(Math.random()*(max-min+1))+min)
