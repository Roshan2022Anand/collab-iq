import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

const Loader = () => {
  const loaderRef = useRef(null)

  useGSAP(() => {
    gsap.to(loaderRef.current, {
      rotation: 360,
      duration: 2,
      repeat: -1,
      ease: "elastic.inOut(1,0.5)"
    })
  })

  return (
    <div className="flex justify-center items-center h-full w-full
     z-[100] absolute bg-[var(--bg-color)]">
      <div ref={loaderRef} className="absolute top-1/2 left-1/2 w-[5vw] h-[5vw] border-[0.6vw] border-gray-900 outline-white outline-3  border-b-orange-900 rounded-full">
      </div>
    </div>
  )
}

export default Loader