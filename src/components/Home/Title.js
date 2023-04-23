import React, { useEffect } from "react";
import { gsap } from "gsap";

const ANIMATION_DELAY = 0.7;
const ANIMATION_DURATION = 0.6;
const ANIMATION_STAGGER = 0.33;

function Title() {
  useEffect(() => {
    if(document.querySelector('.main-name')){
      gsap.fromTo('.main-name', 
        { x: -100, opacity: 0 },
        { x: 0, opacity: 1, stagger: ANIMATION_STAGGER, delay: ANIMATION_DELAY }
      )
      gsap.to('.main-name', { margin: "0 1vw", delay: ANIMATION_DELAY, duration: ANIMATION_DURATION })
      gsap.to('.main-name', { margin: "0", delay: ANIMATION_DELAY, duration: ANIMATION_DURATION });
    }
    else{
      gsap.to('.main-name', {x: -100, opacity: 0})
    }
  }, []);

  return (
    <h1 className="heading-name">
      <span className="main-name"> P</span>
      <span className="main-name"> I</span>
      <span className="main-name"> P</span>
      <span className="main-name"> O</span>
      <span className="main-name"> U</span>
      <span className="main-name"> N</span>
    </h1>
  );
}

export default Title;