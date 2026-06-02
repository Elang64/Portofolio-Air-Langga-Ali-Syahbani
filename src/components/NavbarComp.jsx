"use client"; 

import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; 

function NavbarComp() {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
       <nav className="backdrop-blur-3xl fixed w-full z-50 text-white bg-black/10 border-b border-blue-500/50 font-sans">
        
        <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            
         
            <div className="flex items-center gap-2 text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-cyan-400">
                Portofolio.
            </div>
            
          
            <div className="hidden md:flex gap-8 font-semibold">
                <a href="#home" className="hover:text-blue-500 transition-colors">Home</a>
                <a href="#project" className="hover:text-blue-500 transition-colors">Project</a>
                <a href="#skill" className="hover:text-blue-500 transition-colors">Skill</a>
                <a href="#certificate" className="hover:text-blue-500 transition-colors">Certificate</a>
                <a href="#contactme" className="hover:text-blue-500 transition-colors">Contact Me</a>
            </div>

   
            <div className="md:hidden flex items-center">
                <button 
                    onClick={toggleMenu} 
                    className="text-gray-300 hover:text-cyan-400 focus:outline-none transition-colors"
                >
                    {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
                </button>
            </div>
           
        </div>

    
        {isOpen && (
            <div className="md:hidden absolute top-full left-0 w-full bg-gray-900/95 backdrop-blur-xl border-b border-blue-500/30 shadow-2xl">
                <div className="flex flex-col px-6 py-4 space-y-4 font-medium text-center">
                    <a href="#home" onClick={toggleMenu} className="block py-2 text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 rounded-lg transition-all">Home</a>
                    <a href="#project" onClick={toggleMenu} className="block py-2 text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 rounded-lg transition-all">Project</a>
                    <a href="#skill" onClick={toggleMenu} className="block py-2 text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 rounded-lg transition-all">Skill</a>
                    <a href="#certificate" onClick={toggleMenu} className="block py-2 text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 rounded-lg transition-all">Certificate</a>
                    <a href="#contactme" onClick={toggleMenu} className="block py-2 text-gray-300 hover:text-cyan-400 hover:bg-gray-800/50 rounded-lg transition-all">Contact Me</a>
                </div>
            </div>
        )}

    </nav>
    );
}

export default NavbarComp;