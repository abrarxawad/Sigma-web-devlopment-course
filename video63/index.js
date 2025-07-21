let arr = [1, 2, 4, 5, 7]
//  Index  0, 1, 2, 3, 4

arr[0] = 5666;
// console.log(arr, typeof arr);
// console.log(arr.length)

// console.log(arr[0])
// console.log(arr[2])
// console.log(arr[4])

console.log(arr.toString())
console.log(arr.join(" and "))

arr.shift() //means pop the first element
arr.unshift("Jack") //means push to first element

console.log(arr)

let a1=[1,2,3]
let a2=[4,5,6]
let a3=[7,8,9]

console.log(a1.concat(a2,a3))
a1.sort()


 
let numbers = [1, 2, 3, 4, 5] 
numbers.splice(1, 2)    
numbers.splice(1, 3)  
numbers.splice(1, 3, 222, 333) 
(4) [1, 222, 333, 5]

numbers.slice(2) //0,1 removed and form a new array

numbers.reverse()
