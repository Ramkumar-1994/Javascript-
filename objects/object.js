// Object literals
const mySym=Symbol("key1")
console.log(typeof mySym)
const jsUser={
  name:"hitesh",
  "full name":"hitesh choudary",
  age:25,
  [mySym]:"mykey1",
  gender:"Male",
  location:"Jaipur",
  email:"hitesh@gmail.com",
  isLoggedIn:false,
  lastLoginDays:["Monday","Saturday"]
}
console.log(jsUser.name)
console.log(jsUser.age)
console.log(typeof jsUser[mySym])
console.log(jsUser["gender"])
console.log(jsUser.lastLoginDays[0])
console.log(jsUser)
jsUser.email="hitesh@yahoo.com"
Object.freeze(jsUser)
jsUser.email="harish@gmail.com"
console.log(jsUser)
jsUser.greeting=function ()
{
  console.log("Hello Js User")
}

console.log(jsUser.greeting)
