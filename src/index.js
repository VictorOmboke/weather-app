import "./style.css";
import { fetchCurrentWeather, fetchForecastWeather } from "./api.js";
import {
  updateCity,
  updateTemperatureFahrenheit,
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
} from "./dom.js";
import { format } from "date-fns";

async function displayData() {
  try {
    const locationValue = document.getElementById("location").value.trim();

    const currentLocationData = await fetchCurrentWeather(locationValue);
    console.log(currentLocationData);

    const forecastLocationData = await fetchForecastWeather(locationValue);
    console.log(forecastLocationData);

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
  } catch (error) {
    console.error("Error displaying data:", error);
  }
}

document.getElementById("form").addEventListener("submit", (event) => {
  event.preventDefault();
  displayData();
});
