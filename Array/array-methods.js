let marks=[97,82,75,64,36];
console.log(marks);
let students=[85,97,44,37,76,60]

let total=0
for(let student of students)
{
  total=total+student
}
console.log("Average:",total/students.length)

let sum=0
for(let i=0;i<students.length;i++)
{
  sum=sum+students[i]
}
let avg=sum/students.length

console.log(avg)

let items=[250,645,300,900,50]
let offer=10/100;
let discount_item=[]
for(let i=0;i<items.length;i++)
{
  items[i]=items[i]-items[i]*offer
}

console.log(items)


for(let item of items)
{
  item=(item-item*offer)
  discount_item.push(item)
}
console.log(discount_item)

let companies=['bloomberg','microsoft','Uber','Google','IBM','Netflix']
console.log(companies)
companies.shift()
console.log(companies)

companies.splice(1,1,"ola")
console.log(companies)

companies.push("Amazon")
console.log(companies)