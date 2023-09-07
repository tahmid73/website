import MenuIcon from '@material-ui/icons/Menu';
import React from 'react';
import '../index.css';

export default function Topbar(){
    return (
        <nav className="flex items-center bg-black p-3 flex-wrap w-full ">
            <a className="text-white font-lora lg:text-4xl md:text-3xl text-2xl">
                Tahmid Islam
            </a>
            <button
                    className="text-white inline-flex p-3 hover:bg-gray-900 rounded lg:hidden ml-auto nav-tog"
                    data-target="#navigation"
                    onClick={hidding}
                    >
                <MenuIcon/>
            </button>
            <div className={`text-center top-nav w-full lg:inline-flex lg:flex-grow lg:w-auto font-coding hidden lg:visible`} id="navigation">
                <div className="lg:inline-flex lg:flex-row lg:ml-auto text-white flex flex-col">
                    <a href="#" className="lg:inline-flex lg:w-auto px-3 py-2 hover:bg-gray-900 rounded-xl">
                        <span>Home</span>
                    </a>
                    <a href="#" className="lg:inline-flex lg:w-auto px-3 py-2 hover:bg-gray-900 rounded-xl">
                        <span>About</span>
                    </a>
                    <a href="#" className="lg:inline-flex lg:w-auto px-3 py-2 hover:bg-gray-900 rounded-xl">
                        <span>Skill</span>
                    </a>
                    <a href="#" className="lg:inline-flex lg:w-auto px-3 py-2 hover:bg-gray-900 rounded-xl">
                    <span>Contact</span>
                    </a>
                </div>
            </div>
            
            
        </nav>
    );
}

function hidding() {
    var x=document.getElementById('navigation')
    if(x.style.display === 'block'){
        x.style.display="none";
    }
    else{
        x.style.display="block"
    }
}


