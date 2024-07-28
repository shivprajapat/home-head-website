import Button from '@/components/button'
import { feedbacksData, moreFeaturesData } from '@/constants'
import IconArrowRight from '@/svg-icons/arrow-right'
import Image from 'next/image'
import React from 'react'

const MoreFeatures = () => {
  return (
    <section className="py-10">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <h2 className="heading">
              more <span className="highlight">features</span>
            </h2>
          </div>
          <div>
            {moreFeaturesData.map((item, index) => {
              const { icon, title, description } = item
              return (
                <div key={index} className="flex items-center flex-col md:flex-row gap-10 lg:gap-14 mb:5 last:mb-0">
                  <div className="relative size-52">
                    <Image src={icon} alt="icon" fill />
                  </div>
                  <div>
                    <h4 className="text-2xl text-white mb-2 font-semibold">{title}</h4>
                    <p className="text-base text-[#929292] font-medium">{description}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
        <div className="bg-gradient-green rounded-lg p-12 mb-12 lg:mb-16">
          <h2 className="heading leading-tight">
            Eager to 4X your revenue? <br /> {`Let's connect!`}
          </h2>
          <div className="flex justify-start flex-col sm:flex-row gap-5 mt-7 md:mt-14">
            <Button variant="primary" icon={<IconArrowRight />}>
              {`Start Now - It's Free`}
            </Button>

            <Button variant="black" icon={<IconArrowRight />}>
              Request a Demo
            </Button>
          </div>
        </div>
        <div className="max-w-screen-md mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-10">
            {feedbacksData.map((item, index) => {
              const { icon, title, number } = item
              return (
                <div key={index} className="mb:5 last:mb-0 text-center">
                  <div className="relative size-10 md:size-16 mx-auto mb-2">
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
