import { format, parseISO } from "date-fns";
import Search from "./search.svg";

//Display functions responsible for current temperature conditions
export function updateCity(locationData) {
  const cityName = document.querySelector(".city");
  cityName.textContent = locationData.location.name;
}

export function updateTemperatureFahrenheit(locationData) {
  const temp = document.querySelector(".temp");

  temp.textContent = `${Math.round(locationData.current.temp_f)}°`;
}

export function updateTemperatureCelsius(locationData) {
  const temp = document.querySelector(".temp");

  temp.textContent = `${Math.round(locationData.current.temp_c)}°`;
}

export function updateConditions(locationData) {
  const conditions = document.querySelector(".conditions");
  conditions.textContent = locationData.current.condition.text;
}

export function updateTempRange(locationData) {
  const tempRange = document.querySelector(".tempRange");

  tempRange.textContent = `L: ${Math.round(
    locationData.forecast.forecastday[0].day.mintemp_f
  )}° H: ${Math.round(locationData.forecast.forecastday[0].day.maxtemp_f)}°`;
}

export function updateCelsiusTempRange(locationData) {
  const tempRange = document.querySelector(".tempRange");

  tempRange.textContent = `L: ${Math.round(
    locationData.forecast.forecastday[0].day.mintemp_c
  )}° H: ${Math.round(locationData.forecast.forecastday[0].day.maxtemp_c)}°`;
}

//Display functions responsible for displaying the data for day one or the current day of the 3 day forecast
export function updateDayOneConditions(locationData) {
  const dayOneConditions = document.querySelector(".dayOneConditions");
  dayOneConditions.textContent =
    locationData.forecast.forecastday[0].day.condition.text;
}

export function updateDayOneTemp(locationData) {
  const dayOneTempRange = document.querySelector(".dayOneTemp");

  dayOneTempRange.textContent = `${Math.round(
    locationData.forecast.forecastday[0].day.mintemp_f
  )}° - ${Math.round(locationData.forecast.forecastday[0].day.maxtemp_f)}°`;
}

export function updateDayOneTempCelsius(locationData) {
  const dayOneTempRange = document.querySelector(".dayOneTemp");

  dayOneTempRange.textContent = `${Math.round(
    locationData.forecast.forecastday[0].day.mintemp_c
  )}° - ${Math.round(locationData.forecast.forecastday[0].day.maxtemp_c)}°`;
}

//Display functions responsible for displaying the data for day two of the 3 day forecast
export function updateDayTwoDate(locationData) {
  const dayTwoDate = document.querySelector(".dayTwoDate");
  const date = format(
    parseISO(locationData.forecast.forecastday[1].date),
    "EEEE"
  );
  dayTwoDate.textContent = date;
}

export function updateDayTwoConditions(locationData) {
  const dayTwoConditions = document.querySelector(".dayTwoConditions");
  dayTwoConditions.textContent =
    locationData.forecast.forecastday[1].day.condition.text;
}

export function updateDayTwoTemp(locationData) {
  const dayTwoTempRange = document.querySelector(".dayTwoTemp");

  dayTwoTempRange.textContent = `${Math.round(
    locationData.forecast.forecastday[1].day.mintemp_f
  )}° - ${Math.round(locationData.forecast.forecastday[1].day.maxtemp_f)}°`;
}

export function updateDayTwoTempCelsius(locationData) {
  const dayTwoTempRange = document.querySelector(".dayTwoTemp");

  dayTwoTempRange.textContent = `${Math.round(
    locationData.forecast.forecastday[1].day.mintemp_c
  )}° - ${Math.round(locationData.forecast.forecastday[1].day.maxtemp_c)}°`;
}

//Display functions responsible for displaying the data for day 3 of the 3 day forecast
export function updateDayThreeDate(locationData) {
  const dayThreeDate = document.querySelector(".dayThreeDate");
  const date = format(
    parseISO(locationData.forecast.forecastday[2].date),
    "EEEE"
  );
  dayThreeDate.textContent = date;
}

export function updateDayThreeConditions(locationData) {
  const dayThreeConditions = document.querySelector(".dayThreeConditions");
  dayThreeConditions.textContent =
    locationData.forecast.forecastday[2].day.condition.text;
}

export function updateDayThreeTemp(locationData) {
  const dayThreeTempRange = document.querySelector(".dayThreeTemp");

  dayThreeTempRange.textContent = `${Math.round(
    locationData.forecast.forecastday[2].day.mintemp_f
  )}° - ${Math.round(locationData.forecast.forecastday[2].day.maxtemp_f)}°`;
}

export function updateDayThreeTempCelsius(locationData) {
  const dayThreeTempRange = document.querySelector(".dayThreeTemp");

  dayThreeTempRange.textContent = `${Math.round(
    locationData.forecast.forecastday[2].day.mintemp_c
  )}° - ${Math.round(locationData.forecast.forecastday[2].day.maxtemp_c)}°`;
}

//function for toggling temperatures from fahrenheit to celsius and vice versa.
export function toggleBtnText() {
  const toggleTemp = document.querySelector(".tempToggle");

  let clicked = false;

  toggleTemp.addEventListener("click", () => {
    if (clicked) {
      toggleTemp.textContent = "°C";
    } else {
      toggleTemp.textContent = "°F";
    }

    clicked = !clicked;
  });
}

//function to add svg to search button
export function searchBtn() {
  const searchBtn = document.querySelector(".search");
  const svg = new Image();
  svg.src = Search;

  searchBtn.appendChild(svg);
}
