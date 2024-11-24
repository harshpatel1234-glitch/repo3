import Image from 'next/image'
import React from 'react'

function Hero() {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2'>
      <div>
       <h2 className='text-[40px] md:text-[60px] font-semibold'>Premium Car Rental in Your Area</h2>
      <h2 className='text-[20px] text-gray-500 font-semibold'>Book the selected car effortlessly, Pay for driving only, Book the Car Now</h2>
      <h2 className='text-[20px] pt-3 text-gray-500 font-normal'>Experience the ultimate convenience and luxury with our premium car rental service. Whether you're planning a quick getaway, exploring the city, or attending a special event, we make it effortless to get behind the wheel of your ideal car. Choose from a diverse fleet of high-quality vehicles, including top-of-the-line sedans, stylish SUVs, and sleek sports cars, all maintained to the highest standards for safety and comfort.
</h2>
      <button className='p-2 mt-5 px-4 rounded-full bg-blue-500 text-white'>Explore Cars</button>
      </div>
      <div>
       <Image src='/hero.jpg' alt='hero-image' width={300} height={400} className='w-full object-cover'/>      
       </div>
    </div>
  )
}

export default Hero
