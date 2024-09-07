import { carouselSetup } from "../js/carousel.js";
import { css } from "./style.js";


export default class CarouselComponent extends HTMLElement {
    constructor(...args) {
        super(...args);
    }

    connectedCallback(){
        this.renderElements();
    }

    renderElements() {
        // Create a shadow root
        const shadow = this.attachShadow({ mode: "open" });
        
        const carouselWrapper = document.createElement('div');
        carouselWrapper.setAttribute('class', 'carousel');
        carouselWrapper.setAttribute('id', 'carousel-wrapper');

        const prevBtnElement = document.createElement('span');
        prevBtnElement.setAttribute('class', 'arrow arrow--left');
        prevBtnElement.setAttribute('id', 'prev');

        const nextBtnElement = document.createElement('span');
        nextBtnElement.setAttribute('class', 'arrow arrow--right');
        nextBtnElement.setAttribute('id', 'next');
        
        const carouselInnerElement = document.createElement('div');
        carouselInnerElement.setAttribute('class', 'carousel__inner');
        carouselInnerElement.setAttribute('id', 'carouselInnerContainer');

        const indicatorsContainerElement = document.createElement('div');
        indicatorsContainerElement.setAttribute('class', 'carousel__indicators');
        indicatorsContainerElement.setAttribute('id', 'carouselIndicators');

        carouselWrapper.appendChild(prevBtnElement);
        carouselWrapper.appendChild(nextBtnElement);
        carouselWrapper.appendChild(carouselInnerElement);
        carouselWrapper.appendChild(indicatorsContainerElement);

        

       
        shadow.innerHTML = `<style>${css}</style>`;
        shadow.appendChild(carouselWrapper);

    }



}
