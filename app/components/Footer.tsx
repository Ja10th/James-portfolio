import Link from 'next/link'
import React from 'react'

const Footer = () => {
  return (
    <div className='max-w-8xl px-8 flex text-xs lg:text-md justify-between pt-4 pb-8'>
        <p className='text-gray-500'>© 2024 James Oluwaleye</p>
        <div className='flex gap-x-4 text-gray-500 cursor-pointer'>
          <Link href='/roadmap'>
            <p className='hover:text-black'>Roadmap</p>
          </Link>
          <Link href='/license'>
            <p className='hover:text-black'>License</p>
          </Link>
          <Link href='/changelog'>
            <p className='hover:text-black'>Changelog</p>
          </Link>
          <Link href='connect'>
            <p className='hover:text-black'>Connect</p>
          </Link>
        </div>
    </div>
  )
}

export default Footer