'use client'
import Button from '@/components/button'
import { feedbacksData, moreFeaturesData } from '@/constants'
import IconArrowRight from '@/svg-icons/arrow-right'
import Image from 'next/image'
import React from 'react'
const MoreFeatures = () => {
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-10 mb-0 xl:mb-20">
          <h2 className="heading font-urbanist font-semibold" data-aos="fade-up" data-aos-duration={1000}>
            more <span className="highlight">features</span>
          </h2>
          <div className="pb-0 md:pb-0 sm:pb-28">
            {moreFeaturesData.map((item, index) => {
              const { icon, title, description } = item
              return (
                <div key={index} className="flex items-center flex-col md:flex-row gap-10 lg:gap-14 mb:5 last:mb-0 relative">
                  <div className="relative size-52 transform duration-500 ease-in-out">
                    <Image src={icon} alt="icon" fill />
                  </div>
                  <div className="relative">
                    <h4 className="text-2xl text-white mb-2 font-semibold font-urbanist">{title}</h4>
                    <p className="text-base text-[#929292] font-medium">{description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className="bg-gradient-green rounded-lg p-6 lg:p-12 mb-12 lg:mb-16 relative">
          <div className="max-w-md lg:max-w-full w-full" data-aos="fade-up" data-aos-duration={1000}>
            <h2 className="heading sm:leading-tight font-urbanist font-semibold">
              Eager to 4X your revenue? <br /> {`Let's connect!`}
            </h2>
            <div className="flex justify-start flex-col sm:flex-row gap-2 sm:gap-5 mt-7 md:mt-5 font-rubik font-medium flex-wrap">
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
            className="-bottom-4 md:absolute -right-3 z-10 mt-4 md:mt-0 sm:h-60 sm:w-72 lg:h-80 xl:h-96 lg:w-[450px] xl:w-[500px]"
          />
        </div>
        <div className="max-w-screen-md mx-auto">
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-10" data-aos="fade-up" data-aos-duration={1000}>
            {feedbacksData.map((item, index) => {
              const { icon, title, number } = item
              return (
                <div key={index} className="mb:5 last:mb-0 text-center">
                  <div className="relative size-10 md:size-16 mx-auto mb-3 sm:mb-2">
                    <Image src={icon} alt="icon" fill />
                  </div>
                  <div>
                    <h4 className="text-2xl text-white font-semibold font-urbanist">{number}</h4>
                    <p className="text-base text-[#929292] font-medium font-urbanist">{title}</p>
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
