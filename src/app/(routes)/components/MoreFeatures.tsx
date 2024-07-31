'use client'
import Button from '@/components/button'
import { feedbacksData, moreFeaturesData } from '@/constants'
import IconArrowRight from '@/svg-icons/arrow-right'
import Image from 'next/image'
import React from 'react'
const MoreFeatures = () => {
  return (
    <section className="py-10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pb-10">
            <h2 className="heading" data-aos="fade-up" data-aos-duration={1000}>
              more <span className="highlight">features</span>
            </h2>
          <div className='pb-28'>
            {moreFeaturesData.map((item, index) => {
              const { icon, title, description } = item
              return (
                <div key={index} className="flex items-center flex-col group md:flex-row gap-10 lg:gap-14 mb:5 last:mb-0 relative">
                  <div className="absolute h-full w-full bg-slate-800 rounded-md -top-10 group-hover:top-0 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                  <div className="relative size-52 transform group-hover:-translate-y-4 duration-500 ease-in-out">
                    <Image src={icon} alt="icon" fill />
                  </div>
                  <div className="relative">
                    <h4 className="text-2xl group-hover:text-white text-white mb-2 font-semibold">{title}</h4>
                    <p className="text-base group-hover:text-white text-[#929292] font-medium">{description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className="bg-gradient-green rounded-lg p-12 mb-12 lg:mb-16 relative">
          <div  data-aos="fade-up" data-aos-duration={1000}>
            <h2 className="heading leading-tight">
              Eager to 4X your revenue? <br /> {`Let's connect!`}
            </h2>
            <div className="flex justify-start flex-col sm:flex-row gap-5 mt-7 md:mt-5">
              <Button variant="primary" icon={<IconArrowRight />}>
                {`Start Now - It's Free`}
              </Button>

              <Button variant="black" icon={<IconArrowRight />}>
                Request a Demo
              </Button>
            </div>
          </div>
            <Image
              src="/images/revenue.png"
              alt="log"
              width={564}
              height={450}
              className="-bottom-4 absolute -right-3 z-10"
            />
        </div>
        <div className="max-w-screen-md mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-10" data-aos="fade-up" data-aos-duration={1000}>
            {feedbacksData.map((item, index) => {
              const { icon, title, number } = item
              return (
                <div key={index} className="mb:5 last:mb-0 text-center">
                  <div className="relative size-10 md:size-16 mx-auto mb-3 sm:mb-2">
                    <Image src={icon} alt="icon" fill />
                  </div>
                  <div>
                    <h4 className="text-2xl text-white font-semibold">{number}</h4>
                    <p className="text-base text-[#929292] font-medium">{title}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}

export default MoreFeatures
