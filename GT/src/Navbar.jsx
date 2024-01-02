import WalletIcon from './Images/wallet.png';
import HamburgerIcon from './Images/Hamburger.png';
import './Navbar.css';
import Sidebar from './Sidebar';
import React, { useState } from 'react';

function Navbar() {

    const [showSidebar, setShowSidebar] = useState(false);

    const handleSidebarToggle = () => {
        setShowSidebar(!showSidebar);
    };
    return (
        <nav className="bg-custom-purple text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <div className="flex items-center">
                    <button onClick={handleSidebarToggle} className="mr-4">
                        <img src={HamburgerIcon} alt="Hamburger Icon" className="w-8 h-8" />
                    </button>
                    <div className="text-xl fading-text">  
                        <marquee scrollamount="4" > GT KALYAN MILAN MATKA 
                        </marquee>
                    </div>
                </div>
                <ul className="font-bold text-lg flex space-x-4">
                    <li className="flex items-center">
                        <a href="#" className="text-white flex items-center">
                            <img src={WalletIcon} alt="Wallet Icon" className="w-8 h-8 mr-2" />
                            <span>0 pts</span>
                        </a>
                    </li>
                </ul>
            </div>
            {showSidebar && <Sidebar />} 
        </nav>
    )
}

export default Navbar;