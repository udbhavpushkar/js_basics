// varibale declatation, if-else, loop, arrays, functions, print etc,

//Memory Phase => reserve space for variables (not value) and stores functions

//Code Phase => assign value to respective variables and execute functions/statement (it will ignore function declaration)

// whenever a function is executed(is called), a new execution context is created

//when function ends or return, its execution context gets destroyed

// lexical env => local env + lexical env of parent ---

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

// let nums = [2, 5, 3, 9, 7]

// function square(a) {
//   return a * a
// }

// const square = (a) => a * a

// function cube(a) {
//   return a * a * a
// }

// const cube = (a) => a * a * a

// function isOdd(a) {
//   return a % 2 !== 0
// }

// const isOdd = (a) => a % 2 !== 0

// function calculate(arr, logic) {
//   let result = [] // initialize empty array
//   for (let i = 0; i < arr.length; i++) {
//     result[i] = logic(arr[i]) //applying logic function
//   }
//   return result
// }

// const calculate = (arr, logic) => {
//   let result = [] // initialize empty array
//   for (let i = 0; i < arr.length; i++) {
//     result[i] = logic(arr[i]) //applying logic function
//   }
//   return result
// }

// let outputSquare = calculate(nums, square)

// console.log(outputSquare)

// let cubeOutput = calculate(nums, cube)
// console.log(cubeOutput)

// let OddOutput = calculate(nums, isOdd)
// console.log(OddOutput)

// let arr = [2, 6, 8, 4, 88, 90, 21]

// Inplace methods of array => it will change the original array

// arr.push(76) // add element at the end of array

// arr.pop() //remove element from the end of array, it returns removed element

// arr.shift() // Removes the first element from array

// arr.unshift(45) // Insert new element at the beginning of array

// arr.splice(4, 1) // removes elements starting from index 4, and remove till second argument i.e. count

// Non - Inplace

// let y = arr.slice(2, 5) // returns array from index 2 - 5 (5 not included)

// console.log(y)

// let arr = ["Udbhav", "Rohit", "Champalal", "Akriti", "Rizwan"]

// for (let i = 0; i < arr.length; i++) {
//   console.log("Hello " + arr[i])
// }

//forEach => iterate through each of the element in an array
// arr.forEach((ele) => {
//   console.log("Hello from foreach " + ele)
// })

// let nums = [3, 4, 5, 8, 6, 9, 76]

// nums.forEach((ele) => {
//   console.log("This is crrent number : " + ele)
// })

// map => it will return the transformed array

// let outputDouble = nums.map((ele) => 2 * ele)

// console.log(outputDouble)

// filter => it will filter the array according to the given condition and return the new array

// let filterOutput = nums.filter((ele) => ele > 5)

// console.log(filterOutput)

// let products = [
//   { name: "Macbook", price: 150000 },
//   { name: "Ipad", price: 60000 },
//   { name: "Iphone mini", price: 50000 },
//   { name: "Iphone XR", price: 90000 },
//   { name: "Apple Pencil", price: 6000 },
//   { name: "Apple Mag", price: null },
// ]

// let filterProducts = products.filter((element) => element.price > 50000 && element.price < 100000)
// console.log(filterProducts)

// let nums = [3, 4, 5, 8, 6, 9, 74]

// let sum = 0
// for (let i = 0; i < nums.length; i++) {
//   sum = sum + nums[i]
// }

// console.log(sum)
// Reduce => it will operate on all elements of array and then return one value

// let sumOutput = nums.reduce((prev, ele) => {
//   return prev + ele
// }, 0)

// console.log(sumOutput)

// Primitives => Anything that is not an object eg number, string, null, undefined, true, false

// ternary operator =>  <condition> ? if true run this : else run this

// let isLogin = true

// let a = isLogin ? 1000 : 0

// console.log(a)

// let user = {
//   name: "Udbhav",
//   age: 24,
//   address: {
//     pincode: "224123",
//     city: "Ayodhya",
//   },
//   greet: () => {
//     console.log("Hi everyone from " + this.name)
//   },
//   walking: () => {
//     console.log(this.name + " is Walking")
//   },
// }

// let user2 = {
//   name: "Saquibul",
//   age: 22,
//   address: {
//     pincode: "224123",
//     city: "Ayodhya",
//   },
//   greet: function () {
//     console.log("Hi everyone from " + this.name)
//   },
//   walking: function () {
//     console.log(this.name + " is Walking")
//   },
// }

// user.greet()
// user.walking()

// user2.greet()
// user2.walking()

// this => points to the object from which it is called

// Arrow functions does not attach itself to this keyword

// Prototype : Every object in JS has in-build object called prototype. This prototype is itself an object.

// Prototype Chain : The prototype is itself an object, so the prototype will have its own prototype, making what's called a prototype chain.
//  The chain ends when we reach a prototype that has null for its own prototype.

let nums = [3, 4, 5, 8, 6, 9, 74]

// nums.push = function () {
//   console.log("Ha ha... I dont do anything..")
// }

// let object = nums
// while (object) {
//   console.log(object)
//   object = object.__proto__
// }

// Class = > Template for creating objects
// Object =>  Instance / implementation of class
// Inheritance => Accessing the properties of parent class
//

// let currentDate = new Date(880914600000)
// let newDate = Date.parse(new Date(currentDate))
// 1 January, 1970 =>

// ES6 New features

// Arrow functions

// let and const

// In JS you can write string enclosed in backticks (`)
// Multi-line string using backticks (`)
// let str = `Udbhav
// is
// my namen`

// let fname = "Ankit"

// console.log("Hello " + fname + " you are welcome")

// Template literals (`)
// console.log(`Hello ${fname} you are welcome here`)

// Class
// class Book {}

// Destructuring arrays
// let students = ["Anurag", "Fahad", "Nitesh", "Siraj", "Bhomesh"]
// let name1 = students[0]
// let name2 = students[1]

// let [name1, name2, name3] = students

/* const getData = () => {
  let d = ["Udbhav", 24]
  return d
} */

// let [name, age] = getData()

// Destructuring Objects
/* let info = {
  name: "Pala",
  age: 22,
  originalName: "Mishal",
  batch: "Siri",
} */

// let originalName = info.originalName
// let batch = info.batch

// let { originalName, batch } = info

// console.log(originalName)

// const getInfo = (name, age, oname, batch) => {
//   /* let d = {
//     name: name,
//     age: age,
//     originalName: oname,
//     batch: batch,
//   } */
//   let d = {
//     name,
//     age,
//     originalName: oname,
//     batch,
//   }
//   return d
// }

// let { originalName } = getInfo("Adarsh", 21, "Adarash again", "Siri")

// if (parseInt("Vinod")) {
//   console.log("Hey there")
// }

// truthy => https://developer.mozilla.org/en-US/docs/Glossary/Truthy
// falsy values =>  https://developer.mozilla.org/en-US/docs/Glossary/Falsy

// Event bubbling => Propogation of event from child element to parent till global object is called event bubbling.
/* document.getElementById("parent").addEventListener("click", (e) => {
  console.log("Hey click from parent")
})

document.getElementById("child").addEventListener("click", (e) => {
  console.log("Hey click from child...")
})

document.getElementById("grandchild").addEventListener("click", (e) => {
  // e.stopPropagation()
  console.log("Hey click from grandchild...")
}) */

// Event Capturing => Opposite of event bubbling . Propogation of event from top parent element to current element.

/* document.getElementById("parent").addEventListener(
  "click",
  (e) => {
    console.log("Hey click from parent")
  },
  true
)

document.getElementById("child").addEventListener(
  "click",
  (e) => {
    console.log("Hey click from child...")
  },
  true
)

document.getElementById("grandchild").addEventListener(
  "click",
  (e) => {
    // e.stopPropagation()
    console.log("Hey click from grandchild...")
  },
  true
) */

// Storage of Browser => LocalStorage, Cookie, SessionStorage
// localStorage => Stores information permanently, secure same origin access, stores in key : value pair
// sessionStorage => Stores information until the browser is closed. secure same origin access, stores in key : value pair
// cookie => stores information in string format, also have expiry date, stores data in string

// Origin => http://google.com, protocol+domain+host

// Local Storage
// localStorage.setItem("name", "Udbhav")
// localStorage.setItem("email", "udbhav@gmail.com")

// console.log(localStorage.getItem("age"))
// localStorage.removeItem("name")
// localStorage.clear() , // delete all local storage data

// Session Storage
// sessionStorage.setItem("firstName", "Champa")
// sessionStorage.setItem("lastName", "Lal")
// sessionStorage.clear() , // delete all session storage data

// Cookie
// document.cookie = "name=udbhav; expiresIn=Mon Jul 26 2022 21:33:20 GMT+0530 (India Standard Time)"
// document.cookie = "name=udbhav; lastname=dbhjsgd;  expiresIn=Mon Jul 26 2022 21:33:20 GMT+0530 (India Standard Time)"
// delete cookie =>  set expriesIn to previous date

// let a = 8

// console.log(b / a)

// console.log("Udbhav")

// Exception handling => Handles the unexpected error

// try {
//   let a = 8
//   console.log(b / a)
// } catch (error) {
//   console.log(error.message)
// }

// console.log("Udbhav")

// synchronous => Execture line by line. Will wait for above code to finish before exectuing next line code.

// console.log("Anurag")
//below line will take time to get execute
// let x = 0
// while (x <= 999999999) {
//   x++
// }

// setTimeout(() => {
//   console.log("Middle wala")
// }, 3000)
// console.log("Soni")

// Click on My Orders
// i promise i ll fetch data my orders from database
// success => show my orders
// error => show the error
// chatting with feedback bot

//i open laptop
// start coding
// order food (bcz i am hungry) => app promises me to deliver food
// i sleep
// listen to songs

// let p = new Promise((resolve, reject) => {
//   let x = 90
//   if (x > 20) {
//     resolve("Yes promise is resolved")
//   } else {
//     reject("No this is rejected.")
//   }
// })

// p.then((res) => {
//   console.log(res)
// }).catch((error) => {
//   console.log(error)
// })

let getWeather = new Promise((resolve, reject) => {
  let x = 0
  while (x <= 999999999) {
    x++
  }
  let fetched = false
  if (fetched) {
    resolve("Weather is cool")
  } else {
    reject("Cannot fetch weather detail")
  }
})

getWeather
  .then((res) => {
    console.log(res)
  })
  .catch((error) => {
    console.log(error)
  })
