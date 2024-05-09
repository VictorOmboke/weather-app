export function getUserLocation() {
  const form = document.getElementById("form");
  const input = document.getElementById("location");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const locationValue = input.value.trim();
    console.log(input.value.trim());
    getCurrentWeather(locationValue);
    getLocation(locationValue);
    getFahrenheitTemp(locationValue);
    getCelsiusTemp(locationValue);
    getCondition(locationValue);
    getForecast(locationValue);
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
    console.log(locationData.location.name);
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
    console.log(fahrenheitTempData.current.temp_f);
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
    console.log(celsiusTempData.current.temp_c);
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
    console.log(conditionData.current.condition.text);
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
