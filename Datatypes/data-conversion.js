let score=33
console.log(typeof score)

score="33"
console.log(typeof score)
score=Number(score)
console.log(typeof score)

let mixeddata="33abc"//string
console.log(typeof mixeddata)//string

mixeddata=Number(mixeddata)//converted 
//string to Number
console.log(mixeddata)//NaN Not a Number

let bool=true
bool=Number(bool)//true 1 //false 0
console.log(bool)
//"33"=>33
//"33abc"=>NaN

let isloggedIn="harish"//true

let booleanIslogged=Boolean(isloggedIn)
console.log(booleanIslogged)