import React from 'react'
import Text from './Text'
import Button from './Button'
import Image from 'next/image'
import bg from '../../public/bg.jpg'
import profile from '../../public/profile.jpg'
import "./Css/hero.css"

export default function Hero() {
  return (
    <div className='container'>
      <div id="home" className='overflow-hidden'>
        <Image src={bg} alt="Hero" className="absolute blur-xl -z-1" />
        
        <div className='translate-y-[5rem] me'>
          <p className="text-2xl z-50 md:text-4xl lg:text-7xl text-white translate-x-[16rem] txt font-bold inter-var">
            <Text></Text>
          </p>

          <p className="text-base md:text-xl mt-4 translate-y-[-16rem] translate-x-[17rem] text-white text-wrap font-normal first inter-var">
            Creative Web Designer & Developer bringing ideas to life through code.
          </p>

          <p className="text-base md:text-xl mt-2 translate-y-[-16rem] translate-x-[17rem] w-[39em] second text-wrap text-white font-normal inter-var">
            I craft modern, responsive, and user-friendly websites using technologies like React, Nextjs, Tailwind CSS, Node.js, and MongoDB.
          </p>

          

          <Button></Button>
        </div>

        <Image src={profile} alt="Hero" className="absolute profile right-50 rounded-full aspect-square object-cover translate-y-[-36em] z-10" />
      </div>

    </div>
  )
}
