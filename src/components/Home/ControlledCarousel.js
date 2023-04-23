import React, { useState, useEffect } from "react";
import '../../Assets/Style/carousel3D.css';

const Carousel3D = ({ children }) => {
  const [deg, setDeg] = useState(0);
  const [nElements, setNElements] = useState(0);
  const [z, setZ] = useState(0);

  useEffect(() => {
    const handleResize = () => responsiveDisplay();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    responsiveDisplay();
  }, [z]);

  function responsiveDisplay() {
    if (window.innerWidth < 600) setZ(190);
    else if (window.innerWidth < 820) setZ(250);
    else if (window.innerWidth < 1200) setZ(400);
    else if (window.innerWidth < 1600) setZ(500);
    else if (window.innerWidth >= 1600) setZ(600);

    setNElements(children.length);
  }

  function clickButtonLeft() {
    setDeg(deg - (360 / nElements));
  }

  function clickButtonRight() {
    setDeg(deg + (360 / nElements));
  }

  const style = {
    transform: `perspective(1000px) rotateY(${deg}deg)`,
  };

  const childElements = children.map((child, i) => {
    const valeur = (360 / nElements) * (i + 1);
    return React.cloneElement(child, {
      style: {
        transform: `rotateY(${valeur}deg) translateZ(${z}px)`,
      },
    });
  });

  return (
    <div className="carousel">
      <div className="box" style={style}>
        {childElements}
      </div>
      <div onClick={clickButtonLeft} className="left"></div>
      <div onClick={clickButtonRight} className="right"></div>
    </div>
  );
};

export default Carousel3D;