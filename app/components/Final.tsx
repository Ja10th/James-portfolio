import React from 'react'

const Final = () => {
  return (
    <div className='flex max-w-8xl justify-between px-8 pb-4'>
      <div className='flex flex-col-reverse lg:flex-row gap-8 w-full'>
        {/* Image Section */}
        <div className='relative lg:flex-shrink-0 lg:w-[450px]'>
          <img
            src="https://images.pexels.com/photos/5474282/pexels-photo-5474282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            alt="Man on pc"
            className='w-full h-[500px] lg:h-[580px] rounded-xl object-cover opacity-85'
          />
          <div className='flex absolute gap-2 z-20 top-7 left-6'>
            <p className='p-1 rounded-2xl primary px-4'>Motto</p>
          </div>
          <div className='absolute bottom-4 right-4'>
            <p className='text-[1.5rem] text-white font-normal-medium px-10'>
              "Writing clean code, and writing about it just as clearly."
            </p>
          </div>
        </div>

        {/* Content Section */}
        <div className='relative flex-grow lg:w-1/2 '>
          {/* Featured Clients */}
          <div className='bg-slate-100 mb-4 px-8 py-8 rounded-xl'>
            <div className=''>
              <p className='p-1 w-36 rounded-2xl primary px-4'>Featured Clients</p>
            </div>
            <div className="overflow-hidden py-8 bg-gray-100">
              <div className="flex space-x-8 animate-marquee">
                <img src="hashnode.png" alt="Google" className="h-12 w-auto grayscale" />
                <img src="semaphore.png" alt="Semaphore" className="h-12 w-auto grayscale" />
                <img src="faan.png" alt="FAAN" className="h-12 w-auto grayscale" />
                <img src="tricentis.png" alt="Tricentis" className="h-12 w-auto grayscale -mt-2" />
                <img src="memphis.png" alt="Memphis" className="h-12 w-auto grayscale -mt-1" />
                <img src="plain.png" alt="Plain AWS" className="h-12 w-auto grayscale -mt-1" />
                <img src="medium.png" alt="Plain AWS" className="h-12 w-auto grayscale -mt-2" />
              </div>
            </div>
          </div>

          {/* Services and Contact */}
          <div className='flex flex-col lg:flex-row gap-4'>
            {/* Services Section */}
            <div className='flex flex-col bg-slate-100 w-full rounded-xl box-border px-12 py-4'>
              <p className='p-1 w-24 rounded-2xl primary px-4'>Service</p>
              <div className='pt-20'>
                <p className='py-2 text-[1.5rem] relative'>Technical Writing <span className='text-xs absolute sm:right-[9rem] pl-1 lg:right-[9.3rem] text-gray-500 top-3'>(01)</span></p>
                <hr />
                <p className='py-2 relative text-[1.5rem]'>Web Development <span className='text-xs absolute sm:right-[8rem] pl-1 lg:right-[8.3rem] text-gray-500 top-3'>(02)</span></p>
                <hr />
                <p className='py-2 relative text-[1.5rem]'>Web Maintenance <span className='text-xs absolute sm:right-[8.2rem] pl-1 lg:right-[8.5rem] text-gray-500 top-3'>(03)</span></p>
                <hr />
                <p className='py-2 relative text-[1.5rem]'>Blogging <span className='text-xs absolute sm:right-[14.2rem] pl-1 lg:right-[14.5rem] text-gray-500 top-3'>(04)</span></p>
              </div>
            </div>

            {/* Contact Section */}
            <div className='flex flex-col primary w-full box-border px-8 rounded-xl py-4'>
              <p className='p-1 rounded-2xl bg-slate-50 w-24 px-4'>Contact</p>
              <p className='pt-20 px-2 '>Let’s make something special together</p>
              <a 
              href="mailto:Jamesoluwaleye@gmail.com" 
              className="text-[1.7rem] px-2 font-normal-medium hover:text-gray-500 hover:no-underline transition-colors duration-200"
            >
              Jamesoluwaleye@gmail.com
            </a>

              <hr className='mt-24 border-slate-300' />
              <div className='flex gap-6 px-2 mt-2 text-gray-500 '>
                <a href='mailto:Jamesoluwaleye@gmail.com' className='hover:text-gray-400'>Email</a>
                <a href='https://github.com/ja10th' className='hover:text-gray-400'>Github</a>
                <a href='https://twitter.com/ja10th' className='hover:text-gray-400'>Twitter</a>
                <a href='mailto:Jamesoluwaleye@gmail.com' className='hover:text-gray-400'>CV</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Final
