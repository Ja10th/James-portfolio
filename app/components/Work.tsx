import Link from 'next/link';
import React from 'react';
import { IoIosArrowRoundForward } from "react-icons/io";

const Work: React.FC = () => {
  const work = [
    {
      id: 1,
      title: 'Web Development',
      job: 'Narrify Blog',
      link: '/narrify'
    },
    {
      id: 2,
      title: 'Technical Writing',
      job: 'E-Business Suite',
       link: '/business'
    },
    {
      id: 3,
      title: 'Web Development',
      job: 'Infoworld Global',
       link: '/infoworld'
    },
    {
      id: 4,
      title: 'Technical Writing',
      job: 'Cache Optimization',
       link: '/cache-optimization'
    },
  ];

  return (
    <div className='flex max-w-8xl justify-between px-8 py-4'>
      <div className='flex flex-col-reverse gap-2 lg:flex-row'>
        <div className='flex-1 bg-slate-100 px-8 py-3 rounded-xl'>
          <div className='w-[7rem] pt-4 pb-14 text-center'>
            <p className='p-1 rounded-2xl primary'>Recent Work</p>
          </div>
          {work.map(({ title, id, job, link}) => (
            <React.Fragment key={id}>
              <hr className={`border-t border-gray-300 my-1`} />
              <Link href={link} className="block">
                <div className="lg:w-[400px] pt-2 pb-3 cursor-pointer group">
                  <p className="text-[1rem] text-gray-500">{title}</p>
                  <div className="flex gap-20 justify-between items-center">
                    <p className="text-[1.1rem] lg:text-[1.5rem] font-[400]">{job}</p>
                    {/* Arrow Container */}
                    <div className="border border-slate-200 px-3 rounded-2xl flex items-center justify-center overflow-hidden transition-colors duration-200 ease-in-out group-hover:bg-white">
                      {/* Arrow Icon */}
                      <IoIosArrowRoundForward className="text-3xl transition-transform duration-200 ease-in-out group-hover:translate-x-1" />
                    </div>
                  </div>
                </div>
              </Link>
            </React.Fragment>
          ))}
        </div>
        <div className="flex justify-center items-center ">
            <div className="overflow-hidden relative rounded-xl max-w-[900px] w-full h-auto">
                <Link href='https://infoworld-9zewfkuph-ja10ths-projects.vercel.app/'> 
                <img
                src="mbb.png"
                alt="Work example"
                className="w-[900px] h-auto max-h-[500px] object-cover transition-transform duration-200 ease-in-out hover:scale-110"
                />
                </Link>
                <Link
                href='https://infoworld-9zewfkuph-ja10ths-projects.vercel.app/'
                className='flex absolute gap-2 z-20 top-7 left-6'>
                    <p className='p-1 rounded-2xl primary px-4'>Featured Project</p>
                    <p className='p-1 rounded-2xl bg-black bg-opacity-25 text-white px-4'>E-commerce</p>
                </Link>
            </div>
        </div>
      </div>
    </div>
  );
}

export default Work;
