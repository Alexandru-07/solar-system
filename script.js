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
  function animTest() {
    const sunCtn = document.querySelector(".element-sun");
    const sunImg = document.getElementById("sun-img");
    const testing = document.querySelector(".central-ctn");

    sunCtn.style.position = "absolute";

    setTimeout(() => {
      testing.style.display = "none";
    }, 3500);

    sunImg.style.width = "2800px";

    sunImg.style.height = "2800px";

    sunImg.style.transition = "all 3s ease";
  }
  animTest();

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
