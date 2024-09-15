import React from 'react'
import { LuImport } from "react-icons/lu"
import side_eye_cat from "../assets/cat-2.jpeg"
 function Hero() {
    return (
      <section >
        <div className='flex flex-col items-center justify-center w-full -z-10'>
          <h1 className=' mt-16 overflow-hidden text-[12vw] font-semibold uppercase leading-none'>Saikat <br /> mandal</h1>
          <div className='mt-8 '>
            <a href="https://drive.google.com/file/d/1PS43BNGGxcEH4wo_AyNVWASzRFErnPCM/view?usp=drive_link"
            target="_blank" rel='noopener noreferrer '
            download
            className='flex items-center p-2 rounded-xl bg-lime-300 px-3 font-sans font-medium text-black hover:bg-lime-400'
            >
              <span>Resume</span>
              <LuImport className='ml-2'/>
            </a>
          </div>
          <div className='w-full'>
            <img src={side_eye_cat} alt="" className='mt-8 h-[500px] w-full object-cover'/>
          </div>
        </div>
      </section>
    )
  }

export default Hero