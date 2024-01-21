import React, { useState } from 'react';
import topBackground from './Images/bg.png';
import changePassword from './Images/change_password_icon.png';
import { FiEye, FiEyeOff, FiLock } from 'react-icons/fi';
import { BiArrowBack } from 'react-icons/bi';
import {useNavigate} from 'react-router-dom';

function Changepass() {
  const navbarStyle = {
    height: '60px',
    display: 'flex',
    alignItems: 'center',
  };

  const changePassStyle = {
    backgroundImage: `url(${topBackground})`,
    backgroundSize: 'cover',
  };
  

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleToggleCurrentPassword = () => {
    setShowCurrentPassword(!showCurrentPassword);
  };

  const handleToggleNewPassword = () => {
    setShowNewPassword(!showNewPassword);
  };

  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };
  const navigate =useNavigate();
  const back=()=>{
    navigate("/");
  }

  return (
    <>
      <div>
        <div className="bg-custom-purple text-white" style={navbarStyle}>
          <button className="px-4" onClick={()=>back()}>
          <BiArrowBack size={24} />
          </button>
          <h1 className="text-white px-3">Change Password</h1>
        </div>
      </div>
      <div style={changePassStyle}>
        <div className="flex justify-center items-center h-screen">
          <div className="bg-transparent p-6 rounded-md shadow-md">
            <div className="mb-6 relative">
              <label className="block mb-1 font-medium text-white">Current Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <img src={changePassword} alt="" className="h-5 w-5" />
                </div>
                <input
                  type={showCurrentPassword ? 'text' : 'password'}
                  placeholder="Enter Old Password"
                  value={currentPassword}
                  onChange={(e) => setCurrentPassword(e.target.value)}
                  className="w-full rounded-md border-gray-300 bg-gray-300 focus:ring-indigo-500 focus:border-indigo-500 pl-10 p-3 text-black"
                  style={{ width: '300px' }} // Set the width here as per your requirement
                />
                <button
                  type="button"
                  onClick={handleToggleCurrentPassword}
                  className="absolute inset-y-0 right-0 top-1/2 transform -translate-y-1/2 flex items-center justify-center mr-2 focus:outline-none"
                >
                  {showCurrentPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
            </div>
            <div className="mb-6 relative">
              <label className="block mb-1 font-medium text-white">New Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiLock className="h-6 w-6 text-black" />
                </div>
                <input
                  type={showNewPassword ? 'text' : 'password'}
                  placeholder="Enter New Password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                  className="w-full rounded-md border-gray-300 bg-gray-300 focus:ring-indigo-500 focus:border-indigo-500 pl-10 p-3 text-black"
                  style={{ width: '300px' }} // Set the width here as per your requirement
                />
                <button
                  type="button"
                  onClick={handleToggleNewPassword}
                  className="absolute inset-y-0 right-0 top-1/2 transform -translate-y-1/2 flex items-center justify-center mr-2 focus:outline-none"
                >
                  {showNewPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
            </div>
            <div className="mb-6 relative">
              <label className="block mb-1 font-medium text-white">Confirm New Password</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <FiLock className="h-6 w-6 text-black" />
                </div>
                <input
                  type={showConfirmPassword ? 'text' : 'password'}
                  placeholder="Enter Confirm Password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  className="w-full rounded-md border-gray-300 bg-gray-300 focus:ring-indigo-500 focus:border-indigo-500 pl-10 p-3 text-black"
                  style={{ width: '300px' }} // Set the width here as per your requirement
                />
                <button
                  type="button"
                  onClick={handleToggleConfirmPassword}
                  className="absolute inset-y-0 right-0 top-1/2 transform -translate-y-1/2 flex items-center justify-center mr-2 focus:outline-none"
                >
                  {showConfirmPassword ? <FiEyeOff /> : <FiEye />}
                </button>
              </div>
            </div>
            <div className="flex justify-center items-center">
              <button className="text-white px-10 py-2 rounded-md bg-gradient-to-r from-green-100 to-green-700">
                Change
              </button>
            </div>
          </div>
        </div>
      </div>


    </>
  );
}

export default Changepass;
