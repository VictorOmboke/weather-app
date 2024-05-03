export function getLocation() {
  const form = document.getElementById("form");
  const input = document.getElementById("location");

  form.addEventListener("submit", (event) => {
    event.preventDefault();
    const locationValue = input.value.trim();
    console.log(input.value.trim());
    getCurrentWeather(locationValue);
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
