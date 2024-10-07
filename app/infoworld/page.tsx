import React from 'react'
import Intro from '../components/Intro'
import HomePage from '../components/HomePage'
import Footer from '../components/Footer'
import Link from 'next/link'

const InfoWorld = () => {
  return (
    <div>
      <HomePage />
      <Intro 
      project='E-commerce Store'
      text='Infoworld Global Tech Store for Multiple Vendors'
      client="Jedidiah"
      service="Web Development"
      year="2024"
      projectLink="Live Project"
      href="https://infoworld-six.vercel.app/"
      />
      <section>
        <div className='py-20'>
          <p className='max-w-5xl mx-auto px-8 text-[1.2rem] lg:text-[1.5rem] leading-[140%] text-left'>eCommerce, short for electronic commerce, refers to the buying and selling of goods and services through online platforms. It encompasses a wide range of transactions conducted via the internet, from retail sales to digital product downloads. eCommerce websites serve as digital storefronts, allowing businesses to reach a global audience, streamline operations, and provide customers with the convenience of shopping from anywhere at any time. These platforms often integrate advanced technologies like secure payment gateways, inventory management systems, and customer relationship management (CRM) tools to enhance the overall shopping experience and drive sales.</p>
          <p className='max-w-5xl mx-auto px-8 text-[1.2rem] lg:text-[1.5rem] leading-[140%] text-left pt-10'>The rise of eCommerce has transformed traditional retail landscapes, prompting businesses to adapt to changing consumer behaviors. With the increasing importance of mobile commerce and omnichannel strategies, eCommerce websites must be responsive and user-friendly to capture and retain customer attention. Modern eCommerce solutions leverage data analytics and machine learning algorithms to offer personalized shopping experiences, optimize marketing strategies, and improve customer engagement. As technology continues to evolve, eCommerce will remain a vital component of the retail ecosystem, driving innovation and efficiency across industries.</p>
        </div>
      </section>
      <section className='px-4 sm:px-8 overflow-hidden'>
        <img
            src="infooo.gif"
            alt="Narrify Blog"
            className='rounded-xl  border w-full h-auto md:h-[500px] lg:h-[750px] object-cover my-10'
        />
        <img
            src="infoo.gif"
            alt="Narrify Blog"
            className='rounded-xl  border w-full h-auto md:h-[500px] lg:h-[750px] object-cover my-10'
        />
        <img
            src="info.gif"
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

export default InfoWorld