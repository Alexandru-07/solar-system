function sunFunc() {
  const sunElement = document.getElementsByClassName("ctn-info");

  sunElement[0].style.display = "flex";

  if (
    sunElement[0].style.display === "flex" &&
    document.addEventListener("mouseover")
  ) {
    document.addEventListener("dblclick", () => {
      sunElement[0].style.display = "none";
    });
  }
}
