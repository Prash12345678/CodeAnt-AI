import React from 'react'
import { Database } from 'lucide-react'

function Repository({repositories}) {
  return (
    repositories.map((repo)=>(
        <div key={repo.id} className='w-full h-[88px] p-4 flex flex-col justify-center items-start gap-3 border-b border-[#D5D7DA] lg:border lg:hover:border-[#E9EAEB] lg:rounded-md lg:mb-1 lg:hover:bg-[#F7F8F9] lg:cursor-pointer'> 
              <div className='flex gap-2 items-center justify-start'>
               <span className='font-medium text-lg font-sans'>{repo.reponame}</span>
               <span className='border border-[#B2DDFF] rounded-3xl px-2.5 py-0.5 bg-[#EFF8FF] font-normal text-sm text-[#175CD3]'>{repo.type}</span>
              </div>
              <div className='flex gap-6 items-center justify-start text-[#181D27]'>
              <div className='flex gap-2 justify-center items-center'>
                <div className='font-normal text-sm lg:text-base'>{repo.language}</div>
                <div className='w-2 h-2 rounded-full bg-[#1570EF]'></div>
                </div>
              <span className='flex justify-start items-center gap-1'>
              <Database strokeWidth={2} size={15} />
                 <span className='font-normal text-sm lg:text-base'>{repo.size}</span>
                 </span>
              <span className='font-normal text-sm lg:text-base'> Updated {repo.lastupdated}</span>
              </div>
            </div>
    ))
  )
}

export default Repository
