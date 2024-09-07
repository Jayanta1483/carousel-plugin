import CarouselComponent from "./CarouselComponent/index.js";
import { carouselSetup, initiateAutoSlide } from "./js/carousel.js";
import {
  imageSlideNext,
  imageSlidePrev,
  slideOnClick,
} from "./js/eventHandlers.js";

export { carouselSetup, initiateAutoSlide };

window.customElements.define("carousel-component", CarouselComponent);

const host = document.querySelector("#carouselHost");
const prevBtn = host.shadowRoot.querySelector("#prev");
const nextBtn = host.shadowRoot.querySelector("#next");

nextBtn.addEventListener("click", imageSlideNext);

prevBtn.addEventListener("click", imageSlidePrev);

const indicatorContainer = host.shadowRoot.querySelector(
  ".carousel__indicators"
);

indicatorContainer.addEventListener("click", slideOnClick);




