"use client"
import { useState } from "react"
export default function Home() {
  const [selectedOptions, setselectedOptions] = useState("about")
  return (
    <div className="w-full h-[100vh] bg-transparent flex items-center justify-center">
      <div className="w-[80%] h-[80%] flex flex-row">
        <div className="flex flex-col items-start ">
          <div className="flex flex-col items-start gap-5">
            <h1 className="text-[60px] font-Jersey font-semibold  text-white">Leul Mekonnen</h1>
            <h2 className="text-xl font-light  text-white">Exprienced Front-End Engineer</h2>
            <p className="text-sm font-light  text-gray-500">I build exceptional and accessible digital experiences for the web</p>
          </div>
          <div className="flex flex-col items-start gap-5 mt-40">
            <h1 className=" flex flex-row items-center gap-3 text-white"> <div className="w-24 h-[1px] bg-gray-400"/>About</h1>
            <h1 className=" flex flex-row items-center gap-3 text-white"><div className="w-24 h-[1px] bg-gray-400"/>Expriences</h1>
            <h1 className=" flex flex-row items-center gap-3 text-white"><div className="w-24 h-[1px] bg-gray-400"/>Projects</h1>
          </div>
        </div>
      </div>
    </div>
  )
}
