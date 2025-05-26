const currentYear = document.getElementById('currentyear');
currentYear.textContent = new Date().getFullYear();

const lastModified = document.getElementById('lastModified');
lastModified.textContent = (document.lastModified);

const temperature = 74
const windSpeed = 14

function calculateWindChill(temperature, windSpeed) {
    if (temperature <= 50 && windSpeed > 3) {
        const windChill = 35.74 + 0.6215 * temperature - 35.75 * (windSpeed ** 0.16) + 0.4275 * temperature * (windSpeed ** 0.16);
        const roundedWindChill = Math.round(windChill * 100) / 100;
        return roundedWindChill
    } else {
        return "N/A";
    }
}
const windChillFactor = document.querySelector("#windchill-factor");
windChillFactor.textContent = calculateWindChill(temperature, windSpeed);