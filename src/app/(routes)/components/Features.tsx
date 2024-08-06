'use client'

import FeatureCard from '@/components/FeatureCard'
import React, { useRef } from 'react'

import Image from 'next/image'
import { featuresData } from '@/constants'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import Slider from 'react-slick'

interface Feature {
  title: string
  description: string
  imageUrl: string
}

const Features: React.FC = () => {
  const sliderRef = useRef<Slider>(null)

  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow:4,
    slidesToScroll: 1,
    initialSlide: 0,
    arrows: false, // Disable default arrows
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1199,
        settings: {
          slidesToShow: 4,
          infinite: true
        }
      },
      {
        breakpoint: 991,
        settings: {
          slidesToShow: 3,
          initialSlide: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          margin: 5
        }
      }
    ]
  }

  const handlePrevClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev()
    }
  }

  const handleNextClick = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext()
    }
  }

  return (
    <section className="py-8 md:py-14 lg:py-28">
      <div className="container">
        <div className="pb-9 md:pb-16">
          <h2 className="heading font-urbanist font-semibold" data-aos="fade-up" data-aos-duration={1000}>
            All the <span className="highlight">features</span> done right.
          </h2>
          <p
            className="max-w-md font-urbanist font-semibold text-[#929292] text-base md:text-lg"
            data-aos="fade-up"
            data-aos-duration={1000}
          >
            Shape and Scale your business, with our unique and high-powered Real Estate CRM.
          </p>
        </div>
        <Slider {...settings} ref={sliderRef}>
          {featuresData.map((item: Feature, index: number) => (
            <div key={index}>
              <FeatureCard {...item} />
            </div>
          ))}
        </Slider>
        <div className="flex items-center gap-3 sm:gap-7 mt-10 lg:mt-20">
          <button onClick={handlePrevClick}>
            <Image src="/images/icons/nav-left.svg" alt="Previous" width={50} height={50} className="size-9 sm:size-12" />
          </button>
          <button onClick={handleNextClick}>
            <Image src="/images/icons/nav-right.svg" alt="Next" width={50} height={50} className="size-9 sm:size-12" />
          </button>
        </div>
      </div>
    </section>
  )
}

export default Features
