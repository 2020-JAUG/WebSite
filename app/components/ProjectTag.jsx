import React from 'react'

const ProjectTag = ({ tag, onClick, isSelected }) => {

    const buttonStyles = isSelected
        ? 'text-white border-green-500 to-blue-700'
        : 'textt-[#ADB7BE] border-slate-600 hover:border-white'
    return (
        <button className={`${buttonStyles} rounded-full border-2 border-green-500 px-6 py-3 text-xl cursor-pointer`}
            onClick={() => onClick(tag)}
        >
            {tag}
        </button >
    )
}

export default ProjectTag