import "./style.css";
import {
  fetchCurrentWeather,
  fetchForecastWeather,
  fetchWeather,
} from "./api.js";
import {
  updateCity,
  updateTemperatureFahrenheit,
  updateTemperatureCelsius,
  updateConditions,
  updateTempRange,
  updateCelsiusTempRange,
  updateDayOneConditions,
  updateDayOneTemp,
  updateDayOneTempCelsius,
  updateDayTwoDate,
  updateDayTwoConditions,
  updateDayTwoTemp,
  updateDayTwoTempCelsius,
  updateDayThreeDate,
  updateDayThreeConditions,
  updateDayThreeTemp,
  updateDayThreeTempCelsius,
  toggleBtnText,
} from "./dom.js";

async function displayData() {
  try {
    const locationValue = document.getElementById("location").value.trim();

    const currentLocationData = await fetchCurrentWeather(locationValue);

    const forecastLocationData = await fetchForecastWeather(locationValue);

    const tempToggle = document.querySelector(".tempToggle");

    updateCity(currentLocationData);
    updateTemperatureFahrenheit(currentLocationData);
    updateConditions(currentLocationData);
    updateTempRange(forecastLocationData);

    updateDayOneConditions(forecastLocationData);
    updateDayOneTemp(forecastLocationData);

    updateDayTwoDate(forecastLocationData);
    updateDayTwoConditions(forecastLocationData);
    updateDayTwoTemp(forecastLocationData);

    updateDayThreeDate(forecastLocationData);
    updateDayThreeConditions(forecastLocationData);
    updateDayThreeTemp(forecastLocationData);

    tempToggle.addEventListener("click", () => {
      if (tempToggle.textContent !== "°C") {
        updateTemperatureCelsius(currentLocationData);
        updateCelsiusTempRange(forecastLocationData);
        updateDayOneTempCelsius(forecastLocationData);
        updateDayTwoTempCelsius(forecastLocationData);
        updateDayThreeTempCelsius(forecastLocationData);
      } else {
        updateTemperatureFahrenheit(currentLocationData);
        updateTempRange(forecastLocationData);
        updateDayOneTemp(forecastLocationData);
        updateDayTwoTemp(forecastLocationData);
        updateDayThreeTemp(forecastLocationData);
      }
    });
  } catch (error) {
    console.error("Error displaying data:", error);
  }
}

async function displayWeatherOnLoad() {
  const location = "Los Angeles";
  const tempToggle = document.querySelector(".tempToggle");
  const weatherData = await fetchWeather(location);

  updateCity(weatherData);
  updateTemperatureFahrenheit(weatherData);
  updateConditions(weatherData);
  updateTempRange(weatherData);

  updateDayOneConditions(weatherData);
  updateDayOneTemp(weatherData);

  updateDayTwoDate(weatherData);
  updateDayTwoConditions(weatherData);
  updateDayTwoTemp(weatherData);

  updateDayThreeDate(weatherData);
  updateDayThreeConditions(weatherData);
  updateDayThreeTemp(weatherData);

  tempToggle.addEventListener("click", () => {
    if (tempToggle.textContent !== "°C") {
      updateTemperatureCelsius(weatherData);
      updateCelsiusTempRange(weatherData);
      updateDayOneTempCelsius(weatherData);
      updateDayTwoTempCelsius(weatherData);
      updateDayThreeTempCelsius(weatherData);
    } else {
      updateTemperatureFahrenheit(weatherData);
      updateTempRange(weatherData);
      updateDayOneTemp(weatherData);
      updateDayTwoTemp(weatherData);
      updateDayThreeTemp(weatherData);
    }
  });
}

document.getElementById("form").addEventListener("submit", (event) => {
  event.preventDefault();
  displayData();
});

toggleBtnText();
displayWeatherOnLoad();
