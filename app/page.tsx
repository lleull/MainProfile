'use client'
import { useState } from 'react'
import { AboutSide } from './Components/AboutSide'
export default function Home() {
  const [selectedOptions, setselectedOptions] = useState('About')
  return (
    <div className="w-full h-[100vh] bg-transparent flex items-center justify-center">
      <div className="w-[80%] h-[80%] flex flex-row items-center justify-between">
        <div className="flex flex-col items-start ">
          <div className="flex flex-col items-start gap-5">
            <h1 className="text-[60px] font-Jersey font-semibold  text-white">Leul Mekonnen</h1>
            <h2 className="text-xl font-light  text-white">Exprienced Front-End Engineer</h2>
            <p className="text-sm font-light  text-gray-500">
              I build exceptional and accessible digital experiences for the web
            </p>
          </div>
          <div className="flex flex-col items-start gap-6 mt-28 ">
            <h1
              onClick={() => setselectedOptions('About')}
              className={`flex flex-row items-center gap-3 hover:cursor-pointer ${
                selectedOptions === 'About' ? 'text-white' : 'text-gray-500'
              } `}
            >
              {' '}
              <div
                className={`${
                  selectedOptions === 'About' ? 'w-32 bg-white h-[1px] ' : 'w-16 '
                }h-[1px] bg-gray-600`}
              />
              About
            </h1>
            <h1
              onClick={() => setselectedOptions('Expriences')}
              className={`flex flex-row items-center gap-3 hover:cursor-pointer ${
                selectedOptions === 'Expriences' ? 'text-white' : 'text-gray-500'
              } `}
            >
              <div
                className={` ${
                  selectedOptions === 'Expriences' ? 'w-32 h-[1px] bg-white' : 'w-16 '
                }h-[1px] bg-gray-600`}
              />
              Expriences
            </h1>
            <h1
              onClick={() => setselectedOptions('Projects')}
              className={`flex flex-row items-center gap-3 hover:cursor-pointer ${
                selectedOptions === 'Projects' ? 'text-white' : 'text-gray-500'
              } `}
            >
              <div
                className={` ${
                  selectedOptions === 'Projects' ? 'w-32 h-[1px] bg-white' : 'w-16 '
                }h-[1px] bg-gray-600`}
              />
              Projects
            </h1>
          </div>
        </div>
       {selectedOptions === "About" && <AboutSide/>} 
      </div>
    </div>
  )
}
