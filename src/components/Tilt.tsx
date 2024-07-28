'use client'
import React, { FC, useEffect, useRef } from 'react'
import VanillaTilt from 'vanilla-tilt'

const Tilt: FC<TiltProps> = (props) => {
  const { options, ...rest } = props
  const tilt = useRef(null)

  useEffect(() => {
    if (tilt.current) {
      VanillaTilt.init(tilt.current, options)
    }
  }, [options])

  return <div ref={tilt} {...rest} />
}

export default Tilt
