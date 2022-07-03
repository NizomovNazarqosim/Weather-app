
const wrapper = document.querySelector(".info-wrapper");
const elForm = document.querySelector(".form");
const input = document.querySelector(".input");
const btn = document.querySelector(".btn");



const renderInfos = function(info){
    const html = `
    <h2 class="weather__name">${info.name}</h2>
    <div class="weather__country">Country ID : ${info.sys.country}</div>
    <div class="weather__temper">${Math.round(info.main.temp)}°C</div>
    <div class="weather__speed">Wind speed: ${info.wind.speed}</div>
    <p class="desc">Timezone: ${info.timezone}</p>
    <p class="">Description:${info.weather[0].description}</p>
    `;
    wrapper.innerHTML = null;
    wrapper.insertAdjacentHTML('beforeend', html);
    
}

const getWeatherData = async function(weather){
    
    const request = fetch(`https://api.openweathermap.org/data/2.5/weather?q=${weather}&units=metric&appid=277e160f5af509c9f6e384d7cbe3501c`)
         .then(response => response.json())
         .then(data => renderInfos(data))
       
      

      

}

elForm.addEventListener("submit", function(evt){
    evt.preventDefault()

    const inputValue = input.value;
    

    getWeatherData(inputValue)
  
})
// console.log(today.getFullYear());

