import React from 'react'
import logo from '../assets/images/logo.png';
import { House,CodeXml,Cloud,BookText,Settings,Phone,LogOut,X} from 'lucide-react';
import { useNavigate } from 'react-router-dom';


function ScrollBar({onClose}) {
  const navigate = useNavigate();
  return (
    <div className='w-full flex flex-col justify-start items-center p-3 gap-4 lg:block lg:h-full'>
      <div className='w-full h-[32px] flex justify-between items-center'>
        <div className="flex items-center gap-2">
          <img className="h-8 w-6 cursor-pointer" src={logo} alt="logo" />
          <span className="text-2xl font-normal">CodeAnt AI</span>
        </div>
        <button className=' lg:hidden ' onClick={onClose}>
        <X size={24} />
        </button>
      </div>

      <div className='w-full flex flex-col justify-center items-start gap-3 lg:mt-5 lg:h-[650px] lg:justify-between lg:items-start lg:p-1 '>
        <div className='lg:w-full'>
        <select className='w-full h-10 border border-[#D5D7DA] rounded-md outline-none font-normal text-base text-[#181D27] cursor-pointer '>
          <option className=" cursor-pointer" value="UtkarshDhairyaPanwar">UtkarshDhairyaPanwar</option>
        </select>
        <div className='flex flex-col justify-start items-start gap-1 w-full cursor-pointer font-semibold text-sm lg:text-base lg:gap-2 lg:mt-5 '>
          <div className='flex justify-start items-center gap-2 w-full h-10 p-2 lg:hover:bg-[#1570EF] lg:hover:text-white lg:border-2 lg:hover:border-[#1570EF] lg:rounded-lg lg:px-3.5 lg:py-2.5 lg:border-white'>
            <House size={20} />
            <div>Repositories</div>
          </div>
          <div className='flex justify-start items-center gap-2 w-full h-10 p-2 lg:hover:bg-[#1570EF] lg:hover:text-white lg:border-2 lg:hover:border-[#1570EF] lg:rounded-lg lg:px-3.5 lg:py-2.5 lg:border-white'>
          <CodeXml size={20} />
            <div>Code Review</div>
          </div>
          <div className='flex justify-start items-center gap-2 w-full h-10 p-2 lg:hover:bg-[#1570EF] lg:hover:text-white lg:border-2 lg:hover:border-[#1570EF] lg:rounded-lg lg:px-3.5 lg:py-2.5 lg:border-white'>
          <Cloud size={20} />
            <div>Cloud Security</div>
          </div>
          <div className='flex justify-start items-center gap-2 w-full h-10 p-2 lg:hover:bg-[#1570EF] lg:hover:text-white lg:border-2 lg:hover:border-[#1570EF] lg:rounded-lg lg:px-3.5 lg:py-2.5 lg:border-white'>
          <BookText size={20}/>
            <div>How to Use</div>
          </div>
          <div className='flex justify-start items-center gap-2 w-full h-10 p-2 lg:hover:bg-[#1570EF] lg:hover:text-white lg:border-2 lg:hover:border-[#1570EF] lg:rounded-lg lg:px-3.5 lg:py-2.5 lg:border-white'>
          <Settings size={20} />
            <div>Settings</div>
          </div>
          <div className='flex justify-start items-center gap-2 w-full h-10 p-2 lg:hidden'>
          <Phone size={20} />
            <div>Support</div>
          </div>
          <div onClick={()=> navigate("/")} className='flex justify-start items-center gap-2 w-full h-10 p-2 lg:hidden'>
          <LogOut size={20}/>
            <div>Logout</div>
          </div>
        </div>
        </div>
        <div className='hidden lg:flex flex-col justify-start items-start gap-1 w-full cursor-pointer font-semibold text-sm lg:text-base lg:gap-2'>
        <div className='flex justify-start items-center gap-2 w-full h-10 p-2 lg:hover:bg-[#1570EF] lg:hover:text-white lg:border-2 lg:hover:border-[#1570EF] lg:rounded-lg lg:px-3.5 lg:py-2.5 lg:border-white'>
        <Phone size={20} />
            <div>Support</div>
          </div>
          <div onClick={()=> navigate("/")} className='flex justify-start items-center gap-2 w-full h-10 p-2 lg:hover:bg-[#1570EF] lg:hover:text-white lg:border-2 lg:hover:border-[#1570EF] lg:rounded-lg lg:px-3.5 lg:py-2.5 lg:border-white'>
          <LogOut size={20} />
            <div>Logout</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ScrollBar
