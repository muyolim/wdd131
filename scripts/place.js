// ===== Wind Chill Calculation =====
function calculateWindChill(tempF, speed) {
  return 35.74 + 0.6215 * tempF - 35.75 * Math.pow(speed, 0.16) + 0.4275 * tempF * Math.pow(speed, 0.16);
}

// Only calculate if conditions are met
let temp = parseFloat(document.getElementById("temperature").textContent);
let wind = parseFloat(document.getElementById("windspeed").textContent);

if (temp <= 50 && wind >= 3) {
  document.getElementById("windchill").textContent = calculateWindChill(temp, wind).toFixed(1);
} else {
  document.getElementById("windchill").textContent = "N/A";
}

// ===== Footer Year & Last Modified =====
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;
