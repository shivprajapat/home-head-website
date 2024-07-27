import React, { FC, Fragment } from 'react'
import { Banner, Features, Product, Instant, MoreFeatures, Frequently } from './components'

const HomePage: FC = () => {
  return (
    <Fragment>
      <Banner />
      <Features />
      <Product />
      <Instant />
      <MoreFeatures />
      <Frequently />
    </Fragment>
  )
}

export default HomePage
