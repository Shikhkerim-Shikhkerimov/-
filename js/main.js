// слайдер
document.getElementById("next").onclick = function () {
  let lists = document.querySelectorAll(".item");
  document.getElementById("slide").appendChild(lists[0]);
};

document.getElementById("prev").onclick = function () {
  let lists = document.querySelectorAll(".item");
  document.getElementById("slide").prepend(lists[lists.length - 1]);
};

// кнопка секции route-section
const routeBtn = document.querySelector(".nav-btn_routeBtn");
const routeClose = document.querySelector(".routeMobile__close");

routeBtn.addEventListener("click", function () {
  document.querySelector(".routeMobile").style.display = "block";
});

routeClose.addEventListener("click", function () {
  document.querySelector(".routeMobile").style.display = "none";
});

// слайдер для mobileContent секции about-us
document.getElementById("aboutUsNext").onclick = function () {
  let lists = document.querySelectorAll(".aboutUsMobile");
  document.querySelector(".aboutUsWraper").appendChild(lists[0]);
};

document.getElementById("aboutUsPrev").onclick = function () {
  let lists = document.querySelectorAll(".aboutUsMobile");
  document.querySelector(".aboutUsWraper").prepend(lists[lists.length - 1]);
};

// слайдер для mobileContent секции tour-program
document.getElementById("tourProgramNext").onclick = function () {
  let lists = document.querySelectorAll(".mobileContent");
  document.querySelector(".tourProgramWraper").appendChild(lists[0]);
};

document.getElementById("tourProgramPrev").onclick = function () {
  let lists = document.querySelectorAll(".mobileContent");
  document.querySelector(".tourProgramWraper").prepend(lists[lists.length - 1]);
};

