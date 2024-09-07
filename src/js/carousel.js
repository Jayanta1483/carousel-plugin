import { defaultOption } from "./defaultOption.js";
import { imageSlideNext } from "./eventHandlers.js";
import { changeIndicatorOpacity, textLimiter } from "./utils.js";


export function carouselSetup(_options = null) {
  let options = (_options == null) ? defaultOption : _options;
  if (options === null) {
    console.warn("Carousel is running on default options.");
  }

  if (options.length > 5) {
    console.warn("Options array length exceeds 5, only first 5 options will be considered.");
    options.pop();
  }

  if (!Array.isArray(options) && options !== null) {
    throw new Error("Please provide options in proper format.");
  }

  const host = document.querySelector("#carouselHost");
  const carouselInner = host.shadowRoot.querySelector(
    "#carouselInnerContainer"
  );
  const carouselIndicators = host.shadowRoot.querySelector(
    "#carouselIndicators"
  );

  carouselInner.innerHTML = "";
  carouselIndicators.innerHTML = "";

  for (let i = 0; i < options.length; i++) {
    const carouselItem = document.createElement("section");
    carouselItem.setAttribute("class", "carousel__item");
    carouselItem.style.display = "none";
    let description;

    if(options === null){
      const { color } = defaultOption[i];
      description = defaultOption[i].text;
      carouselItem.style.backgroundColor = color;
    }
    else{
      const { imageUrl } = options[i];
      description = textLimiter(options[i].text);
      const image = document.createElement("img");
      image.setAttribute("src", imageUrl);
      image.setAttribute("class", "carousel__img");
      carouselItem.append(image);
    }
    
    const textContent = document.createElement("h3");
    textContent.innerHTML = description;
    carouselItem.append(textContent);

    const indicatorBtnEle = document.createElement("button");
    indicatorBtnEle.setAttribute("data-index", i);

    carouselInner.append(carouselItem);
    carouselIndicators.append(indicatorBtnEle);
  }

  const firstScreen = host.shadowRoot.querySelectorAll(".carousel__item");
  firstScreen[0].style.display = "block";
  firstScreen[0].style.left = "0";
  changeIndicatorOpacity(0);
  
}

export function initiateAutoSlide() {
  const timer = 3000;
  const host = document.querySelector("#carouselHost");
  const carouselWrapper = host.shadowRoot.querySelector("#carousel-wrapper");

  const autoSlide = setInterval(() => {
    imageSlideNext();
  }, timer);

  carouselWrapper.addEventListener("mouseenter", function () {
    clearTimeout(autoSlide);
  });

  carouselWrapper.addEventListener("mouseleave", initiateAutoSlide);
}
