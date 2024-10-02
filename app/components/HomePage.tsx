import Link from 'next/link';
import React from 'react'
import { BsArrowLeft } from "react-icons/bs";

const HomePage = () => {
  return (
    <div className='px-8 pt-6'>
        <Link href='/'>
            <div className='bg-slate-100 flex justify-center items-center gap-2 p-2 w-48 rounded-2xl border border-slate-200'>
                <BsArrowLeft /> 
                <p> Back to Homepage</p>
            </div>
        </Link>
        <hr className='mt-6 w-full'/>
    </div>
  )
}

export default HomePage