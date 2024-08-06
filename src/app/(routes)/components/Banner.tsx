import Button from '@/components/button'
import IconArrowRight from '@/svg-icons/arrow-right'
import Image from 'next/image'
import React, { FC } from 'react'
// Define a type for the props

const Banner: FC<ModalProps> = ({ modalHandler }) => {
  return (
    <section id="home" className="pt-24 md:pt-32 lg:pt-36 relative pb-5 sm:pb-0">
      <Image src="/images/home-layer.svg" className="-z-10 object-cover" alt="layer" fill />
      <div className="container">
        <div className="max-w-lg lg:max-w-4xl mx-auto text-center">
          <div className="bg-gradient-border w-fit mx-auto rounded-full p-[1px] mb-3" data-aos="fade-up" data-aos-duration={500}>
            <p className="text-white uppercase text-lg font-semibold font-urbanist bg-black rounded-full px-4 py-2">ONE STOP SOLUTION</p>
          </div>
          <h1
            className="text-3xl md:leading-normal lg:text-5xl text-white font-semibold font-urbanist"
            data-aos="fade-up"
            data-aos-duration={1000}
          >
            Empowering Your <span className="text-[#A4A4A4]">Real Estate Business</span> with Seamless CRM Solution
          </h1>
          <div
            className="flex-center flex-col z-10 relative font-rubik font-medium sm:flex-row gap-5 mt-7 md:mt-14"
            data-aos="fade-up"
            data-aos-duration={1500}
          >
            <Button variant="outline" icon={<IconArrowRight />} onClick={modalHandler}>
              Request a Demo
            </Button>
          </div>
        </div>
        <div className="mt-56 md:mt-28 lg:my-0 relative h-full max-w-6xl mx-auto w-full">
          <Image
            src="/images/sales-analytics.png"
            alt="log"
            width={238}
            height={330}
            className="absolute -left-[10%] sm:left-[1%] -top-48 sm:-top-[10%] animate-move-up z-10 h-48 md:w-48 md:h-52 lg:h-64 object-contain mt-14 rounded-xl"
          />
          <Image
            src="/images/property-type.png"
            alt="log"
            width={157}
            height={190}
            className=" h-48 sm:h-fit absolute right-0 sm:right-[5%] -top-36 sm:top-[5%] animate-move-down z-10 rounded-md"
          />
          <div className="w-full -mt-10 md:-mt-20 relative" data-aos="fade-up" data-aos-duration={1500}>
            <Image src="/images/banner.png" alt="log" fill className="!static" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
