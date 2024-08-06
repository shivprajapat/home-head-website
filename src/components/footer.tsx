import { socialLinks } from '@/constants'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="mb-4 md:mb-9">
      <div className="container">
        <div className="mb-6 md:mb-8 lg:mb-12">
          <h5 className="text-base  mb-3 lg:mb-6">Find Us Here</h5>
          <div className="flex items-start gap-3.5 md:gap-5 flex-wrap">
            {socialLinks.map((social, index) => (
              <Link
                href={social.href}
                key={index}
                target="_blank"
                style={{ backgroundColor: social.bgColor }}
                className="size-10 p-2.5 rounded transition-all duration-500 hover:rounded-[50%]"
              >
                <Image src={social.icon} alt={social.href} width={40} height={40} />
              </Link>
            ))}
            <div className="gap-4 flex items-center mt-2 sm:mt-0">
              <Link href="#" target="_blank" className="hover:animate-pulse">
                <Image
                  src="/images/icons/google-play.png"
                  alt="google-play"
                  width={130}
                  height={40}
                  className="bg-white w-36 p-1 rounded"
                />
              </Link>
              <Link href="#" target="_blank" className="hover:animate-pulse">
                <Image src="/images/icons/app-store.png" alt="app-store" width={130} height={40} className="bg-white w-36 p-1 rounded" />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-2 sm:justify-between justify-center text-center flex-wrap text-base text-[#929292] font-urbanist font-medium">
          <p className="sm:text-center">
            Powered by
            <Link href="http://www.telepathyinfotech.com/" target="_blank" className="text-[#16B98D] px-1">
              Telepathy Infotech Pvt Ltd
            </Link>
            | All Rights Reserved © {new Date().getFullYear()}
          </p>
          <p className="sm:text-center">Privacy Policy | Terms </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
