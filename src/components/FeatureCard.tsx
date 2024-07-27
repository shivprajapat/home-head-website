import Image from 'next/image'
import React from 'react'

type FeatureCardTypes = {
  icon: string,
  title: string, description: string
}
const FeatureCard = ({ icon, title, description }: FeatureCardTypes) => {
  return (
    <div className='rounded-md md:rounded-[10px] p-6 md:py-8 md:px-3 xl:px-5 2xl:px-8 transition-all duration-300 ease-out group hover:bg-white h-full'>
      <Image src={icon} alt='icon' width={96} height={96} className='mb-4 md:mb-7 size-[70px] md:size-24' />
      <div>
        <h5 className='text-2xl mb-2 group-hover:text-black'>{title}</h5>
        <p className='text-[#929292] text-base'>{description}</p>
      </div>
    </div>
  )
}

export default FeatureCard