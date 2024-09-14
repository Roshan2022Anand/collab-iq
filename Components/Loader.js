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
     z-[100] absolute" style={{
        background: `
          radial-gradient(35.36% 35.36% at 100% 25%, #0000 66%, #ff6f20 68% 70%, #0000 72%) 100px 100px / calc(2 * 100px) calc(2 * 100px),
          radial-gradient(35.36% 35.36% at 0 75%, #0000 66%, #ff6f20 68% 70%, #0000 72%) 100px 100px / calc(2 * 100px) calc(2 * 100px),
          radial-gradient(35.36% 35.36% at 100% 25%, #0000 66%, #ff6f20 68% 70%, #0000 72%) 0 0 / calc(2 * 100px) calc(2 * 100px),
          radial-gradient(35.36% 35.36% at 0 75%, #0000 66%, #ff6f20 68% 70%, #0000 72%) 0 0 / calc(2 * 100px) calc(2 * 100px),
          repeating-conic-gradient(#1e1e1e 0 25%, #0000 0 50%) 0 0 / calc(2 * 100px) calc(2 * 100px),
          radial-gradient(#0000 66%, #ff6f20 68% 70%, #0000 72%) 0 calc(100px / 2) / 100px 100px
          #1e1e1e
        `,
      }}>
      <div ref={loaderRef} className="absolute top-1/2 left-1/2 w-[5vw] h-[5vw] border-[0.6vw] border-gray-900 outline-white outline-3  border-b-orange-900 rounded-full">
      </div>
    </div>
  )
}

export default Loader