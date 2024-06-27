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
const routeClose = document.querySelector(".route-section__route_routeClose");

routeBtn.addEventListener("click", function () {
  document.querySelector(".route-section__route").style.display = "block";
  document.querySelector(".route-section__route_routeClose").style.display =
    "block";
});

routeClose.addEventListener("click", function () {
  document.querySelector(".route-section__route").style.display = "none";
});
