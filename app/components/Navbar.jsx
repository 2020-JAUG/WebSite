'use client'
import Link from 'next/link'
import Image from 'next/image';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import React, { useState } from 'react'
import { NavLink } from './NavLink'
import { MenuOverlay } from './MenuOverlay'

const navLinks = [
    {
        title: 'About',
        path: '/#about',
    },
    {
        title: 'Repositories',
        path: '/#repositories',
    },
    {
        title: 'Labs',
        path: '/labs',
    },
    {
        title: 'Contact',
        path: '/#contact',
    },
];

const Navbar = () => {

    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <nav className='fixed mx-auto border border-transparent top-0 left-0 right-0 z-20 bg-[#121212] bg-opacity-100'>
            <div className='flex container lg:py-4 flex-wrap items-center justify-between mx-auto px-4 py-2'>
                <Link
                    href={'/'}
                    className='text-2xl md:text-5xl text-white font-semibold'
                >
                    <Image src='/logo.png' className='logo' alt='Image logo' width={60} height={60} />
                </Link>
                <div className='mobile-menu block md:hidden'>
                    {!navbarOpen ? (
                        <button
                            onClick={() => setNavbarOpen(true)}
                            className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'
                            aria-label='Open Menu'
                        >
                            <Bars3Icon className='h-5 w-5' />
                        </button>
                    ) : (
                        <button
                            onClick={() => setNavbarOpen(false)}
                            className='flex items-center px-3 py-2 border rounded border-slate-200 text-slate-200 hover:text-white hover:border-white'
                            aria-label='Close Menu'
                        >
                            <XMarkIcon className='h-5 w-5' />
                        </button>
                    )}
                </div>
                <div className='menu hidden md:block md:w-auto" id="navbar'>
                    <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8 mt-0'>
                        {navLinks.map((link, index) => (
                            <li key={index}>
                                <NavLink href={link.path} title={link.title} onClick={() => setNavbarOpen(false)} />
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            {navbarOpen ? <MenuOverlay links={navLinks} onClose={() => setNavbarOpen(false)} /> : null}
        </nav>
    );
};

export default Navbar;