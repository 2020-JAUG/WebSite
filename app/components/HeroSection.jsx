'use client'
import React, { memo, useEffect, useState } from 'react';
import Link from 'next/link';
import { TypeAnimation } from 'react-type-animation';

const OptimizedTypeAnimation = memo(() => {
    return (
        <TypeAnimation
            sequence={['Backend', 900, 'Developer', 900]} // Más rápido para reducir el bloqueo
            wrapper='span'
            speed={70} // Incrementado para mejorar fluidez y reducir bloqueos
            repeat={Infinity}
        />
    );
});

const HeroSection = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, []);

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
                            {isMounted ? <OptimizedTypeAnimation /> : 'Developer'}
                        </span>
                    </h1>
                    <p className='text-base sm:text-lg mb-6 lg:text-xl text-white'>
                        I'm passionate about continuous improvement and exploring the wide range of possibilities to
                        solve problems efficiently and effectively. I'm dedicated to creating scalable solutions as a{' '}
                        <a href='https://refactoring.guru/design-patterns' target='_blank' rel="noopener noreferrer"
                            className='text-green-500 underline'>Backend Developer</a>. My commitment to code quality
                        and continuous learning enables me to keep up to date in this constantly evolving field.
                    </p>
                    <div className="flex flex-row items-center gap-4 mt-4">
                        <Link
                            href='/#contact'
                            className='px-6 py-3 rounded-full bg-gradient-to-br from-green-500 to-blue-700 hover:bg-slate-200 text-white'
                        >
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
            </div>
        </section>
    );
};

export default HeroSection;