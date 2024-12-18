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
