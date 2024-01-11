//Array

const myArr=[0,1,2,3,4,5]

console.log(myArr[2])
console.log(myArr[5])
console.log(myArr.length)

myArr.push(6)

console.log(myArr)
myArr.pop()

console.log(myArr)
myArr.unshift(9)

console.log(myArr)
myArr.shift()

console.log(myArr.includes(9))
console.log(myArr.indexOf(2))

let arr=myArr
arr[3]=10
console.log(arr)
console.log(myArr);

const newArr=myArr.join();

console.log(newArr);

//slice and Splice

console.log("A",myArr);

const myn1=myArr.slice(1,3);
console.log(myn1);

const myn2=myArr.splice(1,3);
console.log("c",myArr);
console.log(myn2);

