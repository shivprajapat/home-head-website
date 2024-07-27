'use client'
import React, { FC } from 'react'
import { cn } from '@/utils/tailwind.merge'

// Define the ButtonType interface with an optional variant prop
interface ButtonType {
  children: React.ReactNode
  type?: 'button' | 'submit' | 'reset'
  icon?: React.ReactNode
  className?: string
  onClick?: () => void
  variant?: 'primary' | 'outline' // New variant prop
}

// Define the Button component
const Button: FC<ButtonType> = ({
  children,
  type = 'button',
  icon,
  className,
  onClick,
  variant = 'primary' // Default to 'primary' variant
}) => {
  // Define base styles for the button
  const baseStyle =
    'relative rounded px-5 py-2.5 overflow-hidden group transition-all ease-out duration-300 flex justify-between items-center gap-2 font-medium border'

  // Define variant-specific styles
  const variantStyles =
    variant === 'primary'
      ? 'bg-white text-black hover:bg-transparent hover:border-white hover:text-white' // white button styles
      : 'bg-transparent border-white text-white hover:bg-white hover:text-black' // Outline button styles

  return (
    <button className={`${cn(`${baseStyle} ${variantStyles} ${className}`)}`} type={type} onClick={onClick}>
      <span>{children}</span>
      {icon && icon}
    </button>
  )
}

export default Button
