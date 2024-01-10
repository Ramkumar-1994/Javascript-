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

// *****************Operations**********//

let value=3
let negvalue=-value
console.log(negvalue)

console.log(2+2);//4
console.log(2-2);//0
console.log(2*2);//4
console.log(2**5);//32
console.log(10/2);//5
console.log(9%2);//1

let str1="Hello"
let str2="Harish"
let str3=str1+" "+str2
console.log(str3)

console.log("1"+2);//12
console.log(1+"2");//12
console.log("1"+2+2);//122
console.log(2+1+"2");//32

let a=100
console.log(a)
b=a++
console.log(a++)
console.log(a)
console.log(b)