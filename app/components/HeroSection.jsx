'use client'
import React from 'react';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';

const HeroSection = () => {

    const handleDownloadCV = async () => {
        const cvUrl = '/images/CV-AlejandroEn.pdf';
        const link = document.createElement('a');
        link.href = cvUrl;
        link.download = 'CV-AlejandroUrbina.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
    };

    return (
        <section className='lg:py-16'>
            <div className='grid grid-cols-1 sm:grid-cols-12'>
                <div className='col-span-7 place-self-center text-center sm:text-left'>
                    <h1 className='mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold'>
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-500'>
                            Hi, I work as{' '}
                        </span>
                        <br />
                        <span className='whitespace-nowrap'>
                            <TypeAnimation
                                sequence={['Backend', 1000, 'Developer', 1000]}
                                wrapper='span'
                                speed={50}
                                repeat={Infinity}
                                loading="lazy"
                            />
                        </span>
                    </h1>
                    <p className='text-base sm:text-lg mb-6 lg:text-xl text-white'>
                        I'm passionate about continuous improvement and exploring the wide range of possibilities to
                        solve problems efficiently and effectively. I'm dedicated to creating scalable solutions as a{' '}
                        <a href='https://refactoring.guru/design-patterns' target='_blank' rel="noopener noreferrer"
                            className='text-green-500 underline'>Backend Developer</a>. My commitment to code quality
                        and continuous learning enables me to keep up to date in this constantly evolving field.
                    </p>
                    <div className="flex flex-col sm:flex-row items-center sm:items-start">
                        <Link href='/#contact' className='px-6 py-3 rounded-full mr-4 bg-gradient-to-br from-green-500 to-blue-700 hover:bg-slate-200 text-white'>
                            Hire Me
                        </Link>
                        <button
                            onClick={handleDownloadCV}
                            className='px-6 py-3 rounded-full bg-gradient-to-br from-green-500 to-blue-700 text-white hover:from-blue-700 hover:to-green-500 transition-all'
                        >
                            Download CV
                        </button>
                    </div>
                </div>

                {/* Imagen */}
                {/* <div className='col-span-5 place-self-center mt-2 lg:mt-0 flex justify-center'>
                    <div className='w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
                        <Image
                            src='/logo.png'
                            alt='astro-luna'
                            className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full'
                            width={200}
                            height={200}
                            loading='lazy'
                        />
                    </div>
                </div> */}
            </div>
        </section>
    );
};

export default HeroSection;