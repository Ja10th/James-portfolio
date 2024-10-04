import React from 'react'
import HomePage from '../components/HomePage'

const ChangeLog = () => {
  return (
    <>
        <HomePage />
        <div className='px-8'>
            <div className='py-1'>
                <h1 className='font-normal-medium text-[3.6rem]'>Changelog</h1>
                <p className='pt-10 text-gray-500'>Version 1.0</p>
                <p className='text-[1.5rem] font-normal-medium'>Initial Release</p>
            </div>
        </div>
    </>
  )
}

export default ChangeLog