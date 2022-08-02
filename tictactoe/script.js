const parent = document.getElementById("parent")
const message = document.getElementById("message")

let gameState = ["", "", "", "", "", "", "", "", ""]

let gameActive = true

let currentPlayer = "X"

const winningCondition = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
]

message.innerHTML = `Current Player : ${currentPlayer}`

// create 9 box
for (let i = 0; i < 9; i++) {
  const box = document.createElement("div") // create div
  box.classList.add("box") // add box class
  box.setAttribute("id", i) // give id
  parent.appendChild(box) // put the box div inside parent
}

// Check is game won or not
const isWon = () => {
  let result = false
  for (let i = 0; i < winningCondition.length; i++) {
    let condition = winningCondition[i]
    let a = gameState[condition[0]]
    let b = gameState[condition[1]]
    let c = gameState[condition[2]]

    if (a === "" || b === "" || c === "") {
      continue
    }

    if (a == b && b == c) {
      gameActive = false
      result = true
    }
  }
  return result
}

// handling action on click of box
const handleClickEvent = (e) => {
  if (!e.target.innerText && gameActive) {
    // checking inner text is empty
    e.target.innerText = currentPlayer
    e.target.style.color = currentPlayer === "X" ? "red" : "green" // ignore , figure out yourself

    gameState[e.target.id] = currentPlayer // update gameState
    if (isWon()) {
      message.innerHTML = `Player ${currentPlayer} won`
    } else {
      currentPlayer = currentPlayer === "X" ? "O" : "X" // toggle / change current player
      message.innerHTML = `Current Player : ${currentPlayer}`
    }
  }
}

// Adding event listner to all the boxes
document.querySelectorAll(".box").forEach((element) => {
  element.addEventListener("click", handleClickEvent)
})
