// input
// on click of btn, grab the input from user
// ask the internet to give me weather detail of that city
// display that data in result block

const city = document.getElementById("city")
const search = document.getElementById("search")

// On click of search button (adding event listner)
search.addEventListener("click", (e) => {
  // grab input from city input field
  let cityName = city.value

  // ask openweatherapi to give me weather data of that city
  let apiKey = "477b0577b454816f45f8516126ea4bb8"
  let api = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`

  fetch(api)
    .then((response) => {
      return response.json()
    })
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    })

  //  display data of that city
})
