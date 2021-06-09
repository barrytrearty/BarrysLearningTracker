"strict mode";

//Query Selectors
const homeButton = document.querySelector(".homeButton");
const htmlButton = document.querySelector(".htmlButton");
const cssButton = document.querySelector(".cssButton");
const jsButton = document.querySelector(".jsButton");
const containerHome = document.querySelector(".containerHome");
const htmlSection = document.querySelector(".htmlSection");
const cssSection = document.querySelector(".cssSection");
const jsSection = document.querySelector(".jsSection");
const htmlPictureButton = document.querySelector(".htmlPictureButton");
const cssPictureButton = document.querySelector(".cssPictureButton");
const jsPictureButton = document.querySelector(".jsPictureButton");

//Starting Styling
htmlSection.classList.add("hidden");
cssSection.classList.add("hidden");
jsSection.classList.add("hidden");

//Functions
const homeButtonClick = function () {
  containerHome.classList.remove("hidden");
  htmlSection.classList.add("hidden");
  cssSection.classList.add("hidden");
  jsSection.classList.add("hidden");
};

const jsButtonClick = function () {
  jsSection.classList.remove("hidden");
  containerHome.classList.add("hidden");
  htmlSection.classList.add("hidden");
  cssSection.classList.add("hidden");
  console.log("js button clicked");
  jsButton.classList.add("current");
  htmlButton.classList.remove("current");
  cssButton.classList.remove("current");
};

const cssButtonClick = function () {
  cssSection.classList.remove("hidden");
  containerHome.classList.add("hidden");
  htmlSection.classList.add("hidden");
  jsSection.classList.add("hidden");
  console.log("css button clicked");
  cssButton.classList.add("current");
  htmlButton.classList.remove("current");
  jsButton.classList.remove("current");
};

const htmlButtonClick = function () {
  htmlSection.classList.remove("hidden");
  containerHome.classList.add("hidden");
  cssSection.classList.add("hidden");
  jsSection.classList.add("hidden");
  console.log("html button clicked");
  htmlButton.classList.add("current");
  cssButton.classList.remove("current");
  jsButton.classList.remove("current");
};

//Event Listeners
homeButton.addEventListener("click", homeButtonClick);
jsButton.addEventListener("click", jsButtonClick);
cssButton.addEventListener("click", cssButtonClick);
htmlButton.addEventListener("click", htmlButtonClick);
jsPictureButton.addEventListener("click", jsButtonClick);
cssPictureButton.addEventListener("click", cssButtonClick);
htmlPictureButton.addEventListener("click", htmlButtonClick);
