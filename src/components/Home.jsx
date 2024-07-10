
/* eslint-disable react/no-unescaped-entities */
import React from 'react'
import { Carousel } from "flowbite-react";
import banner1 from '../assets/Hand coding-pana.png'
import banner2 from '../assets/Website Creator-bro.png'

export default function Home() {
  return (
    <div className='bg-neutralSilver' id='home'>
      <div className='px-4 lg:px-14 max-w-screen-2xl mx-auto min-h-screen h-screen'>
        <Carousel className='w-full mx-auto h-full'>
          <div className="my-12 md:py-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-6 md:gap-12">
            <div className='md:w-1/2 w-full flex justify-center'>
              <img src={banner1} alt='fra' className='w-full max-w-md mb-5 md:mb-0' />
            </div>
            {/* Hero text */}
            <div className='md:w-1/2 w-full text-center md:text-left'>
              <h1 className='text-3xl md:text-5xl font-semibold mb-4 text-neutralDgrey md:w-3/4 mx-auto md:mx-0'>
                Lessons and insights
                <span className='block text-brandPrimary leading-snug'>from 8 years</span>
              </h1>
              <p className='text-neutral-500 text-sm md:text-base mb-8 mx-auto md:mx-0'>
                Where to grow your business as a photographer: site or social media?
              </p>
              <button className="btn-primary">Register</button>
            </div>
          </div>

          <div className="my-12 md:py-8 py-12 flex flex-col md:flex-row-reverse items-center justify-between gap-6 md:gap-12">
            <div className='md:w-1/2 w-full flex justify-center'>
              <img src={banner2} alt='fra' className='w-full max-w-md' />
            </div>
            {/* Hero text */}
            <div className='md:w-1/2 w-full text-center md:text-left'>
              <h1 className='text-3xl md:text-5xl font-semibold mb-4 text-neutralDgrey md:w-3/4 mx-auto md:mx-0'>
                Let's Learn and Earn Money
                <span className='block text-brandPrimary leading-snug'>in 4 months</span>
              </h1>
              <p className='text-neutral-500 text-sm md:text-base mb-8 mx-auto md:mx-0'>
                Where to grow your business as a photographer: site or social media?
              </p>
              <button className="btn-primary">Register</button>
            </div>
          </div>
        </Carousel>
      </div>
    </div>
  )
}
