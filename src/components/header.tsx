import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Header = () => {
  return (
    <div className="py-4 md:py-7 lg:py-9">
      <div className="container">
        <nav className=" flex flex-wrap items-center justify-between mx-auto">
          <Link href="/">
            <Image src="./logo.svg" alt="log" width={234} height={71} />
          </Link>
          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            {/* <button
              type="button"
              className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Get started
            </button> */}
            Hello Phone
          </div>
          <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1">
            <ul className="flex flex-col items-center px-14 font-medium md:space-x-24 h-14 rounded-full md:flex-row bg-white text-black text-base">
              <li>
                <Link href="#">CRM</Link>
              </li>
              <li>
                <Link href="#">Overview </Link>
              </li>
              <li>
                <Link href="#">Features</Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </div>
  )
}

export default Header
