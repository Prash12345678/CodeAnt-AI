import React from 'react'
import gitlab from "../assets/images/gitlab.png";
import key from "../assets/images/key.png";
import { useNavigate } from 'react-router-dom';

function SelfHosted() {
    const navigate = useNavigate();
    return (
        <>
            <div className="flex flex-col w-full space-y-3">

                {/* GitLab */}
                <button onClick={()=> navigate("/home")} className="w-full flex items-center justify-center gap-3 px-4 py-2.5 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                    <img className="w-5 h-5" src={gitlab} alt="gitlab" />
                    <span className="text-sm font-medium">Self Hosted GitLab</span>
                </button>

                {/* Azure DevOps */}
                <button onClick={()=> navigate("/home")} className="w-full flex items-center justify-center gap-3 px-4 py-2.5 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors">
                    <img className="w-5 h-5" src={key} alt="azure" />
                    <span className="text-sm font-medium">Sign in SSO</span>
                </button>

            </div>
        </>
    )
}

export default SelfHosted
