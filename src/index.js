import "./style.css";
import { fetchCurrentWeather, fetchForecastWeather } from "./api.js";
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
    console.log(currentLocationData);

    const forecastLocationData = await fetchForecastWeather(locationValue);
    console.log(forecastLocationData);

    const tempToggle = document.querySelector(".tempToggle");

    if (tempToggle.textContent == "°C") {
    }

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

toggleBtnText();

document.getElementById("form").addEventListener("submit", (event) => {
  event.preventDefault();
  displayData();
});
