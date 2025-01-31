'use client';
import React, { useState, useCallback, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import GithubIcon from '../../public/github-icon.svg';
import LinkedinIcon from '../../public/linkedin-icon.svg';

const EmailSection = () => {
    const [emailSubmitted, setEmailSubmitted] = useState(false);
    const [isSending, setIsSending] = useState(false);
    const formRef = useRef(null);

    const handleSubmit = useCallback(async (e) => {
        e.preventDefault();
        setIsSending(true);

        const form = formRef.current;
        if (!form) return;

        const formData = new FormData(form);
        const data = {
            email: formData.get('email'),
            subject: formData.get('subject'),
            message: formData.get('message'),
        };

        const response = await fetch('/api/send', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        });

        if (response.ok) {
            setEmailSubmitted(true);
            form.reset();
            setTimeout(() => setEmailSubmitted(false), 2000);
        }
        setIsSending(false);
    }, []);

    return (
        <section id='contact' className='grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative'>
            <div className='z-10'>
                <h2 className="text-xl font-bold text-white my-2 relative after:block after:h-1 after:border-b-2 after:border-green-400 after:mt-2 after:mr-3 after:w-[calc(100%-0.75rem)]">
                    Let&apos;s Connect
                </h2>
                <p className='text-white mb-4 max-w-md'>
                    I&apos;m currently looking for new opportunities. My inbox is always open. Whether you have a question or just want to say hi, I&apos;ll try my best to get back to you!
                </p>
                <div className='flex gap-3'>
                    <Link href='https://github.com/2020-JAUG' target='_blank' aria-label='Github Profile'>
                        <Image src={GithubIcon} alt='Github Icon' width={30} height={30} />
                    </Link>
                    <Link href='https://www.linkedin.com/in/alejandrourbinagonzalez/' target='_blank' aria-label='LinkedIn Profile'>
                        <Image src={LinkedinIcon} alt='Linkedin Icon' width={30} height={30} />
                    </Link>
                </div>
            </div>

            <div>
                <form ref={formRef} className='flex flex-col' onSubmit={handleSubmit}>
                    <div className='mb-6'>
                        <label htmlFor='email' className='text-white block mb-2 text-sm font-medium'>Your email</label>
                        <input name='email' type='email' id='email' required
                            className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                            placeholder='yourEmail@google.com' />
                    </div>
                    <div className='mb-6'>
                        <label htmlFor='subject' className='text-white block text-sm mb-2 font-medium'>Subject</label>
                        <input name='subject' type='text' id='subject' required
                            className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                            placeholder='Just saying hi' />
                    </div>
                    <div className='mb-6'>
                        <label htmlFor='message' className='text-white block text-sm mb-2 font-medium'>Message</label>
                        <textarea name='message' id='message' required
                            className='bg-[#18191E] border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5'
                            placeholder="Let's talk about..." />
                    </div>
                    <div className="h-6 text-sm text-green-500" aria-live="polite">
                        {isSending ? "Sending email..." : emailSubmitted ? "Email sent successfully!" : ""}
                    </div>
                    <button
                        type='submit'
                        className={`bg-gradient-to-br from-green-500 to-blue-700 text-white font-medium py-2.5 px-5 rounded-lg w-full transition-all ${isSending ? 'opacity-50 cursor-not-allowed' : ''}`}
                        disabled={isSending}
                    >
                        {isSending ? 'Sending...' : 'Send Message'}
                    </button>
                </form>
            </div>
        </section>
    );
};

export default EmailSection;