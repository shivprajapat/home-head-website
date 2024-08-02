import { useState } from 'react'

import Image from 'next/image'
import { navLinks } from '@/constants'

const Navbar = () => {
  const [active, setActive] = useState('Home')
  const [toggle, setToggle] = useState(false)

  return (
    <header>
      <div className="container">
        <nav className="w-full flex py-4 md:py-6 justify-between items-center">
          <Image
            src="./logo.svg"
            alt="log"
            width={234}
            height={71}
            className="w-36 md:w-40 lg:w-52 xl:w-60"
            data-aos="fade-down"
            data-aos-duration={500}
          />
          <ul
            className="list-none sm:flex hidden justify-end items-center bg-white py-4 px-10 lg:py-5 lg:px-12 rounded-full "
            data-aos="fade-down"
            data-aos-duration={1000}
          >
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-medium  cursor-pointer font-rubik text-[16px] ${active === nav.title ? 'text-red-500' : 'text-black'} ${
                  index === navLinks.length - 1 ? 'mr-0' : 'mr-10'
                }`}
                onClick={() => setActive(nav.title)}
              >
                <a href={`#${nav.id}`}>{nav.title}</a>
              </li>
            ))}
          </ul>

          <div className="sm:hidden flex flex-1 justify-end items-center">
            <Image
              src={toggle ? './images/icons/close.svg' : './images/icons/menu.svg'}
              alt="menu"
              className=" object-contain"
              width={28}
              height={28}
              onClick={() => setToggle(!toggle)}
            />
            <div
              className={`${
                !toggle ? 'hidden' : 'flex'
              } p-6 bg-gradient-header absolute top-[70px] right-0 mx-4 min-w-[140px] rounded-xl animation-slide-top z-[1]`}
            >
              <ul className="list-none flex justify-end items-start flex-1 flex-col">
                {navLinks.map((nav, index) => (
                  <li
                    key={nav.id}
                    className={`font-poppins font-medium font-rubik cursor-pointer text-[16px] ${
                      active === nav.title ? 'text-white' : 'text-slate-300'
                    } ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'}`}
                    onClick={() => setActive(nav.title)}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="sm:flex hidden gap-3.5 items-center" data-aos="fade-down" data-aos-duration={1000}>
            <button className="bg-gradient-btn-green rounded-lg size-10 flex-center">
              <Image src="./images/icons/phone.svg" alt="log" width={14} height={14} />
            </button>
            <div>
              <span className="text-[#A4A4A4] block font-medium font-urbanist">Toll Free No.</span>
              <span className="text-white block font-semibold font-urbanist">+91 2093765495</span>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
