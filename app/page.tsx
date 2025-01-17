'use client'
import { useState } from 'react'
import { AboutSide } from './Components/AboutSide'
export default function Home() {
  const [selectedOptions, setselectedOptions] = useState('About')
  return (
    <div className="w-full lg:h-[100vh] bg-transparent flex items-center justify-center ">
      <div className="lg:w-[80%] h-[80%] flex lg:flex-row items-center justify-between sm:flex-col md:flex-row md:w-[95%] md:pt-20 lg:pt-1  ">
        <div className="flex flex-col items-start ">
          <div className="flex flex-col items-start gap-5 sm:gap-1">
            <h1 className="lg:text-[60px] font-Jersey font-semibold  text-white sm:text-center sm:w-full sm:text-[36px] ">
              Leul Mekonnen
            </h1>
            <h2 className="text-xl font-light  text-white sm:text-center sm:w-full ">
              Exprienced Front-End Engineer
            </h2>
            <p className="text-sm font-light  text-gray-500 sm:text-center  sm:w-[80%] sm:pl-14">
              I build exceptional and accessible digital experiences for the web
            </p>
          </div>
          <div className="lg:flex flex-col items-start gap-6 mt-28 sm:hidden md:flex lg:pl-24 ">
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
            <h1
              onClick={() => setselectedOptions('Contacts')}
              className={`flex flex-row items-center gap-3 hover:cursor-pointer ${
                selectedOptions === 'Contacts' ? 'text-white' : 'text-gray-500'
              } `}
            >
              <div
                className={` ${
                  selectedOptions === 'Contacts' ? 'w-32 h-[1px] bg-white' : 'w-16 '
                }h-[1px] bg-gray-600`}
              />
              Contacts
            </h1>
          </div>
        </div>
        <div className="lg:flex md:flex md:w-1/2  sm:hidden lg:w-1/2 ">
          {selectedOptions === 'About' && <AboutSide />}
        </div>
        <div className="lg:hidden sm:flex md:hidden">
          <AboutSide />
        </div>
      </div>
    </div>
  )
}
