import Button from '@/components/button'
import IconArrowRight from '@/svg-icons/arrow-right'
import Image from 'next/image'
import React from 'react'

const Instant = () => {
  return (
    <section>
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-52 lg:gap-80">
          <div>
            <h2 className="heading">
              Easy & Instant <span className="highlight">3rd party Integration</span>
            </h2>
            <p>
              Packed with API features you will love to collaborate with issues and change business. Packed with API features you will love
              to collaborate with.
            </p>
            <div className="mt-7 md:mt-12 lg:mt-16">
              <Button variant="primary" icon={<IconArrowRight />}>
                Request a Demo
              </Button>
            </div>
          </div>
          <div className="instant-logos relative">
            <div className="flex-between">
              <Image src="/images/instant-logo/99.png" alt="" width={50} height={50} className="object-contain" />
              <Image src="/images/instant-logo/99.png" alt="" width={50} height={50} className="object-contain" />
              <Image src="/images/instant-logo/99.png" alt="" width={50} height={50} className="object-contain" />
              <Image src="/images/instant-logo/99.png" alt="" width={50} height={50} className="object-contain" />
            </div>
            <div>
              <Image src="/images/3rd-party-Integration.png" alt="" width={490} height={297} className="object-contain" />
            </div>
            <div className="flex-between">
              <Image src="/images/instant-logo/99.png" alt="" width={50} height={50} className="object-contain" />
              <Image src="/images/instant-logo/99.png" alt="" width={50} height={50} className="object-contain" />
              <Image src="/images/instant-logo/99.png" alt="" width={50} height={50} className="object-contain" />
              <Image src="/images/instant-logo/99.png" alt="" width={50} height={50} className="object-contain" />
            </div>
            {/* <Image src="/images/3rd-party-Integration.png" alt="" width={490} height={297} className="object-contain" /> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Instant
