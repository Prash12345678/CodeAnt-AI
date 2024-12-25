import React, { useState } from 'react';
import Repository from './Repository';
import logo from '../assets/images/logo.png';
import { Menu, RefreshCw, Plus, Search } from 'lucide-react';

function Home({ onMenuClick }) {
  const [repos, setRepos] = useState([
    {
      "id": 1,
      "reponame": "design-system",
      "type": "Public",
      "language": "React",
      "size": "7320 KB",
      "lastupdated": "1 day ago"
    },
    {
      "id": 2,
      "reponame": "codeant-ci-app",
      "type": "Private",
      "language": "Javascript",
      "size": "5871 KB",
      "lastupdated": "2 days ago"
    },
    {
      "id": 3,
      "reponame": "analytics-dashboard",
      "type": "Private",
      "language": "Python",
      "size": "4521 KB",
      "lastupdated": "5 days ago"
    },
    {
      "id": 4,
      "reponame": "mobile-app",
      "type": "Public",
      "language": "Swift",
      "size": "3096 KB",
      "lastupdated": "3 days ago"
    },
    {
      "id": 5,
      "reponame": "e-commerce-platform",
      "type": "Private",
      "language": "Java",
      "size": "6210 KB",
      "lastupdated": "6 days ago"
    },
    {
      "id": 6,
      "reponame": "blog-website",
      "type": "Public",
      "language": "HTML/CSS",
      "size": "1876 KB",
      "lastupdated": "4 days ago"
    },
    {
      "id": 7,
      "reponame": "social-network",
      "type": "Private",
      "language": "PHP",
      "size": "5432 KB",
      "lastupdated": "7 days ago"
    },
    {
      "id": 8,
      "reponame": "weather-app",
      "type": "Public",
      "language": "C++",
      "size": "3920 KB",
      "lastupdated": "2 days ago"
    },
    {
      "id": 9,
      "reponame": "inventory-system",
      "type": "Private",
      "language": "Ruby",
      "size": "2150 KB",
      "lastupdated": "8 days ago"
    },
    {
      "id": 10,
      "reponame": "chat-app",
      "type": "Public",
      "language": "Node.js",
      "size": "4800 KB",
      "lastupdated": "3 days ago"
    },
    {
      "id": 11,
      "reponame": "machine-learning-models",
      "type": "Private",
      "language": "Python",
      "size": "10240 KB",
      "lastupdated": "1 day ago"
    },
    {
      "id": 12,
      "reponame": "portfolio-website",
      "type": "Public",
      "language": "HTML/CSS",
      "size": "2750 KB",
      "lastupdated": "5 days ago"
    },
    {
      "id": 13,
      "reponame": "task-scheduler",
      "type": "Private",
      "language": "Java",
      "size": "5140 KB",
      "lastupdated": "7 days ago"
    },
    {
      "id": 14,
      "reponame": "image-processor",
      "type": "Public",
      "language": "C++",
      "size": "3968 KB",
      "lastupdated": "2 days ago"
    },
    {
      "id": 15,
      "reponame": "video-streaming-app",
      "type": "Private",
      "language": "Swift",
      "size": "8940 KB",
      "lastupdated": "6 days ago"
    },
    {
      "id": 16,
      "reponame": "payment-gateway",
      "type": "Private",
      "language": "PHP",
      "size": "6375 KB",
      "lastupdated": "4 days ago"
    },
    {
      "id": 17,
      "reponame": "blog-engine",
      "type": "Public",
      "language": "Ruby",
      "size": "3150 KB",
      "lastupdated": "8 days ago"
    },
    {
      "id": 18,
      "reponame": "healthcare-app",
      "type": "Private",
      "language": "Kotlin",
      "size": "7210 KB",
      "lastupdated": "1 day ago"
    },
    {
      "id": 19,
      "reponame": "game-engine",
      "type": "Public",
      "language": "C#",
      "size": "12480 KB",
      "lastupdated": "9 days ago"
    }
  ]);
  return (
    <div>
      <div className='flex justify-center items-center min-h-screen w-full'>
        <div className='w-full lg:max-w-none max-w-[440px] h-screen'>
          <div className='w-full h-[64px] flex justify-between items-center px-6 lg:hidden'>
            <div className="flex items-center gap-2">
              <img className="h-8 w-6 cursor-pointer" src={logo} alt="logo" />
              <span className="text-3xl font-normal">CodeAnt AI</span>
            </div>
            <button className=' lg:hidden ' onClick={onMenuClick}>
              <Menu size={24} />
            </button>
          </div>

          <div className='w-full h-[208px] flex flex-col justify-center items-start gap-1 px-6 border-t border-b border-[#E9EAEB] lg:border-none'>
            <div className='font-semibold font-sans text-3xl lg:hidden'>Repositories</div>
            <div className='font-thin text-[#414651] font-sans text-lg lg:hidden'>{repos.length} total repositories</div>
            <div className='flex items-center justify-start gap-3 mt-2 lg:hidden'>
              <button className='flex gap-1 p-1 rounded-md justify-center items-center border border-[#D5D7DA] px-3.5 py-2.5'>
                <RefreshCw strokeWidth={1} size={24} />
                <span className='text-[#414651]'>Refresh All</span>
              </button>
              <button className='flex gap-1 p-1 rounded-md justify-center items-center border border-[#D5D7DA] px-3.5 py-2.5 bg-[#1570EF]'>
                <Plus color='white' strokeWidth={1} size={20} />
                <span className='text-white'>Add Repository</span>
              </button>
            </div>
            <div className='hidden lg:flex items-center justify-between w-full'>
              <div className='flex flex-col justify-center items-start gap-1'>
                <div className='font-semibold font-sans text-3xl '>Repositories</div>
                <div className='font-thin text-[#414651] font-sans text-lg '>{repos.length} total repositories</div>
              </div>
              <div className='flex items-center justify-start gap-3 mt-2 font-normal text-sm'>
                <button className='flex gap-1 p-1 rounded-md justify-center items-center border border-[#D5D7DA] px-3.5 py-2.5 lg:hover:bg-[#F3F4F6]'>
                  <RefreshCw strokeWidth={1} size={20} />
                  <span className='text-[#414651]'>Refresh All</span>
                </button>
                <button className='flex gap-1 p-1 rounded-md justify-center items-center border border-[#D5D7DA] px-3.5 py-2.5 bg-[#1570EF] lg:hover:bg-blue-700'>
                  <Plus color='white' strokeWidth={1} size={20} />
                  <span className='text-white'>Add Repository</span>
                </button>
              </div>
            </div>
            <div className='flex items-center justify-start gap-2 rounded-md px-3.5 py-2.5 border border-[#D5D7DA] bg-white w-full mt-2 lg:w-1/3'>
              <Search strokeWidth={1} size={20} />
              <input className='w-full font-normal text-base outline-none placeholder:text-gray-500' type="text" placeholder='Search Repositories' />
            </div>
          </div>

          <div className='w-full h-auto bg-white flex flex-col justify-center items-center  '>
            <Repository repositories={repos} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home
