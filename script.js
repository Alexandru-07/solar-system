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
        document.querySelector("#other_side_content").innerHTML =
          response.sun.content;
        document.querySelector("#other_side_size_name").innerHTML =
          response.sun.name;
        document.querySelector("#other_side_size").innerHTML =
          response.sun.size;
        document.querySelector("#other_side_distance").innerHTML =
          response.sun.distance;
        break;
      case "menu_mercury":
        console.log("debug apasand butonul mercury");
        document.querySelector("#other_side_img").src = response.mercury.image;
        document.querySelector("#other_size_heading").innerHTML =
          response.mercury.name;
        document.querySelector("#other_side_content").innerHTML =
          response.mercury.content;
        document.querySelector("#other_side_size_name").innerHTML =
          response.mercury.name;
        document.querySelector("#other_side_size").innerHTML =
          response.mercury.size;
        document.querySelector("#other_side_distance").innerHTML =
          response.mercury.distance;
        break;
      case "menu_venus":
        console.log("debug apasand butonul venus");
        document.querySelector("#other_side_img").src = response.venus.image;
        document.querySelector("#other_size_heading").innerHTML =
          response.venus.name;
        document.querySelector("#other_side_content").innerHTML =
          response.venus.content;
        document.querySelector("#other_side_size_name").innerHTML =
          response.venus.name;
        document.querySelector("#other_side_size").innerHTML =
          response.venus.size;
        document.querySelector("#other_side_distance").innerHTML =
          response.venus.distance;
        break;
      case "menu_earth":
        console.log("debug apasand butonul earth");
        document.querySelector("#other_side_img").src = response.earth.image;
        document.querySelector("#other_size_heading").innerHTML =
          response.earth.name;
        document.querySelector("#other_side_content").innerHTML =
          response.earth.content;
        document.querySelector("#other_side_size_name").innerHTML =
          response.earth.name;
        document.querySelector("#other_side_size").innerHTML =
          response.earth.size;
        document.querySelector("#other_side_distance").innerHTML =
          response.earth.distance;
        break;
      case "menu_mars":
        console.log("debug apasand butonul mars");
        document.querySelector("#other_side_img").src = response.mars.image;
        document.querySelector("#other_size_heading").innerHTML =
          response.mars.name;
        document.querySelector("#other_side_content").innerHTML =
          response.mars.content;
        document.querySelector("#other_side_size_name").innerHTML =
          response.mars.name;
        document.querySelector("#other_side_size").innerHTML =
          response.mars.size;
        document.querySelector("#other_side_distance").innerHTML =
          response.mars.distance;
        break;
      case "menu_jupiter":
        console.log("debug apasand butonul jupiter");
        document.querySelector("#other_side_img").src = response.jupiter.image;
        document.querySelector("#other_size_heading").innerHTML =
          response.jupiter.name;
        document.querySelector("#other_side_content").innerHTML =
          response.jupiter.content;
        document.querySelector("#other_side_size_name").innerHTML =
          response.jupiter.name;
        document.querySelector("#other_side_size").innerHTML =
          response.jupiter.size;
        document.querySelector("#other_side_distance").innerHTML =
          response.jupiter.distance;
        break;
      case "menu_saturn":
        document.querySelector("#other_side_img").src = response.saturn.image;
        document.querySelector("#other_size_heading").innerHTML =
          response.saturn.name;
        document.querySelector("#other_side_content").innerHTML =
          response.saturn.content;
        document.querySelector("#other_side_size_name").innerHTML =
          response.saturn.name;
        document.querySelector("#other_side_size").innerHTML =
          response.saturn.size;
        document.querySelector("#other_side_distance").innerHTML =
          response.saturn.distance;
        break;
      case "menu_uranus":
        console.log("debug apasand butonul uranus");
        document.querySelector("#other_side_img").src = response.uranus.image;
        document.querySelector("#other_size_heading").innerHTML =
          response.uranus.name;
        document.querySelector("#other_side_content").innerHTML =
          response.uranus.content;
        document.querySelector("#other_side_size_name").innerHTML =
          response.uranus.name;
        document.querySelector("#other_side_size").innerHTML =
          response.uranus.size;
        document.querySelector("#other_side_distance").innerHTML =
          response.uranus.distance;
        break;
      case "menu_neptune":
        console.log("debug apasand butonul neptune");
        document.querySelector("#other_side_img").src = response.neptune.image;
        document.querySelector("#other_size_heading").innerHTML =
          response.neptune.name;
        document.querySelector("#other_side_content").innerHTML =
          response.neptune.content;
        document.querySelector("#other_side_size_name").innerHTML =
          response.neptune.name;
        document.querySelector("#other_side_size").innerHTML =
          response.neptune.size;
        document.querySelector("#other_side_distance").innerHTML =
          response.neptune.distance;
        break;
      default:
        console.log("Please check again");
    }
  }
  fetchData();
}

function playMusic(id) {
  let musicIsOn = false;
  async function musicFetchModule() {
    const data = await fetch("./data.json");
    const response = await data.json();
    let audioSpace_1 = new Audio(response.music_space_1.url);

    switch (id) {
      case "footer_music_backBtn":
        console.log("debug din music back");

        break;
      case "footer_music_playing":
        console.log("debug din music play/pause");
        if (!musicIsOn) {
          audioSpace_1.play();
          musicIsOn = true;
        } else {
          audioSpace_1.pause();
          musicIsOn = false;
        }

        break;
      case "footer_music_forwardBtn":
        console.log("debug din music forward");
        break;
      default:
        console.log("Please check again");
    }
  }
  musicFetchModule();
}
