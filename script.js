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
    const fetchInfo = await fetch("./data.json");
    const response = await fetchInfo.json();

    switch (id) {
      case "menu_sun":
        console.log(`debug apasand butonul ${response.sun.name}`);
        document.querySelector("#other_side_img").src = response.sun.image;
        document.querySelector("#other_size_heading").innerHTML =
          response.sun.name;
        break;
      case "menu_mercury":
        console.log("debug apasand butonul mercury");
        document.querySelector("#other_side_img").src = response.mercury.image;
        document.querySelector("#other_size_heading").innerHTML =
          response.mercury.name;
        break;
      case "menu_venus":
        console.log("debug apasand butonul venus");
        document.querySelector("#other_side_img").src = response.venus.image;
        document.querySelector("#other_size_heading").innerHTML =
          response.venus.name;
        break;
      case "menu_earth":
        console.log("debug apasand butonul earth");
        document.querySelector("#other_side_img").src = response.earth.image;
        document.querySelector("#other_size_heading").innerHTML =
          response.earth.name;
        break;
      case "menu_mars":
        console.log("debug apasand butonul mars");
        document.querySelector("#other_side_img").src = response.mars.image;
        document.querySelector("#other_size_heading").innerHTML =
          response.mars.name;
        break;
      case "menu_jupiter":
        console.log("debug apasand butonul jupiter");
        document.querySelector("#other_side_img").src = response.jupiter.image;
        document.querySelector("#other_size_heading").innerHTML =
          response.jupiter.name;
        break;
      case "menu_saturn":
        document.querySelector("#other_side_img").src = response.saturn.image;
        document.querySelector("#other_size_heading").innerHTML =
          response.saturn.name;
        break;
      case "menu_uranus":
        console.log("debug apasand butonul uranus");
        document.querySelector("#other_side_img").src = response.uranus.image;
        document.querySelector("#other_size_heading").innerHTML =
          response.uranus.name;
        break;
      case "menu_neptune":
        console.log("debug apasand butonul neptune");
        document.querySelector("#other_side_img").src = response.neptune.image;
        document.querySelector("#other_size_heading").innerHTML =
          response.neptune.name;
        break;
      default:
        console.log("Please check again");
    }
  }
  fetchData();
}
