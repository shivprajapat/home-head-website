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
    <div className={`fixed right-4 transition-all z-10 duration-500 ${show ? 'bottom-4' : '-bottom-1/2'}`}>
      <span className="animate-ping absolute inline-flex size-10 rounded-full bg-rose-500 opacity-75" />
      <button className="size-10 relative bg-white rounded-full" onClick={handleGoToTop} type="button" aria-label="scroll-to-top">
        <Image src="./images/icons/ivr.svg" width={20} height={20} alt="whatsapp" />
      </button>
    </div>
  )
}

export default WhatsappButton
