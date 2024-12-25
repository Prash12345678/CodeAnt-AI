import React from 'react'
import ant from "../assets/images/Subtract.png";
import logo from "../assets/images/logo.png";
import piechart from "../assets/images/piechart.png";
import arrow from "../assets/images/arrow.png";

function LeftSection() {
    return (
        <>
            <div className="hidden lg:block lg:w-1/2 bg-white relative p-8">

                <div className=' w-full h-2/3 flex justify-center items-center'>
                    <div className=' w-[474px] h-80 flex flex-col p-0 items-center relative'>
                        <div className=' flex w-[447px] h-[170px] '>
                            <div className='border rounded-3xl w-fit shadow-2xl bg-white'>
                                {/* Logo Section */}
                                <div className="flex items-center gap-3 p-6 border-b-2">
                                    <img className="h-8 w-7" src={logo} alt="logo" />
                                    <span className="text-xl font-bold">AI to Detect & Audit Bad Code</span>
                                </div>

                                {/* Stats Section */}
                                <div className="flex gap-16 p-6">
                                    <div className="flex flex-col items-center">
                                        <span className="text-2xl font-bold text-[#081735]">30+</span>
                                        <span className="text-sm text-[#171717]">Language Support</span>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <span className="text-2xl font-bold text-[#081735]">10k+</span>
                                        <span className="text-sm text-[#171717]">Developers</span>
                                    </div>
                                    <div className="flex flex-col items-center">
                                        <span className="text-2xl font-bold text-[#081735]">100k+</span>
                                        <span className="text-sm text-[#171717]">Hours Saved</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='flex justify-end w-[474px] h-[164px] relative -mt-2 z-10'>
                            <div className=' bg-white flex justify-start items-start gap-10 border rounded-3xl w-[270px] h-[164px] shadow-2xl px-7 py-6 z-10'>
                                <div className='flex flex-col justify-start items-start gap-2'>
                                    <img className='h-14 w-14' src={`${piechart}`} alt="piechart" />
                                    <div className='font-bold text-sm font-sans'>Issues Fixed</div>
                                    <div className='font-bold text-3xl font-sans'>500K+</div>
                                </div>
                                <div className='flex flex-col justify-start items-start gap-2'>
                                    <div className='flex justify-center items-center gap-1'>
                                        <img className='h-6 w-6' src={`${arrow}`} alt="arrow" />
                                        <div className='text-sm font-bold text-[#0049C6] font-sans'>14%</div>
                                    </div>
                                    <div className='text-sm font-normal font-sans'>This Week</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Ant Logo Watermark */}
                <img
                    className="absolute left-0 bottom-0 h-80 w-72 opacity-90"
                    src={ant}
                    alt="ant"
                />
            </div>
        </>
    )
}

export default LeftSection
