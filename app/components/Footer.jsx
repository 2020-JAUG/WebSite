import React from 'react';
import Link from "next/link";

const Footer = () => {
    return (
        <footer className='w-full footer border border-t-[#33353F] border-l-transparent border-r-transparent border-b-transparent text-white'>
            <div className='container p-12 flex justify-between'>
                <Link
                    href={'/'}
                    className='text-2xl md:text-5xl text-white font-semibold'
                >
                    LOGO
                </Link>
                <p className='text-white'>All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;