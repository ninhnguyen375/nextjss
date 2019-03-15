const MySliderStyles = () => (
  <style jsx global>{`
    .center {
      text-align: center;
      margin-top: 100px;
    }
    .slider {
      position: relative;
      width: 100%;
      height: 90vh;
      overflow: hidden;
    }

    .slider a.previousButton,
    .slider a.nextButton {
      font-size: 22px;
      line-height: 0;
      display: block;
      position: absolute;
      top: 50%;
      -webkit-transform: translateY(-50%);
      transform: translateY(-50%);
      -webkit-transition: all 0.3s linear;
      transition: all 0.3s linear;
      z-index: 1;
      color: #333;
      padding: 10px;
      text-decoration: none;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
      /* prevent jump effect when scaling */
    }

    .slider a.previousButton:not(.disabled):hover,
    .slider a.nextButton:not(.disabled):hover {
      -webkit-transform: translateY(-50%) scale(1.25);
      transform: translateY(-50%) scale(1.25);
      cursor: pointer;
    }

    .slider a.previousButton {
      left: 20px;
    }

    .slider a.nextButton {
      right: 20px;
    }

    .slide {
      width: 100%;
      height: 100%;
      position: absolute;
      overflow: hidden;
    }

    .slide.hidden {
      visibility: hidden;
    }

    .slide.previous {
      left: -100%;
    }

    .slide.current {
      left: 0;
    }

    .slide.next {
      left: 100%;
    }

    .slide.animateIn,
    .slide.animateOut {
      -webkit-transition: all 2s ease;
      transition: all 2s ease;
    }

    .slide.animateIn.previous,
    .slide.animateIn.next {
      left: 0;
      visibility: visible;
    }

    .slide.animateOut.previous {
      left: 100%;
    }

    .slide.animateOut.next {
      left: -100%;
    }
    .slide h1 {
      transition: all 0.3s ease;
      -webkit-transform: translateY(-20px);
      transform: translateY(-20px);
      opacity: 0;
    }

    .slide button {
      transition: all 0.3s ease;
      -webkit-transform: translateY(20px);
      transform: translateY(20px);
      opacity: 0;
    }

    .slide p {
      transition: all 0.3s ease;
      -webkit-transform: translateY(20px);
      transform: translateY(20px);
      opacity: 0;
    }

    .slide section * {
      transition: all 0.3s ease;
    }

    .slide section img {
      -webkit-transform: translateX(-10px);
      transform: translateX(-10px);
      opacity: 0;
    }

    .slide section span {
      -webkit-transform: translateY(-10px);
      transform: translateY(-10px);
      opacity: 0;
    }

    .slide section span strong {
      -webkit-transform: translateY(10px);
      transform: translateY(10px);
      opacity: 0;
    }

    .slide.animateIn.previous h1,
    .slide.current h1,
    .slide.animateIn.next h1,
    .slide.animateIn.previous button,
    .slide.current button,
    .slide.animateIn.next button,
    .slide.animateIn.previous p,
    .slide.current p,
    .slide.animateIn.next p,
    .slide.animateIn.previous section *,
    .slide.current section *,
    .slide.animateIn.next section * {
      -webkit-transform: translateX(0);
      transform: translateX(0);
      -webkit-transition-delay: 0.9s;
      transition-delay: 0.9s;
      opacity: 1;
    }

    .slide.animateIn.previous p,
    .slide.animateIn.next p {
      -webkit-transition-delay: 1.1s;
      transition-delay: 1.1s;
    }

    .slide.animateIn.previous button,
    .slide.animateIn.next button {
      -webkit-transition-delay: 1.3s;
      transition-delay: 1.3s;
    }

    .slide.animateIn.previous section img,
    .slide.animateIn.next section img {
      -webkit-transition-delay: 1.3s;
      transition-delay: 1.3s;
    }

    .slide.animateIn.previous section span,
    .slide.animateIn.next section span {
      -webkit-transition-delay: 1.4s;
      transition-delay: 1.4s;
    }

    .slide.animateIn.previous section span strong,
    .slide.animateIn.next section span strong {
      -webkit-transition-delay: 1.5s;
      transition-delay: 1.5s;
    }

    .slide.animateOut h1 {
      -webkit-transition-delay: 0.3s;
      transition-delay: 0.3s;
    }

    .slide.animateOut p {
      -webkit-transition-delay: 0.2s;
      transition-delay: 0.2s;
    }

    .slide.animateOut section span {
      -webkit-transition-delay: 0.1s;
      transition-delay: 0.1s;
    }

    .slide.animateOut section span strong {
      -webkit-transition-delay: 0s;
      transition-delay: 0s;
    }
  `}</style>
);
export default MySliderStyles;
