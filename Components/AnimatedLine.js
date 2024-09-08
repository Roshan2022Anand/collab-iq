import React, { useContext, useEffect, useRef, useState } from 'react'
import gsap from 'gsap'
import { useGSAP } from '@gsap/react'
import { MyContext } from './Mycontext';

const AnimatedLine = () => {
  const { isDarkMode } = useContext(MyContext);
  const svgContainer = useRef();

  useEffect(() => {
    const stringAnimation = (info) => {
      // Calculate the percentage based on mouse position relative to the path
      const pathHeight = svgContainer.current.clientHeight;
      const mousePositionRelativeToPath = info.y - svgContainer.current.getBoundingClientRect().top;
      const percentage = Math.max(0, Math.min(100, (mousePositionRelativeToPath / pathHeight) * 100));
      gsap.to('path', {
        attr: { d: `M 0 50 Q ${info.x} ${percentage} 1550 50` },
        duration: 0.1, // Add a small duration for smoother animation
      });

    }
    const stopStringAnimation = (info) => {
      gsap.to("path", {
        attr: { d: 'M 0 50 Q 775 50 1550 50' },
        duration: 0.8, // Increased duration for more wiggle time
        ease: "elastic.out(1, 0.2)", // Adjusted elastic easing for more pronounced wiggle
        repeat: 2, // Repeat the animation twice
        yoyo: true, // Reverse the animation on each repeat
      })
    }
    svgContainer.current.addEventListener("mousemove", stringAnimation);
    svgContainer.current.addEventListener("mouseleave", stopStringAnimation);
    return () => {
      if (svgContainer.current) { 
        svgContainer.current.removeEventListener("mousemove", stringAnimation);
        svgContainer.current.removeEventListener("mouseleave", stopStringAnimation);
      }
    }
  }, [])


  return (
    <svg width="100%" height="15vh" viewBox="0 0 1550 100" preserveAspectRatio="xMidYMid meet"  ref={svgContainer}>
      <path
        d="M 0 50 Q 775 50 1550 50"
        fill="none"
        stroke={(isDarkMode) ? "black" : "white"}
        strokeWidth="5"
      />
    </svg>
  )
}

export default AnimatedLine