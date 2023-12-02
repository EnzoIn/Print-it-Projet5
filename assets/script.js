const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

//Variables arrow
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
//Variables bullet point
const dotParent = document.querySelector(".dots");
const bulletPoint = dotParent.children;
let dotSelected = document.querySelector(".dot_selected");
//Variables images
let bannerElement = document.getElementById("banner");
let paragrapheBanner = bannerElement.querySelector("p");
let bannerImg = document.querySelector(".banner-img");

let index = 0;
bulletPoint[index].classList.add("dot_selected");

//Evènement au clique arrow
arrowLeft.addEventListener("click", function () {
  bulletPoint[index].classList.remove("dot_selected");
  index--;
  if (index == -1) {
    index = 3;
  }
  paragrapheBanner.innerHTML = slides[index].tagLine;
  bannerImg.src = "./assets/images/slideshow/" + slides[index].image;
  bulletPoint[index].classList.add("dot_selected");
});

arrowRight.addEventListener("click", function () {
  bulletPoint[index].classList.remove("dot_selected");
  index++;
  if (index == 4) {
    index = 0;
  }
  paragrapheBanner.innerHTML = slides[index].tagLine;
  bannerImg.src = "./assets/images/slideshow/" + slides[index].image;
  bulletPoint[index].classList.add("dot_selected");
});
