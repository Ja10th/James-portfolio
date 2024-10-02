import Link from 'next/link'
import React from 'react'

const NavBar = () => {
  return (
    <div>
        <div className='flex max-w-8xl justify-between px-8 pt-9'>
          <Link href='/'>
          <h2 className='text-[1.2rem] leading-[140%] font-normal-medium no-underline'>
            James Oluwaleye
          </h2>
          </Link>
          <p className='text-gray-500'>
            Latest Update: Oct 1st 2024
          </p>
        </div>
    </div>
  )
}

export default NavBar