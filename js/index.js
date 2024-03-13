let result = document.querySelector('#result')
let searchBtn = document.querySelector('#search-btn')
let cityRef = document.querySelector('#city')

//function to fetch weather details from api and display them
let getWeather = () => {
  let cityValue = cityRef.value;
  //if input field is empty
  if (cityValue.length === 0) {
    result.innerHTML = `<h3 class='msg'>Please enter a city name</h3>`
  } else {
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${key}&units=metric
    `;
    cityRef.value = '';
    fetch(url).then((resp) => resp.json())
      .then(data => {
        console.log(data);
        console.log(data.weather[0].icon);
        console.log(data.weather[0].main);
        console.log(data.weather[0].description);
        console.log(data.name);
        console.log(data.main.humidity);
        console.log(data.main.temp);
        console.log(data.main.temp_max);
        console.log(data.main.temp_min);
        result.innerHTML = `
        <h2>${data.name}</h2>
        <h4 class="weather">${data.weather[0].main}</h4>
        <h4 class="weather">${data.weather[0].description}</h4>
        <img src="https://openweathermap.org/img/w/${data.weather[0].icon}.png" >
        <h1><i class="fa-solid fa-temperature-three-quarters" style="color: #ffffff;"></i>${data.main.temp}&#176;</h1>
        <div class='temp-container'>
          <div>
            <h4 class="title"><i class="fa-solid fa-temperature-three-quarters" style="color: #000000;"></i>min</h4>
            <h4 class="temp">${data.main.temp_min}&#176;</h4>
          </div>
          <div>
            <h4 class="title"><i class="fa-solid fa-temperature-three-quarters" style="color: #000000;"></i>max</h4>
            <h4 class="temp">${data.main.temp_max}&#176;</h4>
          </div>
          <div>
            <h4 class="title"><i class="fa-solid fa-droplet" style="color: #000000;"></i>humidity</h4>
            <h4 class="temp">${data.main.humidity}%</h4>
          </div>
        </div>
        `

      })
      .catch(() => {
        result.innerHTML = `
        <h3 class='msg'>City not found</h3>
        `
      })
  }
}
searchBtn.addEventListener('click', getWeather)
window.addEventListener('load', getWeather)