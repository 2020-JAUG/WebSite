'use client'
import React from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'


const projectsData = [
    {
        id: 1,
        title: 'Create a simple page for a restaurant using Astro',
        imageUrl: 'https://res.cloudinary.com/dbvjy7vzp/image/upload/w_auto,q_auto,f_auto/v1737584888/local_rhtug5.webp',
        tag: ['All', 'Web'],
        gitUrl: 'https://2020-jaug.github.io/restaurant/',
        previewUrl: '/'
    },
    {
        id: 2,
        title: 'Create a simple image of Nodejs && TypeScript',
        imageUrl: 'https://res.cloudinary.com/dbvjy7vzp/image/upload/w_auto,q_auto,f_auto/v1738013546/docker_obeok0.png',
        tag: ['All', 'Web'],
        gitUrl: 'https://github.com/2020-JAUG/Docker-image',
        previewUrl: '/'
    },
    {
        id: 3,
        title: 'Using the repository pattern in Laravel',
        //description: 'Using the repository pattern in Laravel.',
        imageUrl: 'https://res.cloudinary.com/dbvjy7vzp/image/upload/w_auto,q_auto,f_auto/v1738013546/patterns_mzoete.png',
        tag: ['All', 'Web'],
        gitUrl: 'https://github.com/2020-JAUG/TestLaravelRepository/tree/main',
        previewUrl: '/'
    },
    {
        id: 4,
        title: 'This repository is for learning more about relationships in Laravel',
        //description: 'This repository is for learning more about relationships in Laravel.',
        imageUrl: 'https://res.cloudinary.com/dbvjy7vzp/image/upload/w_auto,q_auto,f_auto/v1738013547/ER_or8oer.png',
        // imageUrl: '/images/projects/ER.png',
        tag: ['All', 'Mobile'],
        gitUrl: 'https://github.com/2020-JAUG/Relationships',
        previewUrl: '/'
    },
    {
        id: 5,
        title: 'Simple project to learn how to make calls to a movie api and create a simple platform for movie rentals',
        //description: 'Simple project to learn how to make calls to a movie api and create a simple platform for movie rentals.',
        imageUrl: 'https://res.cloudinary.com/dbvjy7vzp/image/upload/w_auto,q_auto,f_auto/v1738013547/movie_vohlvy.webp',
        tag: ['All', 'Web'],
        gitUrl: 'https://github.com/2020-JAUG/Front_rental_movie',
        previewUrl: '/'
    }
];

const ProjectsSection = () => {

    const [selectedTag, setSelectedTag] = React.useState('All');

    const handleTagClick = (tag) => {
        setSelectedTag(tag);
    }

    const filteredProjects = projectsData.filter((project) => {
        if (selectedTag === 'All') {
            return true;
        }
        return project.tag.includes(selectedTag);
    });

    return (
        <section id='portfolio' style={{ paddingTop: '60px', marginTop: '-60px' }}>
            <h2 className='text-center text-4xl font-bold text-white mt-8 mb-8 md:mb-12'>Portfolio</h2>
            <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
                {/*<ProjectTag tag='All' onClick={() => handleTagClick('All')} isSelected={selectedTag === 'All'} />*/}
                {/*<ProjectTag tag='Mobile' onClick={() => handleTagClick('Mobile')} isSelected={selectedTag === 'Mobile'} />*/}
                {/*<ProjectTag tag='Web' onClick={() => handleTagClick('Web')} isSelected={selectedTag === 'Web'} />*/}
            </div>
            <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
                {filteredProjects.map((project) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        //description={project.description}
                        imageUrl={project.imageUrl}
                        tag={project.tag}
                        gitUrl={project.gitUrl}
                        previewUrl={project.previewUrl}
                    />
                ))}
            </div>
        </section>
    )
}

export default ProjectsSection