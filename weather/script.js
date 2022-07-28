// input
// on click of btn, grab the input from user
// ask the internet to give me weather detail of that city
// display that data in result block

const city = document.getElementById("city")
const search = document.getElementById("search")

// async function for fetching weather details
async function fetchWeather(cityName) {
  let apiKey = "477b0577b454816f45f8516126ea4bb8"
  let api = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`

  try {
    let response = await fetch(api)
    let result = await response.json()
    document.getElementById("temp").innerText = result.main.temp
    document.getElementById("max_temp").innerText = result.main.temp_max
    document.getElementById("min_temp").innerText = result.main.temp_min
    document.getElementById("humidity").innerText = result.main.humidity
  } catch (error) {
    console.log(error)
  }
}

// On click of search button (adding event listner)
search.addEventListener("click", (e) => {
  // grab input from city input field
  let cityName = city.value

  fetchWeather(cityName)

  // ask openweatherapi to give me weather data of that city
  // let apiKey = "477b0577b454816f45f8516126ea4bb8"
  // let api = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`

  // fetch(api)
  //   .then((response) => {
  //     return response.json()
  //   })
  //   .then((response) => {
  //     console.log(response)
  //     console.log(response.main.temp)
  //  display data of that city
  //     document.getElementById("temp").innerText = response.main.temp
  //     document.getElementById("max_temp").innerText = response.main.temp_max
  //     document.getElementById("min_temp").innerText = response.main.temp_min
  //     document.getElementById("humidity").innerText = response.main.humidity
  //   })
  //   .catch((error) => {
  //     console.log(error)
  //   })
})
