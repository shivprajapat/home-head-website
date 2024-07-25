'use client'
import React, { FC } from 'react'
import Image from 'next/image'

import { cn } from '@/utils/tailwind.merge'

const Button: FC<ButtonType> = ({ children, type, icon, fullWidth, className, onClick }) => {
  const defaultStyle =
    'relative rounded px-5 py-2.5 overflow-hidden group bg-primary text-white transition-all ease-out duration-300 flex justify-between items-center'
  return (
    <>
      <button className={`${cn(`${fullWidth && 'w-full'} ${defaultStyle} ${className}`)}`} type={type} onClick={onClick}>
        <span className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000 transform translate-x-12 bg-white opacity-50 rotate-12 group-hover:-translate-x-64 ease" />
        <span className="relative">{children}</span>
        {icon && <Image src={icon} alt="icon" />}
      </button>
    </>
  )
}

export default Button
