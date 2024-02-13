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

//Variables bullet point
const dotParent = document.querySelector(".dots");
slides.forEach((slides) => {
  slides.bulletPoint = document.createElement("span");
  slides.bulletPoint.classList.add("dot");
  dotParent.appendChild(slides.bulletPoint);
});

//Variables arrow
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");

//Variables images
let bannerElement = document.getElementById("banner");
let paragrapheBanner = bannerElement.querySelector("p");
let bannerImg = document.querySelector(".banner-img");

let index = 0;

slides[0].bulletPoint.classList.add("dot_selected")

//Evènement au clique arrow
arrowLeft.addEventListener("click", function () {
  slides[index].bulletPoint.classList.remove("dot_selected");
  index--;
  if (index == -1) {
    index = slides.length - 1;
  }
  paragrapheBanner.innerHTML = slides[index].tagLine;
  bannerImg.src = "./assets/images/slideshow/" + slides[index].image;
  slides[index].bulletPoint.classList.add("dot_selected");
});

arrowRight.addEventListener("click", function () {
  slides[index].bulletPoint.classList.remove("dot_selected");
  index++;
  if (index == slides.length) {
    index = 0;
  }
  paragrapheBanner.innerHTML = slides[index].tagLine;
  bannerImg.src = "./assets/images/slideshow/" + slides[index].image;
  slides[index].bulletPoint.classList.add("dot_selected");
});
