const planetsOrbit = document.getElementsByClassName("ctn-planets");
const buttonSwitchMenu = document.getElementById("button-content-switch");
const entityPlanets = document.getElementsByClassName("element-img");
const sunImg = document.getElementById("sun-img");
let bool = false;
function freezeTime() {
  if (!bool) {
    for (let i = 0; i < planetsOrbit.length; i++) {
      planetsOrbit[i].style.animationPlayState = "paused";
    }
    for (let i = 0; i < entityPlanets.length; i++) {
      entityPlanets[i].style.animationPlayState = "paused";
    }
    buttonSwitchMenu.style.transition = "all 1s ease";
    buttonSwitchMenu.style.backgroundColor = "darkgreen";
    bool = true;
  } else {
    for (let i = 0; i < planetsOrbit.length; i++) {
      planetsOrbit[i].style.animationPlayState = "running";
    }
    for (let i = 0; i < entityPlanets.length; i++) {
      entityPlanets[i].style.animationPlayState = "running";
    }
    buttonSwitchMenu.style.transition = "all 1s ease";
    buttonSwitchMenu.style.backgroundColor = "darkred";
    bool = false;
  }
}

function menuButton(id) {
  async function fetchData() {
    try {
      const fetchInfo = await fetch("./data.json");
      const response = await fetchInfo.json();

      const planetKeys = {
        menu_sun: "sun",
        menu_mercury: "mercury",
        menu_venus: "venus",
        menu_earth: "earth",
        menu_mars: "mars",
        menu_jupiter: "jupiter",
        menu_saturn: "saturn",
        menu_uranus: "uranus",
        menu_neptune: "neptune",
      };

      const planetKey = planetKeys[id];
      if (!planetKey || !response[planetKey]) {
        console.log("Please check again!");
        return;
      }

      const planet = response[planetKey];

      document.querySelector("#other_side_img").src = planet.image;
      document.querySelector("#other_size_heading").innerHTML = planet.name;
      document.querySelector("#other_side_content").innerHTML = planet.content;
      document.querySelector("#other_side_size_name").innerHTML = planet.name;
      document.querySelector("#other_side_size").innerHTML = planet.size;
      document.querySelector("#other_side_distance").innerHTML =
        planet.distance;
    } catch (error) {
      console.log("Error");
    }
  }
  fetchData();
}

let spaceBoolBg = false;
function moduleSpaceColor() {
  const backgroundImage = document.getElementById("background-image");
  const sideMenu = document.getElementById("side_menu");
  const otherSide = document.getElementById("other_side");
  const containerPlanets = document.getElementsByClassName("ctn-planets");
  const containerMiniBg = document.getElementById("side-menu-planets-minicard");

  if (!spaceBoolBg) {
    backgroundImage.style.width = "auto";
    backgroundImage.src = "./realistic_images/background-black.jpg";
    sideMenu.style.boxShadow = "0 0 10px white";
    otherSide.style.boxShadow = "0 0 10px white";
    containerMiniBg.style.display = "block";
    spaceBoolBg = true;

    for (let i = 0; i < containerPlanets.length; i++) {
      containerPlanets[i].style.border = "2.2px solid white";
    }
  } else {
    backgroundImage.style.width = "100%";
    backgroundImage.src = "./realistic_images/background.jpg";
    sideMenu.style.boxShadow = "none";
    otherSide.style.boxShadow = "none";
    containerMiniBg.style.display = "none";
    spaceBoolBg = false;

    for (let i = 0; i < containerPlanets.length; i++) {
      containerPlanets[i].style.border = "2.2px solid black";
    }
  }
}
let miniBoolStats = false;
function moduleSpaceColorEx() {
  const containerPlanets = document.getElementsByClassName("ctn-planets");
  if (!miniBoolStats) {
    for (let i = 0; i < containerPlanets.length; i++) {
      containerPlanets[i].style.border = "none";
    }
    miniBoolStats = true;
  } else {
    for (let i = 0; i < containerPlanets.length; i++) {
      containerPlanets[i].style.border = "2.2px solid white";
    }
    miniBoolStats = false;
  }
}
