import {React,useState} from 'react'
import Home from '../components/Home';
import ScrollBar from '../components/ScrollBar';

function HomePage() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleScrollBar = () => {
        setIsOpen(!isOpen);
    };
    return (
        <div className="relative min-h-screen w-full lg:flex">

            {/* Sliding ScrollBar */}
            <div
                className={` lg:h-full lg:w-1/6 lg:border-r lg:translate-y-0 lg:animate-none lg:block fixed top-0 left-0 h-2/3 w-full bg-white transform transition-transform duration-300 ease-in-out z-30
       ${isOpen ? 'translate-y-0' : '-translate-y-full'}`}
            >
                <ScrollBar onClose={toggleScrollBar} />
            </div>

            {/* Main content */}
            <div className="relative z-10 lg:w-full lg:ml-[16.666667%]">
                <Home onMenuClick={toggleScrollBar} />
            </div>

            {/* Overlay */}
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-20 lg:hidden"
                    onClick={toggleScrollBar}
                />
            )}

        </div>
    )
}

export default HomePage
