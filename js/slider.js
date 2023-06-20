let currentSlideIndex = 0;

let nextSlideBtn = document.getElementById("next-slide");
let prevSlideBtn = document.getElementById("prev-slide");
const roundsRow = document.getElementById("sliders-rounds");
const sliderCitiesTexts = document.getElementById("projects__link");
const citiesLinksRow = document.getElementById("cities-links-row");

let content = [
  {
    cityText: "Rostov-on-Don LCD admiral",
    areaText: "81 m2",
    repairTimeText: "3.5 months",
    repairCostTime: "Upon request",
    img: "img/mask_grup2.2.jpg",
    cityLink: "Rostov-on-Don, Admiral",
  },
  {
    cityText: "Sochi Thieves",
    areaText: "105 m2",
    repairTimeText: "4 months",
    repairCostTime: "Upon request",
    img: "img/maskgroup2.jpg",
    cityLink: "Sochi Thieves",
  },
  {
    cityText: "Rostov-on-Don Patriotic",
    areaText: "93 m2",
    repairTimeText: "3 months",
    repairCostTime: "Upon request",
    img: "img/mask_grup2.3.jpg",
    cityLink: "Rostov-on-Don Patriotic",
  },
  //   {
  //     cityText: "Moscow",
  //     areaText: "12393 m2",
  //     repairTimeText: "13 months",
  //     repairCostTime: "Upon 123",
  //     img: "img/mask_grup2.3.jpg",
  //     cityLink: "Moscow City",
  //   },
];

const showNextSlide = () => {
  if (currentSlideIndex + 1 >= content.length) {
    currentSlideIndex = 0;
  } else {
    currentSlideIndex++;
  }
  showSlide(currentSlideIndex);
};

const showPrevSlide = () => {
  if (currentSlideIndex - 1 < 0) {
    currentSlideIndex = content.length - 1;
  } else {
    currentSlideIndex--;
  }
  showSlide(currentSlideIndex);
};

function changeActiveRound(index) {
  currentSlideIndex = index;
  showSlide(index);
}

function showSlide(index) {
  const cityText = document.getElementById("city-text");
  const areaText = document.getElementById("area-text");
  const repairTimeText = document.getElementById("repair-time-text");
  const repairCostText = document.getElementById("repair-cost-text");
  const slideImg = document.getElementById("slide-img");
  const roundsArr = document.querySelectorAll(".slide-round-btn");
  const citiesLinksRow = document.querySelectorAll(".projects__link");
  cityText.textContent = content[index].cityText;
  areaText.textContent = content[index].areaText;
  repairTimeText.textContent = content[index].repairTimeText;
  repairCostText.textContent = content[index].repairCostTime;
  slideImg.src = content[index].img;
  slideImg.alt = content[index].cityText;

  for (let i = 0; i < content.length; i++) {
    roundsArr[i].classList.remove("slide-round-btn--active");
  }
  roundsArr[index].classList.add("slide-round-btn--active");

  for (let i = 0; i < content.length; i++) {
    citiesLinksRow[i].classList.remove("projects__link--active");
  }
  citiesLinksRow[index].classList.add("projects__link--active");
}

content.forEach((slide, i) => {
  // draw round btns start
  const roundBtn = document.createElement("button");
  roundBtn.classList.add("slide-round-btn");
  roundBtn.addEventListener("click", () => changeActiveRound(i));
  roundsRow.appendChild(roundBtn);
  // draw round btns end

  // draw cities links start

  const linkLi = document.createElement("li");
  linkLi.classList.add("projects__item");
  const linkBtn = document.createElement("button");
  linkBtn.textContent = slide.cityLink;
  linkBtn.classList.add("projects__link");
  linkBtn.addEventListener("click", () => changeActiveRound(i));
  linkLi.appendChild(linkBtn);
  citiesLinksRow.appendChild(linkLi);
});

nextSlideBtn.addEventListener("click", () => showNextSlide());
prevSlideBtn.addEventListener("click", () => showPrevSlide());

showSlide(0);
// перелистывать тайм 2000
// setInterval(() => {
//   showNextSlide();
// }, 2000);
