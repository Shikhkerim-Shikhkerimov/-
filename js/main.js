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
const routeBtn = document.querySelector(".route-btn");
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

// меню мобильной версии
const hamburger = document.querySelector(".mobile-menu__label");
const mbSpan1 = document.querySelector(".mobile-menu__span1");
const mbSpan2 = document.querySelector(".mobile-menu__span2");
const menu = document.querySelector(".mobile-menu__menu");

hamburger.addEventListener("click", function () {
  mbSpan1.classList.toggle("span-close");
  mbSpan2.classList.toggle("span-close");
  menu.classList.toggle("toogleMb");
  document.body.classList.toggle("no-scroll");

});

const menuItem = document.querySelectorAll(".mobile-menu__item");

for (let value of menuItem) {
  value.addEventListener("click", function () {
    menu.classList.toggle("toogleMb");
    mbSpan1.classList.remove("span-close");
    mbSpan2.classList.remove("span-close");
    document.body.classList.remove("no-scroll");
    formWraper.classList.remove("formWraperBlock")
  });
}

// модальное окно / обратный связь
const formWraper = document.querySelector(".form-wraper");
const headerBtn = document.querySelector(".header-btn");

headerBtn.addEventListener("click", function () {
  formWraper.classList.toggle("formWraperBlock")
  document.body.classList.add("no-scroll");
});

document.querySelector(".form__close").addEventListener("click", function () {
  formWraper.classList.toggle("formWraperBlock")
  document.body.classList.remove("no-scroll");
});

// плавный прокрутка между секциями
const anchors = document.querySelectorAll('a[href*="#"]')

for(let ancher of anchors) {
  ancher.addEventListener("click", function(event) {
    event.preventDefault()
    const blackID = ancher.getAttribute('href')
    document.querySelector('' + blackID).scrollIntoView({
      behavior: "smooth",
      block: "start"
    })
  })
}