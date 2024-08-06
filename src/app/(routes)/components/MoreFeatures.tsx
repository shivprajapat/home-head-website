'use client'
import Button from '@/components/button'
import { feedbacksData, moreFeaturesData } from '@/constants'
import IconArrowRight from '@/svg-icons/arrow-right'
import Image from 'next/image'
import React, { FC } from 'react'
const MoreFeatures: FC<ModalProps> = ({ modalHandler }) => {
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 py-7 md:py-16 lg:py-10">
          <h2 className="heading font-urbanist font-semibold" data-aos="fade-up" data-aos-duration={1000}>
            more <span className="highlight">features</span>
          </h2>
          <div className="pb-0 md:pb-0 sm:pb-28 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-3 lg:grid-cols-1 lg:max-w-lg w-full">
            {moreFeaturesData.map((item, index) => {
              const { icon, title, description } = item
              return (
                <div
                  key={index}
                  className="w-full flex items-center flex-col lg:flex-row gap-10 lg:gap-14 lg:mb-5 last:mb-0 relative border-2 before:w-0 before:h-full before:absolute before:bg-[#161616] hover:before:w-full border-[#161616] before:transition-all before:duration-500"
                >
                  <div className="relative size-52 ml-4">
                    <Image src={icon} alt="icon" fill />
                  </div>
                  <div className="relative p-5 lg:p-0">
                    <h4 className="text-2xl text-white mb-2 font-semibold font-urbanist">{title}</h4>
                    <p className="text-base text-[#929292] font-medium">{description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className="bg-gradient-green rounded-lg p-6 md:p-9 lg:p-12 mt-0 lg:mt-32 mb-20 lg:mb-28 max-w-screen-lg mx-auto relative">
          <Image src="/images/layer-bg.png" className="object-cover" alt="layer" fill />

          <div className="max-w-md lg:max-w-full w-full" data-aos="fade-up" data-aos-duration={1000}>
            <h2 className="heading sm:leading-tight font-urbanist font-semibold">
              Eager to 4X your revenue? <br className="hidden sm:block" /> {`Let's connect!`}
            </h2>
            <div className="flex justify-start flex-col sm:flex-row gap-2 sm:gap-5 mt-7 md:mt-5 font-rubik font-medium flex-wrap">
              <Button variant="primary" icon={<IconArrowRight />} onClick={modalHandler}>
                {`Start Now - It's Free`}
              </Button>

              <Button variant="black" icon={<IconArrowRight />} onClick={modalHandler}>
                Request a Demo
              </Button>
            </div>
          </div>
          <Image
            src="/images/revenue.png"
            alt="log"
            width={303}
            height={350}
            className="md:absolute md:-top-[40px] lg:-top-[60px] md:right-3 lg:right-7 z-10 mt-10 md:mt-0 md:h-[300px] w-fit lg:h-[377px]"
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
