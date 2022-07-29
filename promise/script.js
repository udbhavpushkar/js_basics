// console.log("Okay lets start")

const list = document.getElementById("list")
// fetch("https://fakestoreapi.com/users")
//   .then((res) => {
//     return res.json() // converting response into json and it returns a promise
//   })
//   .then((res) => {
//     res.forEach((element) => {
//       const item = document.createElement("li")
//       item.innerHTML = element.email
//       list.appendChild(item)
//     })
//   })
//   .catch((err) => {
//     console.log(err.message)
//   })

// console.log("Lets End")

/* async function fetchUserData() {
  try {
    let data = await fetch("https://fakestoreapi.com/users")
    let result = await data.json()
    result.forEach((element) => {
      const item = document.createElement("li")
      item.innerHTML = element.email
      list.appendChild(item)
    })
  } catch (err) {
    console.log(err)
  }
}
console.log("Hey at first")
fetchUserData()
console.log("Heyy at last") */

const myPromise = new Promise((resolve, reject) => {
  let a = 6
  if (a > 5) {
    resolve({ name: "Udbhav", age: 25 })
  } else {
    reject("Hey I am sorry")
  }
})

myPromise
  .then((res) => {
    console.log(res)
  })
  .catch((error) => {
    console.log(error)
  })
