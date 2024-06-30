import React from 'react'
import Image from 'next/image'

const HeroImageOnBoarding = () => {
  return (
    <div className="relative lg:w-1/2 lg:min-h-screen hidden lg:items-center lg:justify-center lg:flex-col lg:text-center lg:flex">
      <Image
        src={'/login/login.svg'}
        fill
        priority
        className="object-cover -z-10"
        alt="Login hero"
      />
      <h2 className="text-[20px] tracking-[0.4em] font-semibold">
        INSPIRED BY THE FUTURE:
      </h2>
      <h1 className="font-black text-[36px] tracking-[0.2em] gradient-text-black-white">
        THE VISION UI DASHBOARD
      </h1>
    </div>
  )
}

export default HeroImageOnBoarding
