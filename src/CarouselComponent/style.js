export const css = `
  .carousel {
    position: relative;
    margin: 2rem auto;
    width: 70vw;
    height: 50vh;
    overflow: hidden;
    border: 1p solid red;
  }
  
.arrow {
  position: absolute;
  top: 43%;
  display: inline-block;
  width: 2.5rem;
  height: 2.5rem;
  border-top: 0.5rem solid #fff;
  border-right: 0.5rem solid #fff;
  cursor: pointer;
  z-index: 10;
  opacity: 0.8;
}
.arrow--left {
  margin-left: 3rem;
  left: 0;
  transform: rotate(-135deg);
}
.arrow--right {
  margin-right: 3rem;
  right: 0;
  transform: rotate(45deg);
}
.arrow:hover {
  opacity: 1;
}

  
  .carousel__inner {
    width: 100%;
    height: 100%;
    padding-top: 58.1632653061%;
  }
  
  .carousel__item {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition-duration: 0.8s;
    transition-timing-function: ease-in-out;
  }
  .carousel__item h3, .carousel__item p {
    color: #faf9f9;
    z-index: 10;
    position: absolute;
    text-align: center;
  }
  .carousel__item h3 {
    color: #faf9f9;
    z-index: 100;
    position: absolute;
    bottom: 15%;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    text-wrap: nowrap;
  }
  .carousel__img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  
  .carousel__indicators {
    position: absolute;
    bottom: 5%;
    left: 50%;
    transform: translate(-50%);
  }
  .carousel__indicators button {
    width: 1rem;
    height: 1rem;
    margin-right: 1rem;
    border: none;
    border-radius: 50%;
    background-color: white;
    opacity: 0.6;
    cursor: pointer;
  }
  .carousel__indicators button.active {
    opacity: 1;
  }
  
  @keyframes slide-out-left {
    from {
      left: 0;
    }
    to {
      left: -100%;
    }
  }
  @keyframes slide-in-left {
    from {
      left: 100%;
    }
    to {
      left: 0;
    }
  }
  @keyframes slide-out-right {
    from {
      left: 0;
    }
    to {
      left: 100%;
    }
  }
  @keyframes slide-in-right {
    from {
      left: -100%;
    }
    to {
      left: 0;
    }
  }
  
 
  `;
