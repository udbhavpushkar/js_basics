// let element = document.getElementById("title") // Single Element
// let element2 = document.getElementsByClassName("box") // Html Collection / Array of elements
// let element3 = document.getElementsByTagName("div") // Html Collection / Array of elements
// let element4 = document.querySelector("div") // Single Element
// let element5 = document.querySelectorAll("div") // // Html Collection / Array of elements
// console.log(element5)

let title = document.getElementById("title") // Select html element to manipulate
let title2 = document.getElementById("title2")
let counter = document.getElementById("counter")
// setTimeout(function () {
//   title.style.color = "red"
//   title.innerText = "Anurag"
// }, 3000)

// title.innerHTML = "<h1>Anurag</h1>"
// title2.innerText = "<h1>Anurag</h1>"
// title2.style.backgroundColor = "red"

// title.classList.add("bold")

// title.classList.remove("red")

// console.log(title.classList)
// let x = 0

// setInterval(() => {
//   counter.innerText = x
//   x++
// }, 1000)

// let myParagraph = document.createElement("p")
// myParagraph.innerText = "This para is generated from JS"
// document.body.appendChild(myParagraph)

// document.getElementById("title2").addEventListener("click", () => {
//   title2.style.backgroundColor = "red"
// })

// document.getElementById("page").addEventListener("scroll", () => {
//   console.log("Load more content")
// })

document.getElementById("testing").addEventListener("submit", (e) => {
  e.preventDefault()

  let username = document.getElementById("name").value

  title.innerText = "Welcome here, " + username
  title.classList.add("big")
})
