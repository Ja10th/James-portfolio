import React from 'react'
import HomePage from '../components/HomePage'

const License = () => {
  return (
    <>
        <HomePage />
        <div className='px-8'>
            <div className='py-4 px-8'>
                <h1 className='font-normal-medium text-[3.6rem]'>License</h1>
                <p className='pt-20 text-gray-500'>Image</p>
                <p className='text-[1.5rem] font-normal-medium'>All graphical assets in this template are licensed for personal and commercial use. If you&apos;d like to use a specific asset, please check the <a className='underline' href='https://www.pexels.com/license/'>license from Pexel</a></p>
            </div>
            <div className='px-8 py-20'>
                <p className='text-gray-500'>Font</p>
                <p className='text-[1.5rem] font-normal-medium'>This template uses <a className='underline' href='https://fonts.google.com/specimen/Inter+Tight?query=inter&stroke=Sans+Serif'>Inter Tight</a> from Google Font. It is free for both personal and commercial use</p>
            </div>
        </div>
    </>
  )
}

export default License