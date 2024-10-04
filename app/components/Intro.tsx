import Link from 'next/link'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'

interface Project {
    project: string,
    text: string,
    client: string,
    service: string,
    year: string,
    href: string,
    projectLink: string,
}

const Intro = ({ project, text, client, service, year, href, projectLink} : Project) => {
  return (
    <section>
            <div className='py-20'>
                <h1 className='leading-[110%] font-normal-medium text-[2.6rem] lg:text-[4rem] text-center pb-4'>{project}</h1>
                <p className='text-[1rem] leading-[140%] text-center px-8 text-gray-500'>{text}</p>
            </div>
            <div className='grid grid-cols-2 lg:grid-cols-4 px-8 gap-6'>
                <div className='bg-slate-100 rounded-xl p-4'>
                <p className='p-1 w-24 rounded-2xl primary px-4 '>Client</p>
                <p className='px-2 py-4 lg:py-6 font-normal-medium text-[1.2rem] '>{client}</p>
                </div>
                <div className='bg-slate-100 rounded-xl p-4'>
                <p className='p-1 w-24 rounded-2xl primary px-4'>Service</p>
                <p className='px-2 py-4 lg:py-6 font-normal-medium text-[1.2rem] '>{service}</p>
                </div>
                <div className='bg-slate-100 rounded-xl p-4'>
                <p className='p-1 w-16 rounded-2xl primary px-4'>Year</p>
                <p className='px-2 py-4 lg:py-6 font-normal-medium text-[1.2rem] '>{year}</p>
                </div>
                <Link href={href} target='_blank' rel='noopener noreferrer'>
                <div className='primary p-2 lg:p-10 rounded-xl group hover:bg-[#d3fd94] overflow-hidden cursor-pointer'>
                    <p className='group-hover:scale-105 flex gap-2 py-10 lg:py-6 text-center justify-center items-center font-normal-medium text-[1.2rem]'>
                    {projectLink} <FaArrowRight />
                    </p>
                </div>
                </Link>

            </div>
        </section>
  )
}

export default Intro