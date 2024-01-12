function myFunc() {
  console.log("Downloading....");
  console.log("Download complete");
}

myFunc();

function message(msg, n) {
  console.log(msg + n);
}
message(); //undefined
message("Passing the msg");
message("Passing the msg", " check");

function addSum(a, b) {
  console.log(a + b);
}

addSum(5, 4);
addSum(10, 9);

function sum(a, b) {
  return a + b;
}

let x = sum(20, 4);
console.log(x);

// Arrow Function

const arrowSum = (a, b) => {
  console.log(a + b);
};
arrowSum(5, 6);

const arrowMul = (a, b) => {
  console.log(a * b);
};
arrowMul(5, 10);

// Create a function using the "function" keyword that takes a String as an argument & returns the number of vowels in the string"

function countVowels(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str[i] === "a" ||
      str[i] === "e" ||
      str[i] === "i" ||
      str[i] === "o" ||
      str[i] === "u"
    ) {
      count = count + 1;
    }
  }
  console.log(count);
}
countVowels("Police");
countVowels("aeiou");

const arrowVowels=(str)=>
{
  let count=0
  for(let char of str)
  {
    if (
      char === "a" ||
      char === "e" ||
      char === "i" ||
      char === "o" ||
      char === "u"
    ) {
      count = count + 1;
    }
  }
  return count
}

console.log(arrowVowels("abcdefi"))

  
//forEach 

let arr=[1,2,3,4,5]

arr.forEach(function myFunc(val)

{
  console.log(val)
})

let cities=['pune','chennai','mumbai']

cities.forEach((val)=>{
  console.log(val.toUpperCase())
})

//For a given array of numbers,Print the square of each value using the forEach loop

let array=[1,2,3,4,5]
let squareArr=[]
array.forEach((val)=>
{
  squareArr.push(val*val)
});
console.log(array)
console.log(squareArr)

let squareFunc=(val)=>
{
  console.log(val*val)
}

array.forEach(squareFunc)


//Map,Filter,reduce

let marks=[85,95,90,82,78,93,99,88,94,]

let filterArr=marks.filter((val)=>
{
  return val>90
})

let sortedVal=filterArr
console.log(sortedVal)

let arrsum=[1,2,3,4,5,6,7,8]

let total=arrsum.reduce((a,b)=>
{
  return a+b
});
console.log(total)

let product=arrsum.reduce((a,b)=>
{
  return a*b
});
console.log(product)





