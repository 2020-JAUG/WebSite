import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
    return (
        <footer className='w-full footer border border-t-[#33353F] border-l-transparent border-r-transparent border-b-transparent text-white'>
            <div className='container p-4 md:p-12 flex flex-col md:flex-row justify-between items-center'>
                <Link
                    href={'/'}
                    className='text-2xl md:text-5xl text-white font-semibold mb-4 md:mb-0 md:ml-12'
                    style={{textAlign: 'center'}}
                >
                    <Image src='/logo.png' className='logoFooter hidden md:block' alt='Image logo' width={100} height={100} />
                    <Image src='/logo.png' className='logoFooter md:hidden' alt='Image logo' width={90} height={90} />
                </Link>
                <p className='text-white'>All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;