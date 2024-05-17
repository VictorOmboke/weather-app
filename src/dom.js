import { format } from "date-fns";

//Display functions responsible for current temperature conditions
export function updateCity(locationData) {
  const cityName = document.querySelector(".city");
  cityName.textContent = locationData.location.name;
}

export function updateTemperatureFahrenheit(locationData) {
  const temp = document.querySelector(".temp");
  const fahrenheitTemp = document.createTextNode(
    `${Math.round(locationData.current.temp_f)}°`
  );

  temp.appendChild(fahrenheitTemp);
}

export function updateTemperatureCelsius(locationData) {
  const temp = document.querySelector(".temp");
  const celsiusTemp = createTextNode(
    `${Math.round(locationData.current.temp_c)}°`
  );

  temp.appendChild(celsiusTemp);
}

export function updateConditions(locationData) {
  const conditions = document.querySelector(".conditions");
  conditions.textContent = locationData.current.condition.text;
}

export function updateTempRange(locationData) {
  const tempRange = document.querySelector(".tempRange");
  const tempLowHigh = document.createTextNode(
    `L: ${Math.round(
      locationData.forecast.forecastday[0].day.mintemp_f
    )}° H: ${Math.round(locationData.forecast.forecastday[0].day.maxtemp_f)}°`
  );

  tempRange.appendChild(tempLowHigh);
}

export function updateCelsiusTempRange(locationData) {
  const tempRange = document.querySelector(".tempRange");
  const celsiusLowHigh = document.createTextNode(
    `L: ${Math.round(
      locationData.forecast.forecastday[0].day.mintemp_c
    )}° H: ${Math.round(locationData.forecast.forecastday[0].day.maxtemp_c)}°`
  );

  tempRange.appendChild(celsiusLowHigh);
}

//Display functions responsible for displaying the data for day one or the current day of the 3 day forecast
export function updateDayOneConditions(locationData) {
  const dayOneConditions = document.querySelector(".dayOneConditions");
  dayOneConditions.textContent =
    locationData.forecast.forecastday[0].day.condition.text;
}

export function updateDayOneTemp(locationData) {
  const dayOneTempRange = document.querySelector(".dayOneTemp");
  const temps = document.createTextNode(
    `${Math.round(
      locationData.forecast.forecastday[0].day.mintemp_f
    )}° - ${Math.round(locationData.forecast.forecastday[0].day.maxtemp_f)}°`
  );

  dayOneTempRange.appendChild(temps);
}

export function updateDayOneTempCelsius(locationData) {
  const dayOneTempRange = document.querySelector(".dayOneTemp");
  const celsiusTemps = document.createTextNode(
    `${Math.round(
      locationData.forecast.forecastday[0].day.mintemp_c
    )}° - ${Math.round(locationData.forecast.forecastday[0].day.maxtemp_c)}°`
  );

  dayOneTempRange.appendChild(celsiusTemps);
}

//Display functions responsible for displaying the data for day two of the 3 day forecast
export function updateDayTwoDate(locationData) {
  const dayTwoDate = document.querySelector(".dayTwoDate");
  const date = format(
    new Date(locationData.forecast.forecastday[1].date),
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
  const temps = document.createTextNode(
    `${Math.round(
      locationData.forecast.forecastday[1].day.mintemp_f
    )}° - ${Math.round(locationData.forecast.forecastday[1].day.maxtemp_f)}°`
  );

  dayTwoTempRange.appendChild(temps);
}

export function updateDayTwoTempCelsius(locationData) {
  const dayTwoTempRange = document.querySelector(".dayTwoTemp");
  const celsiusTemps = document.createTextNode(
    `${Math.round(
      locationData.forecast.forecastday[1].day.mintemp_c
    )}° - ${Math.round(locationData.forecast.forecastday[1].day.maxtemp_c)}°`
  );

  dayTwoTempRange.appendChild(celsiusTemps);
}

//Display functions responsible for displaying the data for day 3 of the the 3 day forecast
export function updateDayThreeDate(locationData) {
  const dayThreeDate = document.querySelector(".dayThreeDate");
  const date = format(
    new Date(locationData.forecast.forecastday[2].date),
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
  const temps = document.createTextNode(
    `${Math.round(
      locationData.forecast.forecastday[2].day.mintemp_f
    )}° - ${Math.round(locationData.forecast.forecastday[2].day.maxtemp_f)}°`
  );

  dayThreeTempRange.appendChild(temps);
}

export function updateDayThreeTempCelsius(locationData) {
  const dayThreeTempRange = document.querySelector(".dayThreeTemp");
  const celsiusTemps = document.createTextNode(
    `${Math.round(
      locationData.forecast.forecastday[2].day.mintemp_c
    )}° - ${Math.round(locationData.forecast.forecastday[2].day.maxtemp_c)}°`
  );

  dayThreeTempRange.appendChild(celsiusTemps);
}
