'use client'

import React, { FC, ReactNode, useEffect } from 'react'

import WhatsappButton from '@/components/WhatsappButton'
import Footer from '@/components/footer'
import Header from '@/components/header'
import AOS from 'aos'
import 'aos/dist/aos.css'

type Props = { children: ReactNode }
const PageLayout: FC<Props> = ({ children }) => {
  useEffect(() => {
    AOS.init()
    AOS.refresh()
  }, [])
  return (
    <main>
      <Header />
      {children}
      <WhatsappButton />
      <Footer />
    </main>
  )
}

export default PageLayout
