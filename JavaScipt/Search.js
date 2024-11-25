let dropdownBtn = document.getElementById("drop-text");
let list = document.getElementById("list");
let icon = document.getElementById("icon");
let span = document.getElementById("span");
let input = document.getElementById("search-input");
let listItems = document.querySelectorAll(".dropdown-list-item");

dropdownBtn.onclick = function () {
  if (list.classList.contains("show")) {
    icon.style.rotate = "0deg";
  } else {
    icon.style.rotate = "-180deg";
  }
  list.classList.toggle("show");
};

window.onclick = function (e) {
  if (
    e.target.id !== "drop-text" &&
    e.target.id !== "span" &&
    e.target.id !== "icon"
  ) {
    list.classList.remove("show");

    icon.style.rotate = "0deg";
  }
};

for (item of listItems) {
  item.onclick = function (e) {
    span.innerText = e.target.innerText;

    if (e.target.innerText == "Search by") {
      input.placeholder = "Search Anything...";
    } else {
      input.placeholder = "Search in " + e.target.innerText + "...";
    }
  };
}
// This function using fatch API and connect to the public web service call "BIN Info Checker API" from https://rapidapi.com/usefulapis/api/bin-info-checker-api/
// It shows the bill informations and details
// I have to subscribed for more functions so that's why there is only one way output

