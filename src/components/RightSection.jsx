import React from 'react'
import logo from '../assets/images/logo.png';
import Saas from './Saas';
import SelfHosted from './SelfHosted';
import { useState } from 'react';

function RightSection() {

  const [isSAAS, setIsSAAS] = useState(true);

  return (
    <>
      <div className="w-full lg:w-1/2 flex justify-center items-center">
        <div className='w-full max-w-md px-4 py-8 mx-4 lg:max-w-2xl lg:px-8 lg:py-12'>
          <div className="flex flex-col items-center space-y-6 border-2 border-gray-200 rounded-xl p-6 bg-white">
            {/* Logo and Title */}
            <div className="flex items-center gap-2">
              <img className="h-8 w-6" src={logo} alt="logo" />
              <span className="text-3xl font-normal">CodeAnt AI</span>
            </div>

            {/* Welcome Text */}
            <h1 className="text-2xl font-medium lg:text-4xl text-center">Welcome to CodeAnt AI</h1>

            {/* SAAS and Self Hosted Buttons */}
            <div className="flex gap-3 w-full">
              <button
                className={`lg:text-lg lg:font-semibold flex-1 px-4 py-2 text-sm font-medium rounded-md border-gray-300 border transition-colors ${isSAAS === true ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-[#fafafa] text-black hover:bg-gray-200'}`}
                onClick={() => setIsSAAS(true)}
              >
                SAAS
              </button>
              <button
                className={`lg:text-lg lg:font-semibold flex-1 px-4 py-2 text-sm font-medium rounded-md border-gray-300 border transition-colors ${isSAAS === false ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-[#fafafa] text-black hover:bg-gray-200'}`}
                onClick={() => setIsSAAS(false)}
              >
                Self Hosted
              </button>
            </div>

            {/* Sign in Options */}
            {isSAAS === true ? (<Saas />) : (<SelfHosted />)}
          </div>
          {/* Privacy Policy */}
          <p className="text-sm lg:text-base text-gray-600 text-center mt-5">
            By signing up you agree to the{" "}
            <a href="#" className="text-gray-900 underline">
              Privacy Policy
            </a>
            .
          </p>
        </div>
      </div>
    </>
  )
}

export default RightSection
