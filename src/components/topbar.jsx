import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import '../index.css';

export default function Topbar(){
    return (
        <nav className="flex items-center bg-black p-3 flex-wrap">
            <a className="text-white font-lora text-4xl">
                Tahmid Islam
            </a>
            <button
                    className="text-white inline-flex p-3 hover:bg-gray-900 rounded lg:hidden ml-auto nav-tog"
                    data-target="#navigation">
                <MenuIcon/>
            </button>
            <div className={`text-center top-nav w-full lg:inline-flex lg:flex-grow lg:w-auto font-coding`} id="navigation">
                <div className="lg:inline-flex lg:flex-row lg:ml-auto text-white flex flex-col">
                    <a href="#" className="lg:inline-flex lg:w-auto px-3 py-2 hover:bg-gray-900 rounded">
                        <span>Home</span>
                    </a>
                    <a href="#" className="lg:inline-flex lg:w-auto px-3 py-2 hover:bg-gray-900 rounded ">
                        <span>About</span>
                    </a>
                    <a href="#" className="lg:inline-flex lg:w-auto px-3 py-2 hover:bg-gray-900 rounded">
                        <span>Skill</span>
                    </a>
                    <a href="#" className="lg:inline-flex lg:w-auto px-3 py-2 hover:bg-gray-900 rounded">
                    <span>Contact</span>
                    </a>
                </div>
            </div>
            
            
        </nav>
    );
}


