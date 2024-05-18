export async function fetchCurrentWeather(location) {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=71778c6486914d6188a01735242704&q=${location}`,
      { mode: "cors" }
    );
    const currentData = response.json();
    return await currentData;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export async function fetchForecastWeather(location) {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=71778c6486914d6188a01735242704&q=${location}&days=3`,
      { mode: "cors" }
    );
    const forecastData = response.json();
    return await forecastData;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}

export async function fetchWeather(location) {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=71778c6486914d6188a01735242704&q=${location}&days=3`,
      { mode: "cors" }
    );
    const data = response.json();
    return await data;
  } catch (error) {
    console.error("Error fetching data:", error);
    throw error;
  }
}
