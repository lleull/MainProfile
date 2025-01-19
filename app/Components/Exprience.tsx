import React from 'react'
import { imageIcons } from '../utils/Projects'
import Image from 'next/image'
const Exprience = () => {
  return (
    <div className="h-full w-full items-center flex justify-center">
      {imageIcons.map((img, i) => {
        return <Image src={img.img1} alt="sd" key={i} className='bounceimg' />
      })}
    </div>
  )
}

export default Exprience
