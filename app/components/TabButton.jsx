import React, { use } from 'react';
import { motion } from 'framer-motion';

const variants = {
    default: { width: 0 },
    active: { width: 'calc(100% - 0.75rem)' }
};

export const TabButton = ({ active, selectTab, children }) => {

    const buttonClass = active ? 'text-white' : 'text-[#adb7be]'

    return (
        <button onClick={selectTab}>
            <p className={`mr-3 font-semibold hover:text-white ${buttonClass}`}>
                {children}
            </p>
            <motion.div
                animate={active ? 'active' : 'default'}
                variants={variants}
                className='h-1 border-b border-green-400 mt-2 mr-3'
            ></motion.div>
        </button>
    )
}
