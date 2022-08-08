let form = document.getElementById("note")
let noteText = document.getElementById("note-text")

let arr = [] // initailize our list of notes

form.addEventListener("submit", (e) => {
  e.preventDefault() //prevent reloading of the page
  let text = noteText.value // grab value from text area
  arr.push(text) // push it in our list of notes

  // We need to store list of notes in local storage,
  // however localstorage accepts only string values,
  // so we will convert array into string

  let store = JSON.stringify(arr)
  localStorage.setItem("my-notes", store)

  // localStorage.setItem("my-notes", )
})
