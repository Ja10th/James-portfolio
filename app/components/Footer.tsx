import React from 'react'

const Footer = () => {
  return (
    <div className='max-w-8xl px-8 flex justify-between pt-4 pb-8'>
        <p className='text-gray-500'>© 2024 James Oluwaleye</p>
        <div className='flex gap-x-4 text-gray-500'>
            <p>Roadmap</p>
            <p>License</p>
            <p>Changelog</p>
            <p>Connect</p>
        </div>
    </div>
  )
}

export default Footer