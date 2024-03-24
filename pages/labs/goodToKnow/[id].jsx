// app/labs/goodToKnow/[id].jsx
import { useRouter } from 'next/router';
import { goodToKnowTopics } from '../goodtoknow';
import Navbar from '../../../app/components/Navbar';
import Footer from '../../../app/components/Footer';
import '/app/globals.css';

const TopicPage = () => {
    const router = useRouter();
    const { id } = router.query;

    const topicDescription = goodToKnowTopics[id]?.description;

    return (
        <div className='min-h-screen flex flex-col bg-[#121212] w-full'>
            <Navbar />
            <div className='flex-grow flex flex-col text-white justify-center items-center mt-20'>
                <h1 className='text-2xl font-bold mb-4'>{id}</h1>
                <p>{topicDescription}</p>
            </div>
            <Footer />
        </div>
    );
};

export default TopicPage;
