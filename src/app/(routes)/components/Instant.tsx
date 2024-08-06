import Button from '@/components/button'
import IconArrowRight from '@/svg-icons/arrow-right'
import Image from 'next/image'
import React, { FC } from 'react'

const Instant: FC<ModalProps> = ({ modalHandler }) => {
  return (
    <section className="py-10 lg:py-16">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-48 xl:gap-80">
          <div>
            <h2 className="heading font-urbanist font-semibold !leading-tight">
              Easy & Instant <span className="highlight">3rd party Integration</span>
            </h2>
            <p className="font-medium font-urbanist">
              Packed with API features you will love to collaborate with issues and change business. Packed with API features you will love
              to collaborate with.
            </p>
            <div className="mt-7 md:mt-12 lg:mt-16">
              <Button variant="primary" icon={<IconArrowRight />} className="font-rubik font-medium" onClick={modalHandler}>
                Request a Demo
              </Button>
            </div>
          </div>
          <div className="instant-logos relative">
            <div className="flex-between">
              <Image src="/images/instant-logo/acres.png" alt="" width={50} height={50} className="object-contain animate-pulse" />
              <Image
                src="/images/instant-logo/square.png"
                alt=""
                width={50}
                height={50}
                className="object-contain animate-pulse duration-75"
              />
              <Image
                src="/images/instant-logo/mb.png"
                alt=""
                width={50}
                height={50}
                className="object-contain animate-pulse duration-200"
              />
              <Image
                src="/images/instant-logo/top-arrow.png"
                alt=""
                width={50}
                height={50}
                className="object-contain animate-pulse duration-300"
              />
              <Image src="/images/instant-logo/p.png" alt="" width={50} height={50} className="object-contain animate-pulse duration-500" />
            </div>
            <div>
              <Image
                src="/images/3rd-party-Integration.png"
                alt=""
                width={490}
                height={297}
                className="object-contain animate-move-up duration-700"
              />
            </div>
            <div className="flex-between">
              <Image
                src="/images/instant-logo/facebook.png"
                alt=""
                width={35}
                height={35}
                className="object-contain animate-pulse duration-700"
              />
              <Image
                src="/images/instant-logo/linkedin.png"
                alt=""
                width={35}
                height={35}
                className="object-contain animate-pulse duration-500"
              />
              <Image
                src="/images/instant-logo/NoPath.png"
                alt=""
                width={35}
                height={35}
                className="object-contain animate-pulse duration-300"
              />
              <Image
                src="/images/instant-logo/gmail.png"
                alt=""
                width={35}
                height={35}
                className="object-contain animate-pulse duration-200"
              />
              <Image
                src="/images/instant-logo/whatsapp.png"
                alt=""
                width={35}
                height={35}
                className="object-contain animate-pulse duration-150"
              />
              <Image
                src="/images/instant-logo/youtube.png"
                alt=""
                width={35}
                height={50}
                className="object-contain animate-pulse duration-100"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Instant
