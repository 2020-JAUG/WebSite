// pages/labs/[index].jsx
import Link from 'next/link';
import Head from 'next/head';
import Navbar from '/app/components/Navbar';
import Footer from '/app/components/Footer';
import '/app/globals.css';

const categories = ['Docker', 'JavaScript', 'Laravel', 'MySQL', 'Node.js', 'PHP'];

const MainPage = () => {
    return (
        <div className='min-h-screen flex flex-col bg-[#121212] w-full'>
            <Head>
                <title>Backend developer</title>
                <meta name='description' content='Backend developer' />
                <meta name='keywords' content='backend, developer, software developer' />
                <meta name='robots' content='index,follow'/>
            </Head>
            <Navbar />
            <div className='flex-grow flex flex-col justify-center items-center'>
                <h1 className='text-4xl font-bold text-center mb-8 text-white'>Explore in Labs</h1>
                <div className='flex flex-wrap justify-center'>
                    {categories.map((category, index) => (
                        <div key={index} className='m-2 my-4'>
                            <Link href={`/labs/${category.toLowerCase()}`}>
                                <div className='block bg-gradient-to-br from-green-400 to-blue-500 hover:from-green-500 hover:to-blue-600 active:from-green-600 active:to-blue-700 text-white font-semibold rounded-full px-6 py-3 shadow-lg transition duration-300 ease-in-out transform hover:scale-105 cursor-pointer'>
                                    {category}
                                </div>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default MainPage;