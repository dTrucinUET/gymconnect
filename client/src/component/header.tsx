import React from "react";

export default function Header()
{
    return(
        <React.Fragment>

            <nav className="bg-black py-4 px-6 border-b-4 border-orange-500">
                <div className="container mx-auto flex justify-between items-center">
                    <a href="/" className="text-2xl font-bold">
                        <span className="text-white">GYM</span><span className="text-orange-500">CONNECT</span>
                    </a>

                    <ul className="hidden md:flex space-x-8 text-white">
                      
                    </ul>

                    <div className="hidden md:flex items-center space-x-3">
                     
                    </div>
                    <button className="md:hidden text-gray-400 focus:outline-none">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                        </svg>
                    </button>
                </div>
            </nav>
        </React.Fragment>
    )
}