import WalletIcon from "./Images/wallet.png";
import HamburgerIcon from "./Images/Hamburger.png";
import "./Navbar.css";
import React, { useState, useEffect, useRef ,useMemo} from "react";
import "./Sidebar.css";
import sidebarBackground from "./Images/bg.png";
import logoutImg from "./Images/logout.png";
import logo from "./Images/logo.png";
import call24 from "./Images/call_24.png";
import Home from "./Images/home.png";
import profile from "./Images/profile.png";
import AddFund from "./Images/add.png";
import Wallet from "./Images/wallet.png";
import WinHistory from "./Images/win_history.png";
import BidHistory from "./Images/bid_history.png";
import Rating from "./Images/rating.png";
import Share from "./Images/share.png";
import ChangePass from "./Images/reset_pass.png";
import lock_icon from "./Images/lock_icon.png";
import user_profile from "./Images/user_profile.png";
import question from "./Images/question.png";
import website from "./Images/website.png";
import share_icon from "./Images/share_icon.png";
import policy from "./Images/policy.png";
import telegram_icon from "./Images/telegram_icon.png";

import { NavLink, useNavigate} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { logout } from "./Util/loginSlice";
import useGameFront from "./Hooks/useGameFront";
import { removePass } from "./Util/passslice";

function Navbar() {
  const Hamburg = {
    transform: "translateY(3px)",
    display: "flex",
    alignItems: "center",
    cursor: "pointer",
  };
  const sidebarStyle = {
    backgroundImage: `url(${sidebarBackground})`,
    backgroundSize:'cover'
    /* Add other background properties as needed */
  };
  
  const username = useSelector(state => state.userDetail.username);
  const token = useSelector(state => state.userDetail.token);
  const mobile = useSelector(state=>state.userDetail.mobile)
  const [isBackdropActive, setBackdropActive] = useState(false)
  const [isSidebarActive, setSidebarActive] = useState(false)
  const navigate = useNavigate();
  const resinfo = useGameFront(token);
  console.log(resinfo)


  const handleHamburgerClick = () => {  
    console.log(isBackdropActive)
    setBackdropActive(!isBackdropActive)
    setSidebarActive(!isSidebarActive)
  };
  const handleBackdropClick = () => {  
    console.log(isBackdropActive)
    setBackdropActive(!isBackdropActive)
    setSidebarActive(!isSidebarActive)
  };
  const dispatch = useDispatch();

  const handlelogout =()=>{
    dispatch(logout());
    dispatch(removePass());
    navigate('/') 
  }



  return (
    <nav className="bg-custom-purple text-white relative p-2">
      <div className="container flex mx-auto flex-1 justify-between items-center">
        <div className="flex items-center ">
          <div onClick={handleHamburgerClick} style={Hamburg} className="mr-4">
            <img src={HamburgerIcon} alt="Hamburger Icon" className="w-8 h-8" />
          </div>

          <div className="text-xl fading-text">

            <div className="w-40">
            <marquee scrollamount="4"> SATTA MATKA OFFICIALS</marquee>
            </div>
            
          </div>


          <ul className="font-bold text-lg flex flex-shrink: 0 absolute right-10 top-15">
          <li className="flex items-center">
            <NavLink to='/imp7' className="text-white flex items-center">
              <img
                src={WalletIcon}
                alt="Wallet Icon"
                className="w-8 h-8 mr-2"
               
              />
              <span>{resinfo.wallet_amt}</span>
            </NavLink>
          </li>
        </ul>
        </div>
        <div onClick={handleBackdropClick} className={isBackdropActive ? "backdrop--active" : "backdrop"}></div>
        <div className={isSidebarActive ? "sidebar--active" : "sidebar"} style={sidebarStyle}>
          <div className="px-6 pt-4">
            {/* User Info */}
            <div className="text-center mb-4">
              <div className="text-xl font-bold">{username ? username : "sumit"}</div>
              <div className="text-sm opacity-75">{mobile}</div>
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
                <img src={logo} alt="Center Image" className="w-20 h-20" />
              </div>
              <button className="flex items-center justify-center hover:bg-green-700 text-white font-bold rounded-full w-10 h-10 mx-2" >
                <img
                  src={telegram_icon} // Replace with the path to your Button 1 image
                  alt="Button 1"
                  className="w-full h-full object-cover"
                />
              </button>
            </div>
          </div>
          <ul className="space-y-1.5">
            <li>
              <NavLink
                to='/imp'
                className="block py-2 px-4 hover:bg-gray-700 rounded-lg"
                onClick={handleBackdropClick}
              >
                <img
                  src={Home}
                  alt="Home"
                  className="w-8 h-8 mr-2 inline-block"

                />
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/profile'
                className="block py-2 px-4 hover:bg-gray-700 rounded-lg"
              >
                <img
                  src={profile}
                  alt="Add Funds"
                  className="w-8 h-8 mr-2 inline-block"
                />
                Profile
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/imp9'
                className="block py-2 px-4 hover:bg-gray-700 rounded-lg"
              >
                <img
                  src={AddFund}
                  alt="Add Funds"
                  className="w-8 h-8 mr-2 inline-block"
                />
                Add Funds
              </NavLink>
            </li>

            <li>
              <NavLink
                to='/imp7'
                className="block py-2 px-4 hover:bg-gray-700 rounded-lg"
              >
                <img
                  src={Wallet}
                  alt="Wallet"
                  className="w-8 h-8 mr-2 inline-block"
                />
                Wallet
              </NavLink>
            </li>

            <li>
              <NavLink
                to='/imp3'
                className="block py-2 px-4 hover:bg-gray-700 rounded-lg"
              >
                <img
                  src={WinHistory}
                  alt="Win History"
                  className="w-8 h-8 mr-2 inline-block"
                />
                Win History
              </NavLink>
            </li>

            <li>
              <NavLink
                to='/imp4'
                className="block py-2 px-4 hover:bg-gray-700 rounded-lg"
              >
                <img
                  src={BidHistory}
                  alt="Bid History"
                  className="w-8 h-8 mr-2 inline-block"
                />
                Bid History
              </NavLink>
            </li>

            <li>
              <NavLink
                to='/htp'
                className="block py-2 px-4 hover:bg-gray-700 rounded-lg"
              >
                <img
                  src={question}
                  alt="How To Play"
                  className="w-8 h-8 mr-2 inline-block"
                />
                How To Play
              </NavLink>
            </li>

            <li>
              <NavLink
                to='/gameRates'
                className="block py-2 px-4 hover:bg-gray-700 rounded-lg"
              >
                <img
                  src={Rating}
                  alt="Game Rates"
                  className="w-8 h-8 mr-2 inline-block"
                />
                Game Rates
              </NavLink>
            </li>

            <li>
              <NavLink
                to='/gameRates'
                className="block py-2 px-4 hover:bg-gray-700 rounded-lg"
              >
                <img
                  src={Rating}
                  alt="Game Rates"
                  className="w-8 h-8 mr-2 inline-block"
                />
                Rate our App
              </NavLink>
            </li>

            <li>
              <NavLink
                to='/gameRates'
                className="block py-2 px-4 hover:bg-gray-700 rounded-lg"
              >
                <img
                  src={website}
                  alt="Game Rates"
                  className="w-8 h-8 mr-2 inline-block"
                />
                Visit our Website
              </NavLink>
            </li>

            <li>
              <NavLink
                to='/gameRates'
                className="block py-2 px-4 hover:bg-gray-700 rounded-lg"
              >
                <img
                  src={Rating}
                  alt="Game Rates"
                  className="w-8 h-8 mr-2 inline-block"
                />
                Mail us
              </NavLink>
            </li>

            <li>
              <a
                href="#"
                className="block py-2 px-4 hover:bg-gray-700 rounded-lg"
              >
                <img
                  src={share_icon}
                  alt="Share"
                  className="w-8 h-8 mr-2 inline-block"
                />
                Share our App
              </a>
            </li>

            <li>
              <NavLink
                to='/change'
                className="block py-2 px-4 hover:bg-gray-700 rounded-lg"
              >
                <img
                  src={ChangePass}
                  alt="Change Password"
                  className="w-8 h-8 mr-2 inline-block"
                />
                Change Password
              </NavLink>
            </li>

            <li>
              <NavLink
                to='/privacy'
                className="block py-2 px-4 hover:bg-gray-700 rounded-lg"
              >
                <img
                  src={policy}
                  alt="Privacy Policy"
                  className="w-8 h-8 mr-2 inline-block"
                />
                Privacy Policy
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/about'
                className="block py-2 px-4 hover:bg-gray-700 rounded-lg"
              >
                <img
                  src={user_profile}
                  alt="User Profile"
                  className="w-8 h-8 mr-2 inline-block"
                />
                About Us
              </NavLink>
            </li>

            <li  onClick={handlelogout}>
              <NavLink
              
                className="block py-2 px-4 hover:bg-gray-700 rounded-lg"
               
              >
                <img
                  src={logoutImg}
                  alt="User Profile"
                  className="w-8 h-8 mr-2 inline-block"
                />
                Log out
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default React.memo(Navbar) ;
