import { Link, Navigate, useNavigate } from "react-router-dom";
import topBackground from "./Images/bg.png";
import { BiArrowBack } from "react-icons/bi";
import profile from "./Images/profile.png";
import user_profile from "./Images/user_profile.png";
import { useState } from "react";

function Profile() {
  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  };

  const navbarStyle = {
    height: "60px",
    display: "flex",
    alignItems: "center",
  };

  const backStyle = {
    backgroundImage: `url(${topBackground})`,
    backgroundSize: "cover",
    height: "100vh",
    width: "100%",
    overflow: "hidden",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const userContainer = {
    marginTop: "40px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  };

  const userStyle = {
    width: "40px",
    height: "40px",
  };

  const buttonStyle = {
    marginTop: "20px",
  };
  const [showInput, setShowInput] = useState(false);

  const toggleInput = () => {
    setShowInput(!showInput);
  };

  const vertical = {
    width: "1px",
    height: "46px",
    backgroundColor: "white",
    marginLeft: "14px",
  };

  return (
    <>
      <div>
        <div className="bg-custom-purple text-white" style={navbarStyle}>
          <button className="px-4" onClick={() => back()}>
            <BiArrowBack size={24} />
          </button>
          <div>
            <h1 className="text-white px-3 text-lg">Profile</h1>
          </div>
        </div>
        <div style={backStyle}>
          <div style={userContainer}>
            <img
              src={profile}
              alt=""
              style={{ width: "50px", height: "50px" }}
            />
          </div>
          <div style={buttonStyle}>
            <button
              className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
              onClick={toggleInput}
            >
              Edit
            </button>
          </div>
          <div className="flex flex-direction-col mt-6 justify-center items-center">
            {showInput && <img src={user_profile} alt="" style={userStyle} />}
            {showInput && <div style={vertical}></div>}
            <div className="p-5 mb-4">
              {showInput && (
                <input
                  type="text"
                  placeholder="Enter Your Name"
                  className="mt-4 p-2 border-b bg-transparent text-white"
                />
              )}
            </div>
          </div>
          {showInput && (
            <button className="bg-blue-900 hover:bg-blue-800 text-white font-bold py-2 px-4 mt-5 rounded">
              Submit
            </button>
          )}
        </div>
      </div>
    </>
  );
}

export default Profile;
