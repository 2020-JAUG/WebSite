'use client'
import Image from 'next/image'
import React, { useTransition, useState } from 'react'
import { TabButton } from '@/app/components/TabButton'


const TAB_DATA = [
    {
        title: 'Skills',
        id: 'skills',
        content: (
            <ul className='list-disc pl-2'>
                <li>Docker</li>
                <li>JavaScript</li>
                <li>Laravel</li>
                <li>MySQL</li>
                <li>NodeJS</li>
                <li>PHP</li>
                <li>React</li>
                <li>TypeORM</li>
            </ul>
        )
    },
    {
        title: 'Certifications',
        id: 'certifications',
        content: (
            <ul className='list-disc pl-2'>
                <li>Docker Udemy</li>
                <li>Object oriented programming in Php Platzi</li>
                <li>TypeScript Udemy</li>
            </ul>
        )
    },
    {
        title: 'Education',
        id: 'education',
        content: (
            <ul className='list-disc pl-2'>
                <li>Bootmcamp FullStack</li>
                <li>DAW Misericordia</li>
            </ul>
        )
    }
]

const AboutSection = () => {

    const [tab, setTab] = useState('skills')
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
            setTab(id)
        })
    }


    return (
        <section className='text-white' id='about'>
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
                <Image src='/images/heros.png' alt='heros' width={500} height={500} />
                <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                    <h2 className='text-4xl font-bold mb-4'>About Me</h2>
                    <p className='text-base lg:text-lg'>
                        Hi, I'm Alejo. I've always been very curious about the digital world, I've been self-taught and I've been acquiring knowledge about programming.
                        My story is a bit different, I've been working in the hospitality industry for more than 10 years. As you can imagine, a very demanding sector where you work hard and learn every day as in software development.
                        I have experience working with: Docker, HTML, JavaScript, Laravel, MySQL, NodeJS, PHP, React, TypeORM. I am a fast learner and always looking to expand my knowledge and skills.
                    </p>
                    <div className='flex flex-row justify-start mt-8'>
                        <TabButton selectTab={() => handleTabChange("skills")} active={tab === "skills"}>
                            {" "}
                            Skills{" "}
                        </TabButton>
                        <TabButton selectTab={() => handleTabChange('certifications')} active={tab === 'certifications'}>
                            {" "}
                            Certifications{" "}
                        </TabButton>
                        <TabButton selectTab={() => handleTabChange('education')} active={tab === 'education'}>
                            {" "}
                            Education{" "}
                        </TabButton>
                    </div>
                    <div className='mt-8'>{TAB_DATA.find((t) => t.id === tab).content}</div>
                </div>
            </div>
        </section>
    )
}

export default AboutSection;