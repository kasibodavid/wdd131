// Get footer elements
document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = document.lastModified;

// Wind Chill Calculation
function calculateWindChill(tempF, speedMph) {
  return (
    35.74 +
    0.6215 * tempF -
    35.75 * Math.pow(speedMph, 0.16) +
    0.4275 * tempF * Math.pow(speedMph, 0.16)
  ).toFixed(2);
}

// Static values for now
const temp = parseFloat(document.getElementById("temp").textContent);
const wind = parseFloat(document.getElementById("wind").textContent);
const windChillSpan = document.getElementById("windchill");

// Conditions for calculating windchill
if (temp <= 50 && wind > 3) {
  windChillSpan.textContent = `${calculateWindChill(temp, wind)} °F`;
} else {
  windChillSpan.textContent = "N/A";
}
