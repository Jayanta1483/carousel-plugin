import CarouselComponent from "./CarouselComponent/index.js";
import { carouselSetup, initiateAutoSlide } from "./js/carousel.js";
import {
  imageSlideNext,
  imageSlidePrev,
  slideOnClick,
} from "./js/eventHandlers.js";
import _ from "lodash";

export { carouselSetup, initiateAutoSlide };

window.customElements.define("carousel-component", CarouselComponent);

const host = document.querySelector("#carouselHost");
const prevBtn = host.shadowRoot.querySelector("#prev");
const nextBtn = host.shadowRoot.querySelector("#next");

nextBtn.addEventListener("click", _.throttle(imageSlideNext, 900));

prevBtn.addEventListener("click", _.throttle(imageSlidePrev, 900));

const indicatorContainer = host.shadowRoot.querySelector(
  ".carousel__indicators"
);

indicatorContainer.addEventListener("click", slideOnClick);




