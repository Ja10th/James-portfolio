import Link from 'next/link'
import React from 'react'
import Footer from '../components/Footer'
import HomePage from '../components/HomePage'
import Intro from '../components/Intro'

const Cache = () => {
  return (
    <div>
    <HomePage />
     <Intro 
     project="Cache Optimization"
     text="Cache Optimization on NextJS Without Vercel"
     client="Semaphore"
     service="Technical Writing"
     year="2024"
     projectLink="Read Content"
     href="https://semaphoreci.com/blog/cache-optimization-nextjs"
     />

     <section className='py-20'>
       <p className='max-w-5xl mx-auto px-8 text-[1.2rem] lg:text-[1.5rem] leading-[140%] text-left'>
       Caching significantly impacts website load speed, and Next.js offers effective built-in features to optimize caching. By utilizing caching, you can enhance performance, resulting in faster load times and reduced server workload. This leads to a better user experience and can lower hosting costs. Static Site Generation (SSG) and Incremental Static Regeneration (ISR) are essential methods in Next.js for creating and serving pre-rendered pages, which allow for quick access to frequently requested content.
       </p>

       <p className='max-w-5xl mx-auto px-8 text-[1.2rem] lg:text-[1.5rem] leading-[140%] text-left pt-10'>
       Next.js simplifies caching strategies, such as defining Cache-Control headers for different types of content, which helps manage resource caching effectively. Client-side caching methods, like service workers and local storage, further improve performance by storing data directly in the user’s browser. Integrating a Content Delivery Network (CDN) also enhances load speeds by serving static assets from servers closest to the user, ensuring faster delivery and greater scalability.
       </p>
     </section>
     <div className='px-8'>
       <img src="https://www.keycdn.com/img/blog/website-performance-optimization.png" alt="Tricentis Blog" className='rounded-xl h-[300px] lg:h-[750px] lg:w-full my-10' />
     </div>
     <section>
         <div className='py-10 text-center'>
             <p className='text-gray-500'>Next Project</p>
             <Link href="/narrify" className='text-[1.5rem] font-normal-medium'>Narrify Blog</Link>
         </div>
     </section>
     <hr />
     <Footer />
 </div>
  )
}

export default Cache