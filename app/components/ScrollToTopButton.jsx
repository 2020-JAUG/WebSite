'use client';
import React, { useEffect, useState } from 'react';

const ScrollToTopButton = () => {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 0) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        document.body.scrollIntoView({ behavior: 'smooth', block: 'start' });
    };

    useEffect(() => {
        window.addEventListener("scroll", toggleVisibility);

        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    return (
        <div className="scroll-to-top" style={{position: 'fixed', bottom: '20px', right: '12px'}}>
            {isVisible &&
                <div onClick={scrollToTop}>
                        <button className='bg-gradient-to-br from-green-500 to-blue-700 text-white font-medium py-1.4 px-1 rounded-lg w-full'>&#8593;</button>
                </div>}
        </div>
    );
}

export default ScrollToTopButton;