'use client'

import React, { FC, Fragment, useState } from 'react'
import { Banner, Features, Product, Instant, MoreFeatures, Frequently } from './components'
import RequestModal from '@/components/RequestModal'

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
      <RequestModal open={open} onClose={() => setOpen(false)} />
    </Fragment>
  )
}

export default HomePage
