// global variables
let searchIcon = document.querySelector(".navbar .form .search-icon");
let searchInput = document.querySelector(".navbar .form input");
let navToggler = document.querySelector(".navbar .navbar-toggler");
let navList = document.querySelector("#navbarSupportedContent");
let navbarItems = document.querySelectorAll(".nav-item a");
let header = document.querySelector("header");
let slides = document.querySelectorAll(".welcome .slide");
let skillsSlides = document.querySelectorAll(".skills .slide");
let indicators = document.querySelectorAll(".welcome .indicators button");
let skillsIndicators = document.querySelectorAll(".skills .indicators button");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let btns = document.querySelectorAll(".btn-group .btn");
let stats = document.querySelector("#stats");
let statsCount = document.querySelectorAll(".count h4");

// show navbar while clicking on bar icon
navToggler.addEventListener("click", () => {
  navList.classList.toggle("active");
});

// add active class to li on navbar
navbarItems.forEach((el) => {
  el.addEventListener("click", () => {
    removeActiveClass();
    el.classList.add("active");
  });
});
function removeActiveClass() {
  navbarItems.forEach((el) => {
    el.classList.remove("active");
  });
}

// show search input while clicking on icon
searchIcon.addEventListener("click", () => {
  searchInput.classList.toggle("active");
});

// change background color when scroll
window.addEventListener("scroll", () => {
  if (scrollY > 120) {
    header.style.backgroundColor = `rgba(15 , 116 , 143 , 70%)`;
  } else {
    header.style.backgroundColor = `transparent`;
  }
});

////////////////// slider /////////////////////
next.addEventListener("click", () => {
  nextSlide();
});
cnt = 0;
maxCnt = slides.length - 1;
function nextSlide() {
  if (cnt == maxCnt) {
    cnt = 0;
  } else {
    cnt++;
  }

  removeSlideActive(slides);
  removeSlideActive(indicators);
  slides[cnt].classList.add("active");
  indicators[cnt].classList.add("active");
}
prev.addEventListener("click", () => {
  prevSlide();
});
function prevSlide() {
  if (cnt == 0) {
    cnt = maxCnt;
  } else {
    cnt--;
  }

  removeSlideActive(slides);
  removeSlideActive(indicators);
  slides[cnt].classList.add("active");
  indicators[cnt].classList.add("active");
}
function removeSlideActive(elem) {
  elem.forEach((el) => {
    el.classList.remove("active");
  });
}

indicators.forEach((el, idx) => {
  el.addEventListener("click", () => {
    removeSlideActive(indicators);
    removeSlideActive(slides);
    indicators[idx].classList.add("active");
    slides[idx].classList.add("active");
  });
});
// portofolio section shuffle
btns.forEach((btn) => {
  btn.addEventListener("click", () => {
    removeSlideActive(btns);
    btn.classList.add("active");
  });
});

/////////////// stats section counter /////////////
window.addEventListener("load", () => {
  statsCount.forEach((el) => {
    let cnt = +el.innerText;
    let target = +el.getAttribute("data-target");
    let counter = target / 100;
    function counterStats() {
      if (cnt < target) {
        cnt += counter;
        el.innerText = Math.ceil(cnt);
        console.log(cnt);
        setTimeout(counterStats, 30);
      } else {
        el.innerText = target;
      }
    }
    counterStats();
  });
});
/////////////// skills section slider /////////////
skillsIndicators.forEach((el, idx) => {
  el.addEventListener("click", () => {
    removeSlideActive(skillsIndicators);
    removeSlideActive(skillsSlides);
    skillsIndicators[idx].classList.add("active");
    skillsSlides[idx].classList.add("active");
  });
});
