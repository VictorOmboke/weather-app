import { format } from "date-fns";

export function getUserLocation() {
  const form = document.getElementById("form");
  const input = document.getElementById("location");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const locationValue = input.value.trim();
    console.log(`User location input: ${locationValue}`);

    getCurrentWeather(locationValue);
    getLocation(locationValue);
    getFahrenheitTemp(locationValue);
    getCelsiusTemp(locationValue);
    getCondition(locationValue);

    getForecast(locationValue);

    getDateToday(locationValue);
    getConditionsToday(locationValue);
    getFahrenheitRangeToday(locationValue);
    getCelsiusRangeToday(locationValue);

    getDateTomorrow(locationValue);
    getConditionsTomorrow(locationValue);
    getFahrenheitRangeTomorrow(locationValue);
    getCelsiusRangeTomorrow(locationValue);

    getDateNextDay(locationValue);
    getConditionsNextDay(locationValue);
    getFahrenheitRangeNextDay(locationValue);
    getCelsiusRangeNextDay(locationValue);

    form.reset();
  });
}

function getCurrentWeather(location) {
  fetch(
    `http://api.weatherapi.com/v1/current.json?key=71778c6486914d6188a01735242704&q=${location}`,
    { mode: "cors" }
  )
    .then((response) => {
      return response.json();
    })
    .then((response) => {
      console.log(response);
    })
    .catch((error) => {
      console.log("Error Fetching Data: ", error);
    });
}

async function getLocation(location) {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=71778c6486914d6188a01735242704&q=${location}`,
      { mode: "cors" }
    );
    const locationData = await response.json();
    console.log(`City: ${locationData.location.name}`);
  } catch (error) {
    console.log("Error fetching data", error);
  }
}

async function getFahrenheitTemp(location) {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=71778c6486914d6188a01735242704&q=${location}`,
      { mode: "cors" }
    );
    const fahrenheitTempData = await response.json();
    console.log(
      `Current temperature in fahrenheit: ${fahrenheitTempData.current.temp_f}`
    );
  } catch (error) {
    console.log("Error fetching data", error);
  }
}
async function getCelsiusTemp(location) {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=71778c6486914d6188a01735242704&q=${location}`,
      { mode: "cors" }
    );
    const celsiusTempData = await response.json();
    console.log(
      `Current temperature in celsius: ${celsiusTempData.current.temp_c}`
    );
  } catch (error) {
    console.log("Error fetching data", error);
  }
}

async function getCondition(location) {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=71778c6486914d6188a01735242704&q=${location}`,
      { mode: "cors" }
    );
    const conditionData = await response.json();
    console.log(`Current conditions: ${conditionData.current.condition.text}`);
  } catch (error) {
    console.log("Error fetching data", error);
  }
}

async function getForecast(location) {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=71778c6486914d6188a01735242704&q=${location}&days=3`,
      { mode: "cors" }
    );
    const forecastData = await response.json();
    console.log(forecastData);
  } catch (error) {
    "Error fetching data", error;
  }
}

async function getDateToday(location) {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=71778c6486914d6188a01735242704&q=${location}&days=3`,
      { mode: "cors" }
    );
    const todayDate = await response.json();
    console.log(`Date: ${todayDate.forecast.forecastday[0].date}`);
  } catch (error) {
    "Error fetching data", error;
  }
}

async function getConditionsToday(location) {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=71778c6486914d6188a01735242704&q=${location}&days=3`,
      { mode: "cors" }
    );
    const todayConditions = await response.json();
    console.log(
      `Today's Conditions: ${todayConditions.forecast.forecastday[0].day.condition.text}`
    );
  } catch (error) {
    "Error fetching data", error;
  }
}

async function getFahrenheitRangeToday(location) {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=71778c6486914d6188a01735242704&q=${location}&days=3`,
      { mode: "cors" }
    );
    const todayFahrenheitTempRange = await response.json();
    console.log(
      `Today's Temperature ranges in F: ${todayFahrenheitTempRange.forecast.forecastday[0].day.mintemp_f} - ${todayFahrenheitTempRange.forecast.forecastday[0].day.maxtemp_f}`
    );
  } catch (error) {
    "Error fetching data", error;
  }
}

async function getCelsiusRangeToday(location) {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=71778c6486914d6188a01735242704&q=${location}&days=3`,
      { mode: "cors" }
    );
    const todayCelsiusTempRange = await response.json();
    console.log(
      `Today's Temperature ranges in C: ${todayCelsiusTempRange.forecast.forecastday[0].day.mintemp_c} - ${todayCelsiusTempRange.forecast.forecastday[0].day.maxtemp_c}`
    );
  } catch (error) {
    "Error fetching data", error;
  }
}

async function getDateTomorrow(location) {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=71778c6486914d6188a01735242704&q=${location}&days=3`,
      { mode: "cors" }
    );
    const tomorrowDate = await response.json();
    const date = format(
      new Date(tomorrowDate.forecast.forecastday[1].date),
      "EEEE"
    );
    console.log(`Date: ${date}`);
  } catch (error) {
    "Error fetching data", error;
  }
}

async function getConditionsTomorrow(location) {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=71778c6486914d6188a01735242704&q=${location}&days=3`,
      { mode: "cors" }
    );
    const tomorrowConditions = await response.json();
    console.log(
      `Tomorrow's conditions: ${tomorrowConditions.forecast.forecastday[1].day.condition.text}`
    );
  } catch (error) {
    "Error fetching data", error;
  }
}

async function getFahrenheitRangeTomorrow(location) {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=71778c6486914d6188a01735242704&q=${location}&days=3`,
      { mode: "cors" }
    );
    const tomorrowFahrenheitTempRange = await response.json();
    console.log(
      `Tomorrow's Temperature ranges in F: ${tomorrowFahrenheitTempRange.forecast.forecastday[1].day.mintemp_f} - ${tomorrowFahrenheitTempRange.forecast.forecastday[1].day.maxtemp_f}`
    );
  } catch (error) {
    "Error fetching data", error;
  }
}

async function getCelsiusRangeTomorrow(location) {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=71778c6486914d6188a01735242704&q=${location}&days=3`,
      { mode: "cors" }
    );
    const tomorrowCelsiusTempRange = await response.json();
    console.log(
      `Tomorrow's Temperature ranges in C: ${tomorrowCelsiusTempRange.forecast.forecastday[0].day.mintemp_c} - ${tomorrowCelsiusTempRange.forecast.forecastday[0].day.maxtemp_c}`
    );
  } catch (error) {
    "Error fetching data", error;
  }
}

async function getDateNextDay(location) {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=71778c6486914d6188a01735242704&q=${location}&days=3`,
      { mode: "cors" }
    );
    const nextDayDate = await response.json();
    const date = format(
      new Date(nextDayDate.forecast.forecastday[2].date),
      "EEEE"
    );
    console.log(`Date: ${date}`);
  } catch (error) {
    "Error fetching data", error;
  }
}

async function getConditionsNextDay(location) {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=71778c6486914d6188a01735242704&q=${location}&days=3`,
      { mode: "cors" }
    );
    const nextDayConditions = await response.json();
    console.log(
      `Day after tomorrow conditions: ${nextDayConditions.forecast.forecastday[2].day.condition.text}`
    );
  } catch (error) {
    "Error fetching data", error;
  }
}

async function getFahrenheitRangeNextDay(location) {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=71778c6486914d6188a01735242704&q=${location}&days=3`,
      { mode: "cors" }
    );
    const nextDayFahrenheitTempRange = await response.json();
    console.log(
      `Day after tomorrow Temperature ranges in F: ${nextDayFahrenheitTempRange.forecast.forecastday[2].day.mintemp_f} - ${nextDayFahrenheitTempRange.forecast.forecastday[2].day.maxtemp_f}`
    );
  } catch (error) {
    "Error fetching data", error;
  }
}

async function getCelsiusRangeNextDay(location) {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=71778c6486914d6188a01735242704&q=${location}&days=3`,
      { mode: "cors" }
    );
    const nextDayCelsiusTempRange = await response.json();
    console.log(
      `Day after tomorrow Temperature ranges in C: ${nextDayCelsiusTempRange.forecast.forecastday[2].day.mintemp_c} - ${nextDayCelsiusTempRange.forecast.forecastday[2].day.maxtemp_c}`
    );
  } catch (error) {
    "Error fetching data", error;
  }
}
