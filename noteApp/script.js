let form = document.getElementById("note") // select form
let noteText = document.getElementById("note-text") // select note-text textarea
let list = document.getElementById("list")

//check for note list
// if there is notes then initialize array with those data
let arr
if (localStorage.getItem("my-notes")) {
  //if we have my-notes and some data inside my-notes
  // get data from local storage (key "my-notes") and convert in into array and store it in arr variable (using JSON.parse)
  arr = JSON.parse(localStorage.getItem("my-notes"))
} else {
  // if there is no key of my-notes , then it will initialize an empty array
  arr = [] // initailize our list of notes
}

form.addEventListener("submit", (e) => {
  e.preventDefault() //prevent reloading of the page
  let text = noteText.value // grab value from text area
  arr.push(text) // push it in our list of notes

  // We need to store list of notes in local storage,
  // however localstorage accepts only string values,
  // so we will convert array into string

  let store = JSON.stringify(arr)
  localStorage.setItem("my-notes", store)

  noteText.value = ""

  //create one div , put text inside that div and append it in list
  let noteItem = document.createElement("div")
  noteItem.setAttribute("id", arr.length)

  let del = document.createElement("button")
  del.setAttribute("id", "del" + arr.length)
  del.innerHTML = "<i class='fa fa-trash' aria-hidden='true'></i>"
  del.classList.add("delete")
  list.appendChild(del)
  del.addEventListener("click", (e) => {
    //delete from local storage
    arr.splice(arr.length, 1)
    let store = JSON.stringify(arr)
    localStorage.setItem("my-notes", store)
    //remove it from UI
    listAllNotes()
    // document.getElementById(arr.length).remove()
    // document.getElementById("del" + arr.length).remove()
  })

  list.appendChild(del)

  noteItem.classList.add("note-item")
  noteItem.innerHTML = text
  list.appendChild(noteItem)
})

function listAllNotes() {
  list.innerHTML = ""
  for (let i = 0; i < arr.length; i++) {
    let noteItem = document.createElement("div")
    noteItem.setAttribute("id", i)

    let del = document.createElement("button")
    del.setAttribute("id", "del" + i)
    del.innerHTML = "<i class='fa fa-trash' aria-hidden='true'></i>"
    del.classList.add("delete")
    del.addEventListener("click", (e) => {
      //delete from local storage
      arr.splice(i, 1)
      let store = JSON.stringify(arr)
      localStorage.setItem("my-notes", store)
      //remove it from UI
      listAllNotes()
      // document.getElementById(i).remove()
      // document.getElementById("del" + i).remove()
    })
    list.appendChild(del)

    noteItem.classList.add("note-item")
    noteItem.innerHTML = arr[i]
    list.appendChild(noteItem)
  }
}

listAllNotes()

//CRUD => Create, Read, Update, Delete
