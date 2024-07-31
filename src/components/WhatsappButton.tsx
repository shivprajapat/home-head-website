'use client'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const WhatsappButton = () => {
  const [show, setShow] = useState(false)

  const handleGoToTop = () => {
    window.scrollTo({
      top: 0
    })
  }
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setShow(window.scrollY > 60)
    })
  }, [])
  return (
    <div className={`fixed right-4 transition-all z-10 duration-500 ${show ? 'bottom-20' : 'bottom-4'}`}>
      <div>
        <span className="animate-ping absolute inline-flex size-10 rounded-full bg-white opacity-75" />
        <button className="size-10 relative bg-white rounded-full flex-center" type="button">
          <Image src="./images/icons/whatsapp.svg" width={25} height={25} alt="whatsapp" />
        </button>
      </div>
      <div className={`fixed right-4 transition-all z-10 duration-500 ${show ? 'bottom-4' : '-bottom-1/2'}`}>
        <button
          className="size-10 rotate-90 relative rounded-full overflow-hidden flex-center"
          onClick={handleGoToTop}
          type="button"
          aria-label="scroll-to-top"
        >
          <Image src="./images/icons/nav-left.svg" fill alt="whatsapp" />
        </button>
      </div>
    </div>
  )
}

export default WhatsappButton
