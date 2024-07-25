import React, { FC, Fragment } from 'react'
import Banner from './components/banner'
import Features from './components/Features'

const HomePage: FC = () => {
  return (
    <Fragment>
      <Banner />
      <Features />
    </Fragment>
  )
}

export default HomePage
