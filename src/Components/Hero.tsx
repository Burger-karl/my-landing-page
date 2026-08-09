import React from 'react'
import Image from 'next/image'
import { FaPlay } from "react-icons/fa";

const Hero = () => {
  return (
    <div className="relative grid md:grid-cols-2 gap-6 bg-[#49BBBD] w-full min-h-[34rem] md:min-h-[30rem] lg:min-h-[44rem] [clip-path:ellipse(120%_100%_at_50%_0%)]">
      <div className="text-white px-8 md:px-12 lg:px-24 flex flex-col justify-center gap-6 z-10">
        <h1 className="font-bold text-3xl md:text-5xl leading-tight">
          <span className="text-[#F48C06]">Studying</span> Online is now much easier
        </h1>

        <p className="text-lg md:text-xl text-white/90 max-w-md">
          TOTC is an interesting platform that will teach you in a more interactive way
        </p>

        <div className="flex items-center gap-6 flex-wrap">
          <button className="btn-ghost-totc">Join for free</button>
          <div className="flex items-center gap-4">
            <div className="bg-white rounded-full size-12 flex items-center justify-center shrink-0">
              <FaPlay className="text-[#49BBBD]" />
            </div>
            <button className="text-white font-medium">Watch how it works</button>
          </div>
        </div>
      </div>

      <div className="relative flex items-end justify-center md:justify-start">
        <div className="relative w-[70%] sm:w-[60%] md:w-[85%] lg:w-[75%] aspect-[744/990]">
          <Image
            src="/images/lady-hero.png"
            alt="Student holding books"
            fill
            className="object-contain object-bottom"
            priority
          />

          <div
            className="absolute pointer-events-none"
            style={{ left: '-14.8%', top: '23.1%', width: '122.4%', height: '61.5%' }}
          >
            <Image
              src="/images/stats.png"
              alt=""
              fill
              className="object-contain"
              aria-hidden="true"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Hero