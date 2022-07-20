// on submit  of form(#addTaskForm) => trigger some function (addEventListner)
document.getElementById("addTaskForm").addEventListener("submit", (event) => {
  event.preventDefault() // prevent default action on submit including reload of page

  // grab value from input field (id = task)
  let taskName = document.getElementById("task").value

  //create new div with that grabbed value (innerText)
  let newDiv = document.createElement("div")
  // grabbed value ko new div k andar rakhunga using innerText
  newDiv.innerText = taskName

  // put new div inside #list box
  let list = document.getElementById("list")
  list.appendChild(newDiv)

  // empty input field
  document.getElementById("task").value = ""
})

document.getElementById("clear").addEventListener("click", (e) => {
  e.preventDefault()

  document.getElementById("list").innerHTML = ""
})
