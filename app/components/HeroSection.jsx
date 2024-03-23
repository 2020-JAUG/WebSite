'use client'
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import {TypeAnimation} from 'react-type-animation';


const HeroSection = () => {
    return (
        <section className='lg:py-16'>
            <div className='grid grid-cols-1 sm:grid-cols-12'>
                <div className='col-span-7 place-self-center text-center sm:text-left'>
                    <h1 className='mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal
                    font-extrabold'>
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-500'>
                            Hi, I work as{' '}
                        </span>
                        <br></br>
                        <span style={{whiteSpace: 'nowrap', maxWidth: '100%', minWidth: '10rem'}}>
                            <TypeAnimation
                                sequence={[
                                    'Backend',
                                    1000,
                                    'Developer',
                                    1000
                                ]}
                                wrapper='span'
                                speed={50}
                                repeat={Infinity}
                            />
                        </span>
                    </h1>
                    <p className='text-base sm:text-lg mb-6 lg:text-xl text-white'>
                        I'm passionate about continuous improvement and exploring the wide range of possibilities to
                        solve problems efficiently and effectively. I'm dedicated to creating scalable solutions as a <a
                        href='https://refactoring.guru/design-patterns' target='_blank' className='text-green-500 underline'>Backend Developer</a>. My
                        commitment to code quality and continuous learning enables me to keep up to date in this
                        constantly evolving field.
                    </p>
                    <div>
                        <Link href='/#contact' className='px-6 py-3 w-full sm:w-fit rounded-full mr-4
                        bg-gradient-to-br from-green-500 to-blue-700
                        hover:bg-slate-200 text-white
                        from-primary-500 to-secondary-500
                        '>
                            Hire Me
                        </Link>
                        <Link href='/CV-AlejandroEn.pdf' download>
                            <span className='px-1 py-1 inline-block  w-full sm:w-fit rounded-full text-white mt-3'>
                                <span className='block bg-gradient-to-br from-primary-green-500
                                    to-secundary-blue-700 hover:from-green-500 hover:to-blue-700 active:from-green-500 active:to-blue-700 rounded-full px-5 py-2'>
                                    Download CV
                                </span>
                            </span>
                        </Link>
                    </div>
                </div>
                <div className='col-span-5 place-self-center mt-2 lg:mt-0 flex justify-center'>
                    <div className='w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative'>
                        <Image
                            src='/images/projects/astroLuna.jpeg'
                            alt='astro-luna'
                            className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full'
                            width={200}
                            height={200}
                            loading='eager'
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection