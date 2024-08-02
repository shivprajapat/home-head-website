import { tiltOption } from '@/utils/tiltOption'
import Image from 'next/image'
import React from 'react'
import Tilt from './Tilt'

const FeatureCard = ({ imageUrl, title, description }: FeatureData) => {
  return (
    <Tilt className="box" options={tiltOption}>
      <div className="rounded-md md:rounded-[10px] p-6 md:py-8 md:px-3 xl:px-5 2xl:px-8 transition-all duration-300 ease-out group bg-white sm:bg-transparent hover:bg-white h-full">
        <Image src={imageUrl} alt="icon" width={96} height={96} className="mb-4 md:mb-7 size-[70px] md:size-24" />
        <div>
          <h6 className="text-2xl mb-2 sm:text-white text-black group-hover:text-black font-urbanist font-semibold">{title}</h6>
          <p className="text-[#929292] text-base font-urbanist font-normal">{description}</p>
        </div>
      </div>
    </Tilt>
  )
}

export default FeatureCard
