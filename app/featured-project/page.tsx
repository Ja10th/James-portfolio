import React from 'react'
import Intro from '../components/Intro'
import HomePage from '../components/HomePage'
import Footer from '../components/Footer'
import Link from 'next/link'

const Featured = () => {
  return (
    <div>
      <HomePage />
      <Intro 
      project='E-commerce Dashboard'
      text='Helping e-commerce business track progress with ease'
      client="Jhoppy"
      service="Web Development"
      year="2022"
      projectLink="Live Project"
      href="https://jhoppydashy.vercel.app/"
      />
      <section>
        <div className='py-20'>
          <p className='max-w-5xl mx-auto px-8 text-[1.2rem] lg:text-[1.5rem] leading-[140%] text-left'>A functional eCommerce dashboard, built with React and Syncfusion, provides an interactive and data-driven platform for managing online sales, tracking customer activities, and analyzing business performance. Syncfusion&apos;s powerful charting tools and tooltips offer real-time insights into key metrics like sales trends, product popularity, and customer behavior, allowing businesses to make informed decisions swiftly. The dashboard serves as a comprehensive control center where businesses can oversee operations, optimize product offerings, and streamline inventory management, all through a user-friendly interface.</p>
          <p className='max-w-5xl mx-auto px-8 text-[1.2rem] lg:text-[1.5rem] leading-[140%] text-left pt-10'>By incorporating Syncfusion&apos;s advanced charting libraries, the eCommerce dashboard presents data visually, making complex sales analytics easy to interpret. Interactive charts allow users to explore data dynamically, with tooltips offering instant context on specific metrics without overwhelming the user. This functionality helps businesses stay agile by quickly identifying trends and potential issues, from tracking revenue growth to monitoring stock levels and customer retention rates.</p>
        </div>
      </section>
      <section className='px-4 sm:px-8 overflow-hidden'>
        <img
            src="https://user-images.githubusercontent.com/100203073/190893563-f27b4b04-4740-4e4f-ade0-396dacf2a5a6.png"
            alt="Narrify Blog"
            className='rounded-xl border w-full h-auto md:h-[500px] lg:h-[750px] object-cover my-10'
        />
        <img
            src="https://user-images.githubusercontent.com/100203073/190893567-2bdd2182-966e-4b3e-8f0d-7ca6ca925cba.png"
            alt="Narrify Blog"
            className='rounded-xl border w-full h-auto md:h-[500px] lg:h-[750px] object-cover my-10'
        />
        <img
            src="https://user-images.githubusercontent.com/100203073/190893656-0c685bca-165d-43e2-a602-cf345a091942.png"
            alt="Narrify Blog"
            className='rounded-xl border w-full h-auto md:h-[500px] lg:h-[750px] object-cover my-10'
        />
    </section>
      <section>
         <div className='py-10 text-center'>
             <p className='text-gray-500'>Next Project</p>
             <Link href="/cache-optimization" className='text-[1.5rem] font-normal-medium'>Cache Optimization</Link>
         </div>
     </section>
      <hr />
      <Footer />
    </div>
  )
}

export default Featured