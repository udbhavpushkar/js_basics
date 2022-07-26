console.log("Okay lets start")

const list = document.getElementById("list")
fetch("https://fakestoreapi.com/users")
  .then((res) => {
    return res.json()
  })
  .then((res) => {
    console.log(res)

    res.forEach((element) => {
      const item = document.createElement("li")
      item.innerHTML = element.email
      list.appendChild(item)
    })
  })
  .catch((err) => {
    console.log(err)
  })

console.log("Lets End")
