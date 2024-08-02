'use client'

import React, { FC, Fragment, useState } from 'react'
import { Banner, Features, Product, Instant, MoreFeatures, Frequently } from './components'
import UserModal from '@/components/UserModal'

const HomePage: FC = () => {
  const [open, setOpen] = useState(false)
  const modalHandler = () => setOpen(true)
  return (
    <Fragment>
      <Banner modalHandler={modalHandler} />
      <Features />
      <Product />
      <Instant modalHandler={modalHandler} />
      <MoreFeatures modalHandler={modalHandler} />
      <Frequently />
      <UserModal open={open} onClose={() => setOpen(false)} />
    </Fragment>
  )
}

export default HomePage
