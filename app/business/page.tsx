import React from 'react'
import HomePage from '../components/HomePage'
import Intro from '../components/Intro'
import Footer from '../components/Footer'
import Link from 'next/link'

const Business = () => {
  return (
    <div>
       <HomePage />
        <Intro 
        project="E-business Suite"
        text="5 Things to Consider When Migrating E-Business Suite to Oracle ERP"
        client="Tricentis"
        service="Technical Writing"
        year="2024"
        projectLink="Read Content"
        href="https://shiftsync.tricentis.com/testing-strategies-methodologies-69/5-things-to-consider-when-migrating-e-business-suite-to-oracle-erp-1516"
        />

        <section className='py-20'>
          <p className='max-w-5xl mx-auto px-8 text-[1.2rem] lg:text-[1.5rem] leading-[140%] text-left'>
          Migrating from Oracle E-Business Suite (EBS) to Oracle ERP (Fusion) offers significant benefits, such
           as enhanced scalability, agility, and reduced IT costs. However, to
            ensure a smooth transition, careful planning is essential. Key factors
             include evaluating the compatibility of test scripts, automating test processes,
              and ensuring that complex controls and integrations are thoroughly tested. By 
              reviewing and modifying existing scripts, automating regression tests, and developing 
              detailed test plans, businesses can mitigate risks and enhance the overall migration process. 
              Additionally, understanding and documenting data flows and dependencies between current integrations
               is vital to avoid disruptions during the transition. 
          </p>

          <p className='max-w-5xl mx-auto px-8 text-[1.2rem] lg:text-[1.5rem] leading-[140%] text-left pt-10'>
          Another critical aspect is managing hybrid environments, where some processes may 
               remain on-premises while others move to the cloud. Businesses must document and streamline these mixed processes 
               while ensuring data consistency and security. Using tools like Oracle Integration Cloud for seamless integration
                between systems can help maintain operational efficiency. Ensuring comprehensive test case management in cloud environments and ongoing performance monitoring will also be crucial to ensure a 
                successful migration. By addressing these factors, organizations can maximize the benefits of Oracle ERP and optimize business operations.

          </p>
        </section>
        <div className='px-8'>
          <img src="https://uploads-us-west-2.insided.com/tricentis-en/attachment/883aa644-a4c2-4d98-af55-d4f2dbd6a1cb_thumb.png" alt="Tricentis Blog" className='rounded-xl w-full h-auto md:h-[500px] lg:h-[750px] object-cover my-10' />
        </div>
        <section>
            <div className='py-10 text-center'>
                <p className='text-gray-500'>Next Project</p>
                <Link href="/infoworld" className='text-[1.5rem] font-normal-medium'>Infoworld Global</Link>
            </div>
        </section>
        <hr />
        <Footer />
    </div>
  )
}

export default Business