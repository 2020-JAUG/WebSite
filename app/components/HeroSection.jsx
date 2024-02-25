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
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-600'>
                            Hello, I'm{' '}
                        </span>
                        <br></br>
                        <span style={{whiteSpace: 'nowrap', maxWidth: '100%', minWidth: '10rem'}}>
                            <TypeAnimation
                                sequence={[
                                    'Alejandro',
                                    1000,
                                    'Web Developer',
                                    1000
                                ]}
                                wrapper='span'
                                speed={50}
                                repeat={Infinity}
                            />
                        </span>
                    </h1>
                    <p className='text-base sm:text-lg mb-6 lg:text-xl [#adb7eb]
                    '>
                        I'm passionate about crafting innovative solutions to enhance user experience and tackle complex
                        challenges. With a focus on web development and modern technologies, I strive to build scalable,
                        high-performance applications. Committed to code quality and continuous learning, I stay updated
                        in this dynamic field.
                    </p>
                    <div>
                        <Link href='/#contact' className='px-6 py-3 w-full sm:w-fit rounded-full mr-4
                        bg-gradient-to-br from-green-500 to-blue-700
                        hover:bg-slate-200 text-white
                        from-primary-500 to-secondary-500
                        '>
                            Hire Me
                        </Link>
                        <Link href="/"
                              className='px-1 py-1 inline-block  w-full sm:w-fit rounded-full bg-gradient-to-br from-primary-green-500
                        to-secundary-blue-700 hover:bg-slate-800 text-white mt-3'

                        >
                            <span className='block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2'>
                                Download CV
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
                            width={300}
                            height={300}
                            loading='eager'
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection