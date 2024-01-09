import React, {useRef} from "react";
import Home from './Images/home.png';
import Profile from './Images/profile.png';
import AddFund from './Images/add.png';
import Wallet from './Images/wallet.png';
import WinHistory from './Images/win_history.png';
import BidHistory from './Images/bid_history.png';
import Rating from './Images/rating.png';
import Share from './Images/share.png';
import ChangePass from './Images/reset_pass.png';
import "./Sidebar.css";
import sidebarBackground from './Images/bg.png';
import logoutImg from './Images/logout.png';
import logo from './Images/logo.png';
import call24 from './Images/call_24.png';

function New({ firstDivRef }){
  const sidebarStyle = {
    backgroundImage: `url(${sidebarBackground})`,
    
    /* Add other background properties as needed */
  };

  let menuRef = useRef();



    return(
        <>

<div id="docs-sidebar" className="hs-overlay hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[60] w-64 bg-white border-e border-gray-200 pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500 dark:bg-gray-800 dark:border-gray-700"  style={sidebarStyle} ref={firstDivRef}>
  <div class="px-6">
    {/* User Info */}
    <div className="text-center mb-4">
            <div className="text-xl font-bold">Username</div>
            <div className="text-sm opacity-75">1234567890</div>
          </div>
          {/* Logout Button */}
          <div className="flex justify-center mt-8">
            <button className="flex items-center justify-center text-white font-bold rounded-full w-10 h-10 mx-2">
              <img
                  src={call24} // Replace with the path to your Button 1 image
                  alt="Button 1"
                  className="w-full h-full object-cover"
                />
            </button>
            <div className="flex items-center mx-2">
              <img
                src={logo}
                alt="Center Image"
                className="w-20 h-20"
              />
            </div>
            <button className="flex items-center justify-center hover:bg-green-700 text-white font-bold rounded-full w-10 h-10 mx-2">
              <img
                    src={logoutImg} // Replace with the path to your Button 1 image
                    alt="Button 1"
                    className="w-full h-full object-cover"
                  />
            </button>
          </div>
  </div>
  <nav class="hs-accordion-group p-6 w-full flex flex-col flex-wrap" data-hs-accordion-always-open>
    <ul class="space-y-1.5">
      <li>
        <a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded-lg">
          <img src={Home} alt="Home" className="w-8 h-8 mr-2 inline-block" />
          Home
        </a>
      </li>

      <li>
        <a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded-lg">
          <img src={Profile} alt="Profile" className="w-8 h-8 mr-2 inline-block" />
            Profile
        </a>
      </li>

      <li>
        <a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded-lg">
          <img src={AddFund} alt="Add Funds" className="w-8 h-8 mr-2 inline-block" />
            Add Funds
        </a>
      </li>

      <li>
        <a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded-lg">
          <img src={Wallet} alt="Wallet" className="w-8 h-8 mr-2 inline-block" />
            Wallet
        </a>
      </li>
            
      <li>
          <a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded-lg">
            <img src={WinHistory} alt="Win History" className="w-8 h-8 mr-2 inline-block" />
              Win History
          </a>
      </li>

      <li>
        <a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded-lg">
          <img src={BidHistory} alt="Bid History" className="w-8 h-8 mr-2 inline-block" />
            Bid History
        </a>
      </li>

      <li>
        <a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded-lg">
          <img src={BidHistory} alt="How To Play" className="w-8 h-8 mr-2 inline-block" />
            How To Play
        </a>
      </li>

      <li>
        <a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded-lg">
          <img src={Rating} alt="Game Rates" className="w-8 h-8 mr-2 inline-block" />
            Game Rates
        </a>
      </li>

      <li>
        <a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded-lg">
          <img src={Rating} alt="Rating" className="w-8 h-8 mr-2 inline-block" />
            Rating
        </a>
      </li>

      <li>
        <a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded-lg">
          <img src={Share} alt="Share" className="w-8 h-8 mr-2 inline-block" />
            Share
        </a>
      </li>

      <li>
        <a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded-lg">
          <img src={ChangePass} alt="Change Password" className="w-8 h-8 mr-2 inline-block" />
            Change Password
        </a>
      </li>

      <li>
        <a href="#" className="block py-2 px-4 hover:bg-gray-700 rounded-lg">
          <img src={ChangePass} alt="Delete Account" className="w-8 h-8 mr-2 inline-block" />
            Delete Account
        </a>
      </li>
    </ul>
  </nav>
</div>
</>
    );
}
export default New;