// let element = document.getElementById("title") // Single Element
// let element2 = document.getElementsByClassName("box") // Html Collection / Array of elements
// let element3 = document.getElementsByTagName("div") // Html Collection / Array of elements
// let element4 = document.querySelector("div") // Single Element
// let element5 = document.querySelectorAll("div") // // Html Collection / Array of elements
// console.log(element5)

// let title = document.getElementById("title") // Select html element to manipulate
// let title2 = document.getElementById("title2")
// let counter = document.getElementById("counter")
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

// document.getElementById("testing").addEventListener("submit", (e) => {
//   e.preventDefault()

//   let username = document.getElementById("name").value

//   title.innerText = "Welcome here, " + username
//   title.classList.add("big")
// })

// Get Name and Img element
let fullName = document.getElementById("full-name")
let img = document.getElementById("img")

// Get All Button elements
let ageBtn = document.getElementById("age-btn")
let emailBtn = document.getElementById("email-btn")
let phoneBtn = document.getElementById("phone-btn")
let newUserBtn = document.getElementById("getUser")

let userData = [{}]

fetchRandomUserData()

function fetchRandomUserData() {
  fetch("https://randomuser.me/api/")
    .then((res) => res.json())

    .then((response) => {
      console.log(response)
      userData = response.results[0]

      // get full name
      document.getElementById("full-name").innerHTML = userData.name.first + " " + userData.name.last

      // get image
      document.getElementById("img").setAttribute("src", userData.picture.large)

      // add event to age button
      ageBtn.addEventListener("click", () => {
        let age = document.getElementById("age")
        age.innerText = "age : " + userData.dob.age
      })

      // add event to email button
      emailBtn.addEventListener("click", () => {
        let email = document.getElementById("email")
        email.innerText = "Email : " + userData.email
      })

      // add event to phone button
      phoneBtn.addEventListener("click", () => {
        let phone = document.getElementById("phone")
        phone.innerText = "Phone : " + userData.phone
      })
    })
    .catch((error) => {
      console.log("error")
    })
}

document.getElementById("getUser").addEventListener("click", () => {
  fetchRandomUserData()
})
