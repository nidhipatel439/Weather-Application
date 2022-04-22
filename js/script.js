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

var fullPageBackground = document.getElementById("full-page");
var snowColumn = document.getElementById("snow-column");
var blockSnow = document.createElement("div");

var rainyColumn = document.getElementById("rainy-column");
var sunnyColumn = document.getElementById("sunny-column");

snowColumn.onmouseenter = function () {
  fullPageBackground.classList.add("background-snow");
  blockSnow.classList.add("block-snow");
  fullPageBackground.appendChild(blockSnow);
};
snowColumn.onmouseleave = function () {
  fullPageBackground.removeChild(blockSnow);
  fullPageBackground.classList.remove("background-snow");
};

rainyColumn.onmouseenter = function () {
  fullPageBackground.classList.add("background-rain");
};
rainyColumn.onmouseleave = function () {
  fullPageBackground.classList.remove("background-rain");
};

sunnyColumn.onmouseenter = function () {
  fullPageBackground.classList.add("background-sunny");
};

sunnyColumn.onmouseleave = function () {
  fullPageBackground.classList.remove("background-sunny");
};
