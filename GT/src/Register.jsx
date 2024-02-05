import logo from "./Images/logo.png";
import { BiArrowBack } from "react-icons/bi";
import topBackground from "./Images/bg.png";
import { FiAlertTriangle, FiEye, FiEyeOff } from "react-icons/fi";
import { useState } from "react";
import whatsapp from './Images/whatsapp.png';
import call from './Images/call_helpline.png';
import { Link } from "react-router-dom";


function Register() {
  const navbarStyle = {
    height: "60px",
    display: "flex",
    alignItems: "center",
  };
  const backStyle = {
    paddingBottom: "500px",
    backgroundImage: `url(${topBackground})`,
    backgroundSize: "cover",
  };
  const cardStyle = {
    width: "400px",
    display: "flex",
    flexDirection: "column",
    padding: "20px",
    position: "relative",
  };
  const cellImageStyle = {
    maxWidth: '150px',
    maxHeight: '150px',
    objectFit: 'cover',
  };

  const [username, setUsername] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const handleToggleCurrentPassword = () => {
    setShowCurrentPassword(!showCurrentPassword);
  };

  

  return (
    <>
      
      <div style={backStyle} className="text-white">
        <div className="flex justify-center items-center ">
          <img src={logo} alt="Center Image" className="w-40 h-40" />
        </div>
        <div className="flex justify-center item-center p-5">
          <div style={cardStyle}>
          <p className="">User Name</p>
            <input
              type="text"
              placeholder="User Name"
              id="myinput"
              className=" bg-gray-500 pt-3 pr-7 pl-5 pb-3 rounded"

            />
            

            <p className="">Phone Number</p>
            <input
              type="text"
              placeholder="Phone Number"
              className=" bg-gray-500 pt-3 pr-7 pl-5 pb-3 rounded"
            />
            <p>Password</p>
            <input
              type={showCurrentPassword ? "text" : "password"}
              placeholder="Password"
              value={currentPassword}
              onChange={(e) => setCurrentPassword(e.target.value)}
              className=" bg-gray-500 pt-3 pr-7 pl-5 pb-3 rounded"
            />
            <div className="-mt-8 relative">
              <button
                type="button"
                className="absolute right-3"
                onClick={handleToggleCurrentPassword}
              >
                {showCurrentPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>
            <div className="relative mb-5 mt-9">
              <p className="absolute right-0">Forgot Password ?</p>
            </div>
            <div className="flex justify-center mb-5">
              <button className="p-3 border border-black-500 rounded mt-4 bg-blue-800 w-3/4"
              
              >
                Sign Up
              </button>
            </div>
            <div className="flex justify-center">
              <p>Already Have an Account. <Link to='/' className="text-yellow-500">Login</Link> </p>
            </div>
            <div className="flex  justify-between mt-2">
            <div>
                <button>
                  <img src={call} alt="Add Fund" style={cellImageStyle} />
                </button>
              </div>
              
              <div className="mr-4">
                <button>
                  <img src={whatsapp} alt="Add Fund" style={cellImageStyle} />
                </button>
              </div>
              
            </div>
            <div className=" flex flex-col justify-center items-center  ">
                <p className="mt-2 ">By logging in you are agree to these</p>
                <a href="" className="mb-2 text-green-500">Terms Aand Conditions and Privacy Policy</a>
                <hr className="w-1/2" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Register;
