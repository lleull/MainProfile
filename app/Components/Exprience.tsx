import React from 'react'
import { imageIcons } from '../utils/Projects'
import Image from 'next/image'
const Exprience = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <h1 className="headText">Expertise Techs</h1>
      <div className="h-full w-full sm:w-[95%] sm:bg-none p-10 lg:bg-slate-700 md:bg-slate-700  rounded-3xl flex-wrap items-center flex justify-center">
        {imageIcons.map((img, i) => {
          return <Image src={img.img1} alt="sd" key={i} className="bounceimg" />
        })}
      </div>
    </div>
  )
}

export default Exprience
