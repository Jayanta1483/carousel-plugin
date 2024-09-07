const NEXT_SCREEN = "next";
const PREV_SCREEN = "prev";

export function changeIndicatorOpacity(index) {
  const hostEle = document.querySelector("#carouselHost");
  const indicators = hostEle.shadowRoot.querySelectorAll(
   ".carousel__indicators button"
 );
  const indicatorEle = hostEle.shadowRoot.querySelector(
    `button[data-index='${index}']`
  );

  if (!indicators || !indicatorEle) return;

  indicators.forEach((indicator) => indicator.classList.remove("active"));
  indicatorEle.classList.add("active");
}

export function calculateSlideIndex(currentIndex, length, type) {
  let outputIndex = 0;
  if (type === NEXT_SCREEN) {
    outputIndex = currentIndex == length - 1 ? 0 : currentIndex + 1;
  }

  if (type === PREV_SCREEN) {
    outputIndex = currentIndex == 0 ? length - 1 : currentIndex - 1;
  }

  return outputIndex;
}

export function textLimiter(text) {
  if (text.length > 35) {
    return text.substring(0, 34) + "...";
  }
  return text;
}
