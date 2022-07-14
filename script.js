// varibale declatation, if-else, loop, arrays, functions, print etc,

//Memory Phase => reserve space for variables (not value) and stores functions

//Code Phase => assign value to respective variables and execute functions/statement (it will ignore function declaration)

// whenever a function is executed(is called), a new execution context is created

//when function ends or return, its execution context gets destroyed

// lexical env => local env + lexical env of parent

// == : check for value, === : check for value and data type (no implicit coercion happens)

// Object => key: value pair

// Shallow copy => point to same object

// Deep copy =>  create a new copy of object in memory

// Hoisting => Property in jS through which we can use use varibale or function before it is declared.

// var => can re-assign, re-declare, global scope or functional scope

// let => can re-assign, re-declaration not possible, block scoped

// const => cannot re-assign, re-declaration not possible, block scoped

// TDZ(Temporal dead zone) => Phase from starting of code till variable is initialized .

// setTimeout => function will run after specified time
// setInterval => function will run again and again after time every time interval

// closure => accessing variable from lexical parent

// var x = 5

// square(x)

// function square(num) {
//   var result = num * num
//   console.log(result)
// }

// console.log("5" + (6 + 5)) //"56"+5 => 565

// console.log(5 + 6 + "5") //11+"5" => 115

// console.log(5 + "6" + 7 + 1)

// coerision

// var x = 5

// if (x === "5") {
//   console.log("it is true")
// } else {
//   console.log("it is false")
// }

// var x = 9

// function test() {
//   var y = 99
//   console.log(x)
// }

// console.log(y)
// test()

// var x = 7 // Number
// var city = "delhi" //String
// var isAvailable = 5 == 6 // boolean

// var list = ["shubham", "aditya", "rohit"]

// var user = {
//   name: "Shubham",
//   age: 40,
//   address: {
//     city: "Delhi",
//     state: "Delhi",
//     pincode: "923892",
//   },
//   contact: "9876543210",
// }

// user.name = "Udbhav"
// user.age = 25

// console.log(user)

// var user1 = {
//   name: "Shubham",
//   age: 40,
//   address: {
//     city: "Delhi",
//     state: "Delhi",
//     pincode: "923892",
//   },
//   contact: "9876543210",
// }

// var user2 = user1 //shallow copy

// user2.name = "udbhav"

// console.log(user1.name)

// var user1 = {
//   name: "Shubham",
//   age: 40,
//   contact: "9876543210",
// }

// // var user2 = Object.assign({}, user1) //deep copy
// var user2 = {...user1} // deep copy

// user1.name = "udbhav"

// console.log(user2)

// var x = 23

// console.log(x > 20 ? "gt 20" : "it is false")

// var y = x > 20 ? 100 : 10

// console.log(y)

// console.log(x)

// console.log(a)
// console.log(b)
// console.log(c)

// if (9 > 6) {
//   let a = 20
// }

// console.log(a)

// let a = 2
// while (a++ < 5) {
//   var z = 9
//   let c = 55
//   console.log(c)
//   console.log(a)
// }

// console.log(z)
// console.log(a)
// console.log(c)

// function sayHello() {
//   console.log("Hello")
//   console.log("Everyone")
// }

// setInterval(sayHello, 2000)

// let time = 5
// let myTimer

// myTimer = setInterval(timer, 1000)

// function timer() {
//   console.log(time)
//   time--
//   if (time < 0) {
//     clearInterval(myTimer)
//   }
// }

// let a = 5
// while (a-- > 0) {
//   // print a after 2 sec
//   console.log(a)
// }

// console.log(a)

// function test1() {
//   var x = 9
//   test2()
//   function test2() {
//     console.log(x)
//   }
// }

// test1()

// let a = 0

// while (a++ < 5) {
//   setTimeout(function name() {
//     console.log(a)
//   }, 2000)
// }

// if (9 > 5) {
//   let x = 70
//   console.log(x)
// }

// console.log(x)
// DRY => Dont repeat yourself

// function sum(num1, num2) {
//   //parameters
//   let result = num1 + num2
//   console.log(result)
// }

// sum(12, 98) //argument
// sum(45, 7)

// function isRepeatEmail(email){
//   // check in database
//   if (present){
//     return true
//   }else{
//     return false
//   }
// }

// email = "udbhav@gmail.com"

// let valid = isRepeatEmail(email)

// return => get out of that function and give me the value that is returned

// function multiply(num1, num2) {
//   let result = num1 * num2
//   return result
// }

// let ans = multiply(12, 2)

// console.log(ans)

// function canDrink(age) {
//   if (age > 21) {
//     return true
//   } else {
//     return false
//   }
// }

// let myAge = 18

// if (canDrink(myAge)) {
//   console.log("Yes u can drink")
// } else {
//   console.log("you cannot ")
// }

// var age = prompt()

// function isAdult(age) {
//   if (age > 18) {
//     console.log("You are adult")
//   } else {
//     console.log("you are not")
//   }
// }

// isAdult(age)

// isAdult(97)

// test()

//function statement / function declaration
// function test() {
//   console.log("hey function test")
// }

// We can store function in variable
// Anonymous Function => We can create a function without name

//function expression
// var a = function () {
//   console.log("this is function expression")
// }

// function a() {
//   console.log("hey i am a")
// }

// function b() {
//   return function c() {
//     console.log("hey i am from c")
//   }
// }

// let y = b()
// y()

// function sum(num1, num2) {
//   return num1 + num2
// }

// let b = sum(3, 5) // 8

// console.log(b)

// if we use comparision operator , we will get boolean value

// function isPositive(a) {
//   if (a >= 0) {
//     return true
//   }
//   return false
// }

// let z = 9 > 5

// function isPositive2(a) {
//   return a >= 0
// }

// let fname = prompt("Plaese enter your name : ")

// console.log("Welcome" + fname)

// Callback => We can pass function as an argument in a function.
// We can return a function from a function

// function a() {
//   console.log("Hey i am from a")
// }

// function c() {
//   console.log("Hey i am from c")
// }

// function b(x) {
//   x() // call function that is passed in argument
//   console.log("hey i am b.")
// }

// b(a)
// b(c)

// function testing() {
//   console.log("hey check me out...")
// }

// setTimeout(testing, 5000)

// function letsDance() {
//   console.log("Hey lets dance")
//   console.log("Dancing...")
// }

// function test(fn, age) {
//   if (age > 21) {
//     fn()
//   }
// }

// test(letsDance, 20)

// function product(a, b) {
//   return a * b
// }

// let product2 = (a, b) => a * b

// function isEven(a) {
//   return a % 2 == 0
// }

// let isEven2 = (a) => a % 2 == 0

// function welcome(username) {
//   console.log("Hello " + username)
// }

// let welcome2 = (username) => console.log("Hello " + username)

// setTimeout(() => {
//   console.log("See this is time out")
// }, 2000)

// function intro(name, city, age) {
//   console.log("Hello I am " + name)
//   console.log("I am from " + city)
//   console.log("I am " + age + " year old")
// }

// let intro2 = (name, city, age) => {
//   console.log("Hello I am " + name)
//   console.log("I am from " + city)
//   console.log("I am " + age + " year old")
// }

// let nums = [2, 5, 3, 9, 7]
// function calculateSquare(arr) {
//   let result = [] // initialize empty array
//   for (let i = 0; i < arr.length; i++) {
//     result[i] = arr[i] * arr[i] // squareing
//   }
//   return result
// }

// let output = calculateSquare(nums)
// console.log(output)

// function calculateCube(arr) {
//   let result = [] // initialize empty array
//   for (let i = 0; i < arr.length; i++) {
//     result[i] = arr[i] * arr[i] * arr[i] // cubing
//   }
//   return result
// }

// let cubeOutput = calculateCube(nums)

// console.log(cubeOutput)

let nums = [2, 5, 3, 9, 7]

// function square(a) {
//   return a * a
// }

const square = (a) => a * a

// function cube(a) {
//   return a * a * a
// }

const cube = (a) => a * a * a

// function isOdd(a) {
//   return a % 2 !== 0
// }

const isOdd = (a) => a % 2 !== 0

// function calculate(arr, logic) {
//   let result = [] // initialize empty array
//   for (let i = 0; i < arr.length; i++) {
//     result[i] = logic(arr[i]) //applying logic function
//   }
//   return result
// }

const calculate = (arr, logic) => {
  let result = [] // initialize empty array
  for (let i = 0; i < arr.length; i++) {
    result[i] = logic(arr[i]) //applying logic function
  }
  return result
}

// let outputSquare = calculate(nums, square)

// console.log(outputSquare)

// let cubeOutput = calculate(nums, cube)
// console.log(cubeOutput)

// let OddOutput = calculate(nums, isOdd)
// console.log(OddOutput)

let arr = [2, 6, 8, 4, 88, 90, 21]

// Inplace methods of array => it will change the original array

// arr.push(76) // add element at the end of array

// arr.pop() //remove element from the end of array, it returns removed element

// arr.shift() // Removes the first element from array

// arr.unshift(45) // Insert new element at the beginning of array

// arr.splice(4, 1) // removes elements starting from index 4, and remove till second argument i.e. count

// Non - Inplace

// let y = arr.slice(2, 5) // returns array from index 2 - 5 (5 not included)

// console.log(y)