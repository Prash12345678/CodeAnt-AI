import React from 'react'
import azure from '../assets/images/azure.png';
import bitbucket from '../assets/images/bitbucket.png';
import github from '../assets/images/github.png';
import gitlab from '../assets/images/gitlab.png';
import { useNavigate } from 'react-router-dom';

function Saas() {
  const navigate = useNavigate();
  return (
    <>
     <div className="flex flex-col w-full space-y-3">
            {/* Github */}
            <button onClick={()=> navigate("/home")} className="w-full flex items-center justify-center gap-3 px-4 py-2.5 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
              <img className="w-5 h-5" src={github} alt="github" />
              <span className="text-sm font-medium">Sign in with Github</span>
            </button>

            {/* Bitbucket */}
            <button onClick={()=> navigate("/home")} className="w-full flex items-center justify-center gap-3 px-4 py-2.5 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
              <img className="w-5 h-5" src={bitbucket} alt="bitbucket" />
              <span className="text-sm font-medium">Sign in with Bitbucket</span>
            </button>

            {/* Azure DevOps */}
            <button onClick={()=> navigate("/home")} className="w-full flex items-center justify-center gap-3 px-4 py-2.5 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
              <img className="w-5 h-5" src={azure} alt="azure" />
              <span className="text-sm font-medium">Sign in with Azure Devops</span>
            </button>

            {/* GitLab */}
            <button onClick={()=> navigate("/home")} className="w-full flex items-center justify-center gap-3 px-4 py-2.5 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
              <img className="w-5 h-5" src={gitlab} alt="gitlab" />
              <span className="text-sm font-medium">Sign in with GitLab</span>
            </button>
          </div> 
    </>
  )
}

export default Saas
