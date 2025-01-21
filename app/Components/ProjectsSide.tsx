import React, { useState } from 'react'
import arrow from './../assets/arrow.png'
import Image from 'next/image'
import ProjectsData from './ProjectData'
const ProjectSide = () => {
  const [countArray, setcountArray] = useState(1)

  const handleNextProject = () => {
    if (countArray === ProjectsData.length) {
      setcountArray(1)
    } else {
      setcountArray(countArray + 1)
    }
  }
  return (
    <div className="flex flex-col w-1/2 mb-20  h-full justify-start items-start sm:w-[95%] sm:pl-10 ">
      {ProjectsData.map((data, i) => {
        return data.id == countArray ? (
          <div  key={i}>
            <h3 className="text-gray-400 lg:pt-10  sm:pt-3">
              <div className="flex flex-row items-center gap-2">
                <h1 className="text-[90px] text-red-900 font-titibold">{data.id}</h1>
                <h1 className="text-[90px] text-white">{data.name}</h1>
              </div>
              {data.desc}
            </h3>
          </div>
        ) : (
          ''
        )
      })}

      <Image onClick={() => handleNextProject()} src={arrow} alt="s" className="arrow" />
    </div>
  )
}

export default ProjectSide
