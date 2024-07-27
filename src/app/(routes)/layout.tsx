'use client'

import React, { FC, ReactNode } from 'react'

import Footer from '@/components/Footer'
import Header from '@/components/Header'

type Props = { children: ReactNode }
const PageLayout: FC<Props> = ({ children }) => {
  return (
    <main>
      <Header />
      {children}
      <Footer />
    </main>
  )
}

export default PageLayout
