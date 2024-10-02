import React from 'react';

const About = () => {
    const experience = [
        {
            id: 1,
            title: 'Technical Writer',
            company: 'Semaphore',
            when: '2023 - Now'
        },
        {
            id: 2,
            title: 'Freelance Developer',
            company: 'Narrify',
            when: '2021 - Now'
        },
        {
            id: 3,
            title: 'Technical Writer',
            company: 'Tricentis',
            when: '2024 - Now',
        },
        {
            id: 4,
            title: 'Technical Writer',
            company: 'InPlain English',
            when: '2023 - 2024',
        },
        {
            id: 5,
            title: 'Front-end Intern',
            company: 'FAAN',
            when: '2021 - 2021'
        },
    ];

    return (
        <div className='flex max-w-8xl justify-between px-8 pt-9'>
            <div className='flex flex-col lg:flex-row gap-2'>
                <div className='flex-2 bg-slate-100 px-8 py-3 rounded-xl'>
                    <div className='w-16 pt-4 pb-20 text-center'>
                        <p className='p-1 rounded-2xl primary'>About</p>
                    </div>
                    <img src="james.jpeg" alt="James Oluwaleye" className='h-24 w-24 rounded-full' />
                    <h1 className='text-[2rem] font-normal-medium flex max-w-4xl pt-5 leading-[130%]' >
                        James is a front-end engineer and technical writer, passionate about creating seamless user experiences and sharing knowledge through clear, concise technical content.
                    </h1>
                    <p className='pt-20 pb-6 text-gray-500'>Open for any collaborations and offers</p>
                </div>
                <div className='flex-1 bg-slate-100 px-8 py-3 rounded-xl'>
                    <div className='w-24 pt-4 pb-14 text-center'>
                        <p className='p-1 rounded-2xl primary'>Experience</p>
                    </div>
                    {experience.map(({ title, id, company, when }) => (
                        <React.Fragment key={id}>
                            <div className='lg:w-[400px] pt-2 pb-3'>
                                <p className='font-normal-medium'>{title}</p>
                                <div className='flex gap-20 justify-between'>
                                    <p className='text-gray-500'>{company}</p>
                                    <p className='text-gray-500 '>{when}</p>
                                </div>
                            </div>
                            <hr className={`border-t border-gray-300 my-1 ${id === 5 ? 'hidden' : ''}`} />
                        </React.Fragment>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default About;
