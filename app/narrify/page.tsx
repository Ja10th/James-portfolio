import React from 'react'
import HomePage from '../components/HomePage'
import Link from 'next/link'
import Footer from '../components/Footer'
import Intro from '../components/Intro'

const Narrify = () => {
  return (
    <div>
        <HomePage />
        <Intro 
        project="Narrify Blog"
        text="Transformative Storytelling Strategies that engage readers and connect with your brand."
        client="James"
        service="Web Development"
        year="2024"
        href="https://jaurelblog.vercel.app"
        projectLink="Live Project"
        />
        <section className='px-8 overflow-hidden'>
        <img src="mkk.png" alt="Company Use" className='rounded-xl h-[300px] object-fit lg:h-[750px] lg:w-full my-10'/>
        </section>
        <div className='py-20'>
            <p className='max-w-5xl mx-auto text-[1.2rem] lg:text-[1.5rem] leading-[140%] text-left px-8'>Narrify Blog is all about real stories and authentic content, tailored to enhance your online presence. The platform was created to stand out by delivering original, high-quality tech content that resonates with the audience. It offers engaging blog posts and 
                articles designed to drive visibility and interaction while being fully optimized for SEO. The website seamless user experience supports the mission by ensuring easy navigation and a clean, modern design. Narrify Blog is where unique voices meet insightful tech writing, always aiming to add value and originality.</p>
        </div>
        <section className='px-8 overflow-hidden'>
            <img src="narrify.gif" alt="Narrify Blog" className='rounded-xl w-full h-auto md:h-[500px] lg:h-[750px] object-cover my-10' />
            <img src="blogg.gif" alt="Narrify Blog" className='rounded-xl w-full h-auto md:h-[500px] lg:h-[750px] object-cover my-10' />
            <img src="narrifyy.gif" alt="Narrify Blog" className='rounded-xl w-full h-auto md:h-[500px] lg:h-[750px] object-cover my-10' />
        </section>
        <section>
            <div className='py-10 text-center'>
                <p className='text-gray-500'>Next Project</p>
                <Link href="/business" className='text-[1.5rem] font-normal-medium'>E-business Suite</Link>
            </div>
        </section>
        <hr />
        <Footer />
    </div>
  )
}

export default Narrify