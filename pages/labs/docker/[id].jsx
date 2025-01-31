// app/labs/docker/[id].jsx
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { dockerTopics } from '../docker';
import Navbar from '../../../app/components/Navbar';
import Footer from '../../../app/components/Footer';
import '/app/globals.css';

const TopicPage = () => {
    const router = useRouter();
    const { id } = router.query;

    const [topicData, setTopicData] = useState({ sections: [] });

    useEffect(() => {
        if (id) {
            const formattedId = id.replace(/-/g, ' ');
            const topic = dockerTopics[formattedId] || { sections: [] };
            setTopicData(topic);
        }
    }, [id]);

    return (
        <div className='min-h-screen flex flex-col bg-[#121212] w-full'>
            <Navbar />
            <div className='flex-grow flex flex-col items-center justify-center text-white px-4 py-8 pt-36'>
                {topicData.sections.map((section, index) => (
                    section.type === 'text' ? (
                        // <p key={index} className='text-center mb-6 max-w-2xl'>{section.content}</p>
                        <p key={index} className='text-center mb-6 max-w-2xl' dangerouslySetInnerHTML={{ __html: section.content }}></p>
                    ) : (
                        <img key={index} src={section.content} alt={`Illustration for ${id}`} className="my-6 max-w-full h-auto" />
                    )
                ))}
            </div>
            <Footer />
        </div>
    );
};

export default TopicPage;