import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import "./index.scss";

const Index = () => {
  const cursorRef = useRef(null);

  useEffect(() => {
    const cursor = cursorRef.current;
    let mouseX = 0;
    let mouseY = 0;

    const updateCursor = () => {
      gsap.set(cursor, {
        css: {
          left: mouseX,
          top: mouseY,
        },
      });
    };

    gsap.to(
      {},
      {
        duration: 0.016,
        repeat: -1,
        onRepeat: updateCursor,
      }
    );

    const handleMouseMove = (e) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener("mousemove", handleMouseMove);

    // Event delegation to handle cursor scaling
    const handleMouseOver = (e) => {
      const target = e.target;
      if (
        target.classList.contains("cursor-scale") ||
        target.closest(".cursor-scale")
      ) {
        cursor.classList.add("grow");
      }
    };

    const handleMouseOut = (e) => {
      const target = e.target;
      if (
        target.classList.contains("cursor-scale") ||
        target.closest(".cursor-scale")
      ) {
        cursor.classList.remove("grow");
      }
    };

    document.addEventListener("mouseover", handleMouseOver);
    document.addEventListener("mouseout", handleMouseOut);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseover", handleMouseOver);
      document.removeEventListener("mouseout", handleMouseOut);
    };
  }, []);

  return <div className="cursor" ref={cursorRef}></div>;
};

export default Index;
