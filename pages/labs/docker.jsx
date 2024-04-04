import Link from 'next/link';
import Head from 'next/head';
import Navbar from '/app/components/Navbar';
import Footer from '/app/components/Footer';
import '/app/globals.css';

export const dockerTopics = {
    'Create Docker image': {
        description: 'Build an image with node js.',
        // Add more values if necessary
    },
    'Basic commands': {
        description: 'Description of theme 2...',
    },
    'Topic 3': {
        description: 'Description of theme 3...',
    },
    'Topic 4': {
        description: 'Description of theme 4...'
    }
};

// const DockerPage = () => {
//     return (
//         <div className='min-h-screen flex flex-col bg-[#121212] flex-wrap'>
//             <Head>
//                 <title>Backend developer</title>
//                 <meta name='description' content='Backend developer' />
//                 <meta name='keywords' content='backend, developer, software developer' />
//                 <meta name='robots' content='index,follow'/>
//             </Head>
//             <Navbar />
//             <div className='flex-grow flex flex-col justify-center lg:mt-28 md:mt-28 sm:mt-28'>
//                 <div className='max-w-screen-xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-8 lg:gap-12'>
//                     {Object.keys(dockerTopics).map((topic, index) => (
//                         <div key={index} className='h-full border border-green-500 rounded-lg p-4 cursor-pointer transition ease-in-out delay-150 hover:-translate-y-1'>
//                             <Link href={`/labs/docker/${encodeURIComponent(topic.replace(/\s+/g, '-'))}`}>
//                                 <h2 className='font-bold text-lg text-white md:text-xl lg:text-2xl mb-2'>{topic}</h2>
//                                 {/*<h2 className='text-gray-400 text-sm md:text-base lg:text-lg whitespace-normal'>{dockerTopics[topic].description}</h2>*/}
//                             </Link>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//             <Footer />
//         </div>
//     );
// };
//
// export default DockerPage;

const DockerPage = () => {
    return (
        <div className='min-h-screen flex flex-col bg-[#121212] w-full'>
            <Head>
                <title>Backend developer</title>
                <meta name='description' content='Backend developer' />
                <meta name='keywords' content='backend, developer, software developer' />
                <meta name='robots' content='index,follow'/>
            </Head>
            <Navbar />
            <div className='flex-grow flex flex-col justify-center items-center mt-28'>
                <div className='max-w-screen-xl mx-auto px-4'>
                    <div className='flex flex-wrap justify-center'>
                        {Object.keys(dockerTopics).map((topic, index) => (
                            <div key={index} className='m-2 my-4 sm:w-1/2 md:w-1/3 lg:w-1/4 transition ease-in-out delay-150 hover:-translate-y-1'>
                                <div className='h-full'>
                                    <div className='relative z-10 border border-green-500 text-center rounded-lg p-2 h-full cursor-pointer'>
                                        <Link href={`/labs/docker/${encodeURIComponent(topic.replace(/\s+/g, '-'))}`}>
                                            <div>
                                                <h1 className='font-bold text-lg md:text-xl lg:text-2xl mb-2 text-white'>{topic}</h1>
                                                {/*<h2 className='text-gray-400 text-sm md:text-base lg:text-lg whitespace-normal'>{dockerTopics[topic].description}</h2>*/}
                                            </div>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default DockerPage;
