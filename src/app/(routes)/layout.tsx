'use client'

import React, { FC, ReactNode } from 'react'

import Footer from '@/components/Footer'
import Header from '@/components/Header'
import WhatsappButton from '@/components/WhatsappButton'

type Props = { children: ReactNode }
const PageLayout: FC<Props> = ({ children }) => {
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
