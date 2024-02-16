import WalletIcon from "./Images/wallet.png";
import HamburgerIcon from "./Images/Hamburger.png";
import "./Navbar.css";
import React, { useState, useEffect, useRef ,useMemo} from "react";
import New from "./New";
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
import { NavLink, useNavigate} from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { logout } from "./Util/loginSlice";

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
  const mobile = useSelector(state=>state.userDetail.mobile)
  const [isBackdropActive, setBackdropActive] = useState(false)
  const [isSidebarActive, setSidebarActive] = useState(false)
  const navigate = useNavigate();


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
    navigate('/') 
  }



  return (
    <nav className="bg-custom-purple text-white relative p-4">
      <div className="container mx-auto flex  flex-1 justify-between items-center">
        <div className="flex items-center ">
          <div onClick={handleHamburgerClick} style={Hamburg} className="mr-4">
            <img src={HamburgerIcon} alt="Hamburger Icon" className="w-8 h-8" />
          </div>

          <div className="text-xl fading-text">
            <marquee scrollamount="4"> GT KALYAN MILAN MATKA</marquee>
          </div>

          <ul className="font-bold text-lg flex flex-shrink: 0 absolute right-10 top-15">
          <li className="flex items-center">
            <NavLink to='/wallet' className="text-white flex items-center">
              <img
                src={WalletIcon}
                alt="Wallet Icon"
                className="w-8 h-8 mr-2"
              />
              <span>0 pts</span>
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
              <button className="flex items-center justify-center hover:bg-green-700 text-white font-bold rounded-full w-10 h-10 mx-2" onClick={handlelogout}>
                <img
                  src={logoutImg} // Replace with the path to your Button 1 image
                  alt="Button 1"
                  className="w-full h-full object-cover"
                />
              </button>
            </div>
          </div>
          <ul className="space-y-1.5">
            <li>
              <a
                href="#"
                className="block py-2 px-4 hover:bg-gray-700 rounded-lg"
              >
                <img
                  src={Home}
                  alt="Home"
                  className="w-8 h-8 mr-2 inline-block"
                />
                Home
              </a>
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
                to='/addfund'
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
                to='/wallet'
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
                to='/win'
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
                to='/bid'
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
              <a
                href="#"
                className="block py-2 px-4 hover:bg-gray-700 rounded-lg"
              >
                <img
                  src={Share}
                  alt="Share"
                  className="w-8 h-8 mr-2 inline-block"
                />
                Share
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
                to='/delete'
                className="block py-2 px-4 hover:bg-gray-700 rounded-lg"
              >
                <img
                  src={ChangePass}
                  alt="Delete Account"
                  className="w-8 h-8 mr-2 inline-block"
                />
                Delete Account
              </NavLink>
            </li>
            <li>
              <NavLink
                to='/privacy'
                className="block py-2 px-4 hover:bg-gray-700 rounded-lg"
              >
                <img
                  src={lock_icon}
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
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default React.memo(Navbar) ;
