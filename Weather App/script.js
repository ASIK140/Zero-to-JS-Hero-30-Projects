

const cityNameInput = document.getElementById("cityInput");
const cityNameField = document.getElementById("cityName");
const tempfield = document.getElementById("temperature")
const weatherType = document.getElementById("weatherDescription")
let name = cityNameInput.value;
if (!name) {
    name="India"
}
async function getWeather() {
    
    tempfield.textContent = "Loading..."
    weatherType.textContent = "Loading..."
    cityNameField.textContent = "Loading..."
    try {
        const weatherData = await fetch(`http://api.weatherapi.com/v1/current.json?key=594b94e49fc940deb0c143050252105&q=${name}&aqi=no`)
        const data = await weatherData.json()
        tempfield.textContent = data.current.temp_c
        cityNameField.textContent = data.location.name
        weatherType.textContent = data.current.condition.text

    } catch (err) {
        console.log(err);

    }

}