// ========== Footer Year + Last Modified ==========
document.querySelector("#year").textContent = new Date().getFullYear();
document.querySelector("#lastModified").textContent = document.lastModified;

// ========== Weather + Wind Chill (Celsius) ==========
function calculateWindChill(temp, wind) {
  // Only calculate if temp ≤ 10°C and wind > 4.8 km/h
  if (temp <= 10 && wind > 4.8) {
    return (
      13.12 +
      0.6215 * temp -
      11.37 * Math.pow(wind, 0.16) +
      0.3965 * temp * Math.pow(wind, 0.16)
    ).toFixed(1);
  } else {
    return "N/A";
  }
}

// Static weather data (placeholder for future API integration)
const weatherData = {
  "south africa": { temp: 22, wind: 10, condition: "Partly Cloudy" },
  "zambia": { temp: 27, wind: 8, condition: "Sunny" },
};

// Detect page by title
const pageTitle = document.title.toLowerCase();
const selectedWeather = weatherData[pageTitle] || { temp: 20, wind: 5, condition: "Clear" };

// Inject values into DOM
document.querySelector("#temperature").textContent = `${selectedWeather.temp} °C`;
document.querySelector("#windspeed").textContent = `${selectedWeather.wind} km/h`;
document.querySelector("#windchill").textContent = calculateWindChill(
  selectedWeather.temp,
  selectedWeather.wind
);



