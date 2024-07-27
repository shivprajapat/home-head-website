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
          <Image src="./logo.svg" alt="log" width={234} height={71} className="w-36 md:w-52 lg:w-60" />

          <ul className="list-none sm:flex hidden justify-end items-center bg-white py-5 px-12 rounded-full">
            {navLinks.map((nav, index) => (
              <li
                key={nav.id}
                className={`font-medium cursor-pointer text-[16px] ${active === nav.title ? 'text-red-500' : 'text-black'} ${
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
              } p-6 bg-gradient-header absolute top-[70px] right-0 mx-4 min-w-[140px] rounded-xl animation-slide-top`}
            >
              <ul className="list-none flex justify-end items-start flex-1 flex-col">
                {navLinks.map((nav, index) => (
                  <li
                    key={nav.id}
                    className={`font-poppins font-medium cursor-pointer text-[16px] ${
                      active === nav.title ? 'text-white' : 'text-dimWhite'
                    } ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'}`}
                    onClick={() => setActive(nav.title)}
                  >
                    <a href={`#${nav.id}`}>{nav.title}</a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div className="sm:flex hidden gap-3.5 items-center">
            <button className="bg-gradient-green rounded-lg size-10 flex-center">
              <Image src="./images/icons/phone.svg" alt="log" width={14} height={14} />
            </button>
            <div>
              <span className="text-[#A4A4A4] block font-medium">Toll Free No.</span>
              <span className="text-white block font-semibold">+91 2093765495</span>
            </div>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
