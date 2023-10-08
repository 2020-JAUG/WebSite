'use client'
import Image from 'next/image'
import React, { useTransition, useState } from 'react'


export const AboutSection = () => {

    const [tab, setTab] = useState('skills')
    const [startTransition, isPending] = useTransition()

    const handleTab = (tab) => {
        startTransition(() => {
            setTab(tab)
        })
    }




    return (
        <section className=''>
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
                <Image src='/images/heros.png' width={500} height={500} />
                <div>
                    <h2 className='text-4xl font-bold mb-4'>About Me</h2>
                    <p className='text-base lg:text-lg'>
                        Hi, I'm Alejo. I've always been very curious about the digital world, I've been self-taught and I've been acquiring knowledge about programming.
                        My story is a bit different, I've been working in the hospitality industry for more than 10 years. As you can imagine, a very demanding sector where you work hard and learn every day as in software development.
                        I have experience working with: JavaScript, PHP, HTML, MYSQL, React, NodeJS, TypeORM, Laravel, Docker. I am a fast learner and always looking to expand my knowledge and skills.
                    </p>
                    <div className='flex flex-row mt-8'>
                        <span className='mr-3 font-semibold hover:text-white text-[#adb7be] border-b border-green-400'>Skills</span>
                        <span>Education</span>
                        <span>Experience</span>
                    </div>
                </div>
            </div>
        </section>
    )
}
