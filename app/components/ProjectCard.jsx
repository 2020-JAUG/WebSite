import React from 'react';
import { CodeBracketIcon } from "@heroicons/react/24/outline";
import Link from 'next/link';
import Image from 'next/image';

const ProjectCard = ({ imageUrl, title, gitUrl }) => {
    return (
        <div className="group relative">
            <div className="relative w-full h-52 md:h-72 overflow-hidden rounded-lg">
                <Image
                    src={imageUrl}
                    alt={`Preview of ${title}`} // Mejora accesibilidad
                    fill // Esto reemplaza layout="fill"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 75vw, 50vw"
                    className="absolute inset-0 w-full h-full object-cover rounded-lg"
                    priority={title.includes('Hero')} // Solo si es imagen importante
                    quality={80}
                />
                <div className="absolute inset-0 flex items-center justify-center bg-[#181818] bg-opacity-0 transition-all duration-500 group-hover:bg-opacity-80">
                    <Link
                        href={gitUrl}
                        target='_blank'
                        className='h-14 w-14 border-2 relative rounded-full border-[#ADB7BE] hover:border-white group/link'
                    >
                        <CodeBracketIcon
                            className='h-10 w-10 text-[#ADB7BE] absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group-hover/link:text-white'
                        />
                    </Link>
                </div>
            </div>

            <div className="text-white rounded-b-xl mt-3 py-6 px-4">
                <h2 className="text-xl font-semibold mb-2">{title}</h2>
            </div>
        </div>
    );
}

export default ProjectCard;
