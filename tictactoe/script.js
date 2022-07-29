const parent = document.getElementById("parent")

let gameState = ["", "", "", "", "", "", "", "", ""]

// create 9 box
for (let i = 0; i < 9; i++) {
  // gameState.push("")
  const box = document.createElement("div") // create div
  box.classList.add("box") // add box class
  box.setAttribute("id", i) // give id
  parent.appendChild(box) // put the box div inside parent
}

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

// Check is game won or not
const isWon = () => {
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
      alert(currentPlayer + " won the game")
    }
  }
}

// handling action on click of box
const handleClickEvent = (e) => {
  if (!e.target.innerText) {
    e.target.innerText = currentPlayer
    e.target.style.color = currentPlayer === "X" ? "red" : "green"

    gameState[e.target.id] = currentPlayer // update gameState
    isWon()
    currentPlayer = currentPlayer === "X" ? "O" : "X" // toggle / change current player
  }
}

// Adding event listner to all the boxes
document.querySelectorAll(".box").forEach((element) => {
  element.addEventListener("click", handleClickEvent)
})
