import React from 'react'
import arrow from './../assets/arrow.png'
import Image from 'next/image'
import ProjectsData from './ProjectData'
const ProjectSide = () => {
  return (
    <div className="flex flex-col w-1/2 mb-20  h-full justify-start items-start sm:w-[95%] sm:pl-10 ">
      {/* {
        ProjectsData.map((items, i) => {
          return (

          )
        } )
      } */}
      <div>
        <h3 className="text-gray-400 lg:pt-10  sm:pt-3">
          <div className="flex flex-row items-center gap-2">
            <h1 className="text-3xl text-white font-titibold">1</h1>
            <h1 className="text-xl text-white">Borsa</h1>
          </div>
          A Mobile application build using React-Native , Typescript and Expo for bundling the
          Javascript. My major role on this project was creating a user exprience on the frontend
          side of the project.
        </h3>
      </div>

      <Image src={arrow} alt="s" className="arrow" />
    </div>
  )
}

export default ProjectSide
