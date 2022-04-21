//reference link: https://bulma.io/documentation/components/navbar/
document.addEventListener("DOMContentLoaded", () => {
  // Get all "navbar-burger" elements
  const $navbarBurgers = Array.prototype.slice.call(
    document.querySelectorAll(".navbar-burger"),
    0
  );

  // Check if there are any navbar burgers
  if ($navbarBurgers.length > 0) {
    // Add a click event on each of them
    $navbarBurgers.forEach((el) => {
      el.addEventListener("click", () => {
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);

        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle("is-active");
        $target.classList.toggle("is-active");
      });
    });
  }
});

// var searchCity = document.getElementById("search-city");
// var searchButton = document.getElementById("search-button");
// var cityName = document.getElementById("city-name");
// var cityTemp = document.getElementById("city-temp");
// var errorMessage = document.getElementById("error-message");
// var weatherColumn = document.getElementById("weather-column");

// //create a variable for api key

// //create a function for api request and response
// function apiCall(city) {
//   //create a variable for the url
//   var url =
//     "https://api.openweathermap.org/data/2.5/weather?q=" +
//     city +
//     "&appid=" +
//     apiKey +
//     "&units=metric";

//   var xhr = new XMLHttpRequest();

//   xhr.onreadystatechange = function () {
//     if (xhr.readyState === 4) {
//       if (xhr.status === 200) {
//         var data = xhr.response;
//         console.log(data);
//         cityName.innerHTML = data.name;
//         cityTemp.innerHTML = data.main.temp + "&#8451;";
//         conditions.innerHTML = data.weather[0].main;
//         sunsetSpan.innerHTML = new Date(data.sys.sunset).toTimeString();
//       } else {
//         cityName.innerHTML = "API was unsuccessful";
//         console.log(xhr.status);
//       }
//     }
//   };

//   //url and respond type
//   xhr.open("GET", url, true);
//   xhr.responseType = "json";
//   xhr.send(null);
// }

// searchButton.addEventListener("click", function () {
//   if (searchCity.value === "") {
//     errorMessage.classList.remove("hide");
//   } else {
//     errorMessage.classList.add("hide");
//     apiCall(searchCity.value);
//   }
// });

var fullPageBackground = document.getElementById("full-page");
// var row = document.getElementById("weather-column");
var snowColumn = document.getElementById("snow-column");
var blockSnow = document.createElement("div");

var rainyColumn = document.getElementById("rainy-column");
var sunnyColumn = document.getElementById("sunny-column");

snowColumn.onmouseover = function () {
  fullPageBackground.classList.add("background-snow");
  fullPageBackground.classList.remove("background-rain");
  fullPageBackground.classList.remove("background-sunny");
  blockSnow.classList.add("block-snow");
  fullPageBackground.appendChild(blockSnow);
};
snowColumn.onmouseout = function () {
  fullPageBackground.classList.remove("background-snow");
  blockSnow.classList.remove("block-snow");
};

rainyColumn.onmouseover = function () {
  fullPageBackground.classList.add("background-rain");
  fullPageBackground.classList.remove("background-snow");
  fullPageBackground.classList.remove("background-sunny");
  blockSnow.classList.remove("block-snow");
};
rainyColumn.onmouseout = function () {
  fullPageBackground.classList.remove("background-rain");
};

sunnyColumn.onmouseover = function () {
  fullPageBackground.classList.add("background-sunny");
  fullPageBackground.classList.remove("background-snow");
  fullPageBackground.classList.remove("background-rain");
};

sunnyColumn.onmouseout = function () {
  fullPageBackground.classList.remove("background-sunny");
};
