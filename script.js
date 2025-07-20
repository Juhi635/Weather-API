// const apiKey = '7e9883e248fe6bb81dba9675541e4aee';

// document.getElementById('fetchBtn').addEventListener('click', () => {
//   const city = document.getElementById('cityName').value.trim();
//   const resultBox = document.getElementById('weatherOutput');

//   if (!city) {
//     resultBox.textContent = "Please enter a city name.";
//     return;
//   }

//   const endpoint = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

//   fetch(endpoint)
//     .then(response => response.json())
//     .then(data => {
//       if (data.cod === 200) {
//         const { name, main, weather } = data;
//         resultBox.innerHTML = `
//           <p><strong>${name}</strong></p>
//           <p>Temperature: ${main.temp}°C</p>
//           <p>Condition: ${weather[0].description}</p>
//         `;
//       } else {
//         resultBox.textContent = "City not found!";
//       }
//     })
//     .catch(() => {
//       resultBox.textContent = "Unable to get weather details.";
//     });
// });
var apiKey = '7e9883e248fe6bb81dba9675541e4aee';

function fetchWeather() {
  var city = document.getElementById('cityName').value.trim();
  var output = document.getElementById('weatherOutput');

  if (city === "") {
    output.innerHTML = "Please enter a city name.";
    return;
  }

  var url = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + apiKey + "&units=metric";

  var xhr = new XMLHttpRequest();
  xhr.open("GET", url, true);

  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      if (xhr.status === 200) {
        var data = JSON.parse(xhr.responseText);
        var content = "<p><strong>" + data.name + "</strong></p>";
        content += "<p>Temperature: " + data.main.temp + "°C</p>";
        content += "<p>Condition: " + data.weather[0].description + "</p>";
        output.innerHTML = content;
      } else {
        output.innerHTML = "City not found!";
      }
    }
  };

  xhr.onerror = function () {
    output.innerHTML = "Network error occurred.";
  };

  xhr.send();
}

window.onload = function () {
  var btn = document.getElementById('fetchBtn');
  btn.addEventListener('click', fetchWeather);
};