import React, { useEffect, useRef } from 'react'
import { gsap } from 'gsap'
import { useGSAP } from '@gsap/react'

const Loader = () => {
  const loaderRef = useRef(null)

  useGSAP(() => {
    gsap.to(loaderRef.current, {
      rotation: 360,
      duration: 0.2,
      repeat: -1,
      ease: 'linear'
    })
  })

  return (
    <div className="flex justify-center items-center h-screen w-screen bg-black z-50 absolute top-0 left-0">
      <div ref={loaderRef} className="w-12 h-12 border-4 border-gray-200  border-b-blue-500 rounded-full">
      </div>
    </div>
  )
}

export default Loader