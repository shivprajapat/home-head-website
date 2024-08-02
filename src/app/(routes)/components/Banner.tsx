import Button from '@/components/button'
import IconArrowRight from '@/svg-icons/arrow-right'
import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <section id="home" className="py-8 md:py-14 2xl:py-16 relative">
      <div className="container">
        <div className="max-w-2xl mx-auto text-center">
          <div className="bg-gradient-border w-fit mx-auto rounded-full p-[1px] mb-3" data-aos="fade-up" data-aos-duration={500}>
            <p className="text-white uppercase text-lg font-semibold font-urbanist bg-black rounded-full px-4 py-2">
              Homelead crm software
            </p>
          </div>
          <h1
            className="text-3xl md:text-4xl leading-10 lg:text-6xl text-white font-semibold font-urbanist tracking-wide"
            data-aos="fade-up"
            data-aos-duration={1000}
          >
            One Stop Solution for <span className="text-[#A4A4A4]">RealEstate</span> Owner{' '}
          </h1>
          <div
            className="flex-center flex-col  font-rubik font-medium sm:flex-row gap-5 mt-7 md:mt-14"
            data-aos="fade-up"
            data-aos-duration={1500}
          >
            <Button variant="primary" icon={<IconArrowRight />}>
              {`Start Now - It's Free`}
            </Button>

            <Button variant="outline" icon={<IconArrowRight />}>
              Request a Demo
            </Button>
          </div>
        </div>
        <div className="mt-10 md:mt-28 lg:my-0 relative h-full max-w-6xl mx-auto w-full">
          <Image
            src="/images/sales-analytics.png"
            alt="log"
            width={238}
            height={330}
            className="absolute left-[1%] -top-[10%] animate-move-up z-10 hidden md:block md:w-48 md:h-52 lg:h-64 object-contain mt-14 rounded-xl"
          />
          <Image
            src="/images/property-type.png"
            alt="log"
            width={157}
            height={190}
            className="absolute right-[5%] top-[5%] animate-move-down z-10 hidden md:block rounded-md"
          />
          <div className="w-full -mt-10 md:-mt-20 relative" data-aos="fade-up" data-aos-duration={1500}>
            <Image src="/images/banner.png" alt="log" fill className="!static" loading="lazy" />
          </div>
        </div>
      </div>
      <Image src="/images/home-layer.svg" className="-z-10" alt="layer" fill />
    </section>
  )
}

export default Banner
