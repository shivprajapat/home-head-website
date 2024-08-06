import Image from 'next/image'
import React, { FC, useEffect, useRef, useState } from 'react'

interface AccordionProps {
  title: string
  content: string
  isActive: boolean
  onToggle: () => void
}

const Accordion: FC<AccordionProps> = ({ title, content, isActive, onToggle }) => {
  const contentRef = useRef<HTMLDivElement | null>(null)
  const [height, setHeight] = useState<string>('0px')

  useEffect(() => {
    if (contentRef.current) {
      setHeight(isActive ? `${contentRef.current.scrollHeight}px` : '0px')
    }
  }, [isActive])
  return (
    <div className="flex items-center flex-col mb-5 md:mb-9 last:mb-0">
      <button
        className={`flex items-center gap-4 sm:gap-8 w-full transition-all duration-300 ${isActive ? 'mb-3' : ''}`}
        onClick={onToggle}
      >
        <Image src={isActive ? '/images/icons/dash.svg' : '/images/icons/plus.svg'} alt="icon" width={20} height={20} />
        <p className="text-base sm:text-lg font-urbanist text-white">{title}</p>
      </button>
      <div
        ref={contentRef}
        style={{ maxHeight: height, transition: 'max-height 0.3s ease' }}
        className={`pl-14 ${isActive ? 'mb-3' : ''} overflow-hidden`}
      >
        <p className="text-base text-[#929292]" dangerouslySetInnerHTML={{ __html: content }} />
      </div>
    </div>
  )
}

export default Accordion
