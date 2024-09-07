
import {
  screenSlideInLeft,
  screenSlideInRight,
  screenSlideOutLeft,
  screenSlideOutRight,
} from "./positionFunctions.js";
import { changeIndicatorOpacity, calculateSlideIndex } from "./utils.js";

let slideIndex = 0;
const hostEle = document.querySelector("#carouselHost");


export function imageSlidePrev() {
  const carouselItems = hostEle.shadowRoot?.querySelectorAll(".carousel__item");
  const itemsLength = carouselItems.length;
  if (!carouselItems) return;
  const index = slideIndex;
  screenSlideOutRight(carouselItems[index]);
  slideIndex = calculateSlideIndex(slideIndex, itemsLength, "prev");
  changeIndicatorOpacity(slideIndex);
  screenSlideInRight(carouselItems[slideIndex]);
}

export function imageSlideNext() {
  const carouselItems = hostEle.shadowRoot?.querySelectorAll(".carousel__item");
  const itemsLength = carouselItems.length;
  if (!carouselItems) return;
  const index = slideIndex;
  screenSlideOutLeft(carouselItems[index]);
  slideIndex = calculateSlideIndex(slideIndex, itemsLength, "next");
  changeIndicatorOpacity(slideIndex);
  screenSlideInLeft(carouselItems[slideIndex]);
}

export function slideOnClick(e) {
  const { index } = e.target.dataset;
  const carouselItems = hostEle.shadowRoot?.querySelectorAll(".carousel__item");
  const itemsLength = carouselItems.length;
  if (!carouselItems) return;

  if (index > slideIndex) {
    screenSlideOutLeft(carouselItems[slideIndex]);
    slideIndex = calculateSlideIndex(index - 1, itemsLength, "next");
    changeIndicatorOpacity(slideIndex);
    screenSlideInLeft(carouselItems[slideIndex]);
  }

  if (index < slideIndex) {
    screenSlideOutRight(carouselItems[slideIndex]);
    slideIndex = calculateSlideIndex(index + 1, itemsLength, "prev");
    changeIndicatorOpacity(slideIndex);
    screenSlideInRight(carouselItems[slideIndex]);
  }
}
