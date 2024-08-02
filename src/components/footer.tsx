import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <footer className="mb-4 md:mb-7">
      <div className="container">
        <div className="mb-5 md:mb-6">
          <h5 className="text-base  mb-3 lg:mb-6">Find Us Here</h5>
          <div className="flex items-start gap-3.5 md:gap-5 flex-wrap">
            <Link href="https://www.facebook.com/TelepathySolutions" target="_blank" className="hover:animate-pulse">
              <Image src="./images/icons/facebook.svg" alt="facebook" width={40} height={40} />
            </Link>
            <Link href="https://www.linkedin.com/company/telepathyinfotech/" target="_blank" className="hover:animate-pulse">
              <Image src="./images/icons/linkedin.svg" alt="linkedin" width={40} height={40} />
            </Link>
            <Link href="https://www.youtube.com/@Telepathyinfo" target="_blank" className="hover:animate-pulse">
              <Image src="./images/icons/youtube.svg" alt="youtube" width={40} height={40} />
            </Link>
            <Link href="https://x.com/Telepathysocial" target="_blank" className="hover:animate-pulse">
              <Image src="./images/icons/youtube.svg" alt="youtube" width={40} height={40} />
            </Link>
            <div className="gap-2 flex items-center">
              <Link href="#" target="_blank" className="hover:animate-pulse">
                <Image src="/images/icons/google-play.png" alt="google-play" width={135} height={40} />
              </Link>
              <Link href="#" target="_blank" className="hover:animate-pulse">
                <Image src="/images/icons/app-store.png" alt="app-store" width={135} height={40} />
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center sm:justify-between justify-center text-center flex-wrap text-base text-[#929292] font-urbanist font-medium">
          <p className="sm:text-center">
            Powered by
            <Link href="http://www.telepathyinfotech.com/" target="_blank" className="text-[#16B98D]">
              Telepathy Infotech Pvt Ltd
            </Link>
            | All Rights Reserved © 2024
          </p>
          <p className="sm:text-center">Privacy Policy | Terms </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
