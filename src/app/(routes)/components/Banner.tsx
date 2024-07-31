import Button from '@/components/button'
import IconArrowRight from '@/svg-icons/arrow-right'
import Image from 'next/image'
import React from 'react'

const Banner = () => {
  return (
    <section id="home" className="py-8 md:py-14 2xl:py-16 ">
      <div className="container">
        <div className="max-w-xl mx-auto text-center">
          <div className="bg-gradient-border w-fit mx-auto rounded-full p-[1px] mb-3" data-aos="fade-up" data-aos-duration={500}>
            <p className="text-white uppercase text-lg font-semibold bg-black rounded-full px-4 py-2">Homelead crm software</p>
          </div>
          <h1 className="text-4xl leading-10 lg:text-6xl text-white font-semibold" data-aos="fade-up" data-aos-duration={1000}>
            One Stop Solution for <span className="text-[#A4A4A4]">RealEstate</span> Owner{' '}
          </h1>
          <div className="flex-center flex-col sm:flex-row gap-5 mt-7 md:mt-14" data-aos="fade-up" data-aos-duration={1500}>
            <Button variant="primary" icon={<IconArrowRight />}>
              {`Start Now - It's Free`}
            </Button>

            <Button variant="outline" icon={<IconArrowRight />}>
              Request a Demo
            </Button>
          </div>
        </div>
        <div className="relative h-full max-w-6xl mx-auto w-full">
          <Image
            src="/images/sales-analytics.svg"
            alt="log"
            width={238}
            height={330}
            className="absolute left-0 -top-[10%] animate-move-up z-10"
          />
          <Image
            src="/images/property-type.svg"
            alt="log"
            width={157}
            height={190}
            className="absolute right-0 top-[5%] animate-move-down z-10"
          />
          <div className="w-full -mt-10 md:-mt-20"  data-aos="fade-up" data-aos-duration={1500}>
            <Image src="/images/banner.png" alt="log" fill className="!static" />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner
