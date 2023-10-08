import React, { use } from 'react'

export const TabButton = ({ active, selectTab, children }) => {

    const buttonClass = active ? 'border-b border-green-400' : 'text-[#adb7be]'


    return (
        <button onClick={selectTab}>
            <p className={`mr-3 font-semibold hover:text-white ${buttonClass}`}>
                {children}
            </p>
        </button>
    )
}
