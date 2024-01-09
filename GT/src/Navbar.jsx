import WalletIcon from './Images/wallet.png';
import HamburgerIcon from './Images/Hamburger.png';
import './Navbar.css';
import Sidebar from './Sidebar';
import React, { useState, useEffect, useRef } from 'react';
import New from './New';


function Navbar() {

    const [showSidebar, setShowSidebar] = useState(false);
    const firstDivRef = useRef();

    useEffect(()=>{
        let handler= (e)=>{
            if(!firstDivRef.current.contains(e.target)){
            setShowSidebar(false);
            }
        };
        document.addEventListener("mousedown", handler);
        return ()=>{
            document.removeEventListener("mousedown", handler);
        }
    });

    const handleSidebarToggle = () => {
        setShowSidebar(!showSidebar);
    };


    
    return (

        <nav className="bg-custom-purple text-white relative p-4">
            <div className="container mx-auto flex  flex-1 justify-between items-center">
                <div className="flex items-center min-w-0">
                    <button onClick={handleSidebarToggle} className="mr-4">
                        <img src={HamburgerIcon} alt="Hamburger Icon" className="w-8 h-8" />
                    </button>
                    <div className="text-xl fading-text">  
                        <marquee scrollamount="4" > GT KALYAN MILAN MATKA 
                        </marquee>
                    </div>
                </div>
                <ul className="font-bold text-lg flex flex-shrink: 0 absolute right-10 top-15">
                    <li className="flex items-center">
                        <a href="#" className="text-white flex items-center">
                            <img src={WalletIcon} alt="Wallet Icon" className="w-8 h-8 mr-2" />
                            <span>0 pts</span>
                        </a>
                    </li>
                </ul>
            </div>
            {showSidebar && <New firstDivRef={firstDivRef}/>} 
        </nav>
    )
}

export default Navbar;