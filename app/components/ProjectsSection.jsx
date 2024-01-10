import React from 'react'
import ProjectCard from './ProjectCard'


const projectsData = [
    {
        id: 1,
        title: 'Project 1',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
        //imageUrl: 'https://picsum.photos/id/300/200/300',
        imageUrl: '/images/projects/buceo.png',
        tag: ['All', 'Web'],
        gitUrl: '/',
        previewUrl: '/'
    },
    {
        id: 2,
        title: 'Project 2',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
        imageUrl: 'https://picsum.photos/id/202/200/300',
        tag: ['All', 'Web'],
        gitUrl: '/',
        previewUrl: '/'
    },
    {
        id: 3,
        title: 'Project 3',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
        imageUrl: 'https://picsum.photos/id/35/200/300',
        tag: ['All', 'Web'],
        gitUrl: '/',
        previewUrl: '/'
    },
    {
        id: 4,
        title: 'Project 4',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
        imageUrl: 'https://picsum.photos/id/99/200/300',
        tag: ['All', 'Web'],
        gitUrl: '/',
        previewUrl: '/'
    },
    {
        id: 5,
        title: 'Project 5',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
        imageUrl: 'https://picsum.photos/id/12/200/300',
        tag: ['All', 'Web'],
        gitUrl: '/',
        previewUrl: '/'
    },
    {
        id: 6,
        title: 'Project 6',
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
        imageUrl: 'https://picsum.photos/id/3/200/300',
        tag: ['All', 'Web'],
        gitUrl: '/',
        previewUrl: '/'
    }
];

const ProjectsSection = () => {

    return (
        <><h2 className='text-center text-4xl font-bold text-white mt-4 mb-8 md:mb-12'>My Projects</h2>
            <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
                <button>All</button>
                <button>Web</button>
            </div>
            <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
                {projectsData.map((project) => (
                    <ProjectCard
                        key={project.id}
                        title={project.title}
                        description={project.description}
                        imageUrl={project.imageUrl}
                        tag={project.tag}
                        gitUrl={project.gitUrl}
                        previewUrl={project.previewUrl}
                    />
                ))}
            </div>
        </>
    )
}

export default ProjectsSection