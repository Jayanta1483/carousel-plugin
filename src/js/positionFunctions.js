

export function setScreenPosition(target, { display = 'block', left = '0', animation = '' }) {
    target.style.display = display;
    target.style.left = left;
    target.style.animation = animation;
}



export function screenSlideOutLeft(targetElement) {
    setScreenPosition(targetElement, { animation: `slide-out-left 0.8s ease-in-out forwards` });
    setTimeout(() => {
        setScreenPosition(targetElement, { display: `none`, left: `-100%`, animation: `` });
    }, 800);

}

export function screenSlideInLeft(targetElement) {
    setScreenPosition(targetElement, { display: `block`, left: `100%`, animation: `slide-in-left 0.8s ease-in-out forwards` });
    setTimeout(() => {
        setScreenPosition(targetElement, { display: `block`, left: `0%`, animation: `` });
    }, 800);

}


export function screenSlideOutRight(targetElement) {
    setScreenPosition(targetElement, { animation: `slide-out-right 0.8s ease-in-out forwards` });
    setTimeout(() => {
        setScreenPosition(targetElement, { display: `none`, left: `100%`, animation: `` });
    }, 800);

}


export function screenSlideInRight(targetElement) {
    setScreenPosition(targetElement, { display: `block`, left: `-100%`, animation: `slide-in-right 0.8s ease-in-out forwards` });
    setTimeout(() => {
        setScreenPosition(targetElement, { display: `block`, left: `0%`, animation: `` });
    }, 800);

}