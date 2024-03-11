import logo from "./Images/logo.png";
import topBackground from "./Images/bg.png";
import { FiEye, FiEyeOff, FiLock } from "react-icons/fi";
import { useState, useEffect, useRef } from "react";
import whatsapp from "./Images/whatsapp.png";
import call from "./Images/call_helpline.png";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { FiAlertCircle } from "react-icons/fi";
import { useDispatch, useSelector } from "react-redux";
import { register } from "./Util/registerSlice";
import {login } from "./Util/loginSlice"


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
    maxWidth: "150px",
    maxHeight: "150px",
    objectFit: "cover",
  };



  const username = useRef();
  const phoneno = useRef();
  const password = useRef();
  const [formErrors, setFormErrors] = useState({});
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);
  const [isRegistering, setIsRegistering] = useState(false);
  const [isSubmit, setIsSubmit] =useState(false);
  const [errorMsg,setErrorMsg] = useState()
  const navigate = useNavigate();
  const dispatch = useDispatch();

  
  
  const handleToggleCurrentPassword = () => {
    setShowCurrentPassword(!showCurrentPassword);
  };
  var data={}

  const handleSubmit = async (e) => {
    e.preventDefault();

    
    const errors = validate(
      username.current.value,
      phoneno.current.value,
      password.current.value
    );

    setFormErrors(errors);

    if (Object.keys(errors).length > 0) {
      return;
    }
    
    setIsRegistering(true);

    try {
      // Fetch OTP data or retrieve it from wherever necessary
      const otpData = await fetchData(phoneno.current.value); // Example function to fetch OTP data
      console.log(otpData)
      if (otpData?.status) {
        // Dispatch action with OTP data
        dispatch(register({ 
          username: username.current.value, 
          phone: phoneno.current.value, 
          password: password.current.value, 
          otp: otpData?.otp 
        }));
        navigate('/Otp');
      } else {
        console.error("Failed to fetch OTP data");
      }
    } catch (error) {
      // console.error("Error registering:", error);
    }
   

  };



  const validate = (username, phoneno, password) => {
    const errors = {};
    const regex = /^[6-9]{1}[0-9]{9}$/;

    if (!username) {
      errors.username = "Username is required!";
    }
    if (!phoneno) {
      errors.phoneno = "Phone No is required!";
    } else if (!regex.test(phoneno)) {
      errors.phoneno = "Phone.No is not Valid!";
    }

    if (!password) {
      errors.password = "Password is required!";
    }
    return errors;
  };


  const fetchData = async (phoneno) => {
    try {
      const myHeaders = new Headers();
      myHeaders.append("Content-Type", "application/json");
  
      const raw = JSON.stringify({
        env_type: "Prod",
        app_key: "jAFaRUulipsumXLLSLPFytYvUUsgfh",
        mobile: phoneno,
      });
  
      const requestOptions = {
        method: "POST",
        headers: myHeaders,
        body: raw,
        redirect: "follow",
      };
  
      const response = await fetch(
        "https://kalyanmilanofficialmatka.in/api-check-mobile",
        requestOptions
      );
      const result = await response.json();
      console.log(result);
      if(result?.status){
        setIsSubmit(true);
        return result;
      }
      
      
      }
     catch (error) {
      setIsRegistering(false);
    }
  };

  
  return (
    <>
      <div style={backStyle} className="text-white">
        <div className="flex justify-center items-center ">
          <img src={logo} alt="Center Image" className="w-40 h-40" />
        </div>
        <div className="flex justify-center item-center p-5">
          <form style={cardStyle} onSubmit={handleSubmit}>
            <p className="">Username</p>
            <input
              type="text"
              placeholder="Username"
              className=" bg-gray-500 pt-3 pr-7 pl-5 pb-3 rounded"
              ref={username}
              name="username"
            />
            <p className="text-red-500">{formErrors.username}</p>
            <div className="relative -top-14">
              {formErrors.username && (
                <div
                  className="absolute top-0 right-2"
                  style={{
                    color: "red",
                  }}
                >
                  <FiAlertCircle />
                </div>
              )}
            </div>

            <p className="">Phone Number</p>
            <input
              type="text"
              placeholder="Phone Number"
              className=" bg-gray-500 pt-3 pr-7 pl-5 pb-3 rounded"
              ref={phoneno}
              name="phoneno"
            />
            <p className="text-red-500">{formErrors.phoneno}</p>
            <div className="relative -top-14">
              {formErrors.phoneno && (
                <div
                  className="absolute top-0 right-2"
                  style={{
                    color: "red",
                  }}
                >
                  <FiAlertCircle />
                </div>
              )}
            </div>
            <p className="mt-2">Password</p>

            <input
              type={showCurrentPassword ? "text" : "password"}
              placeholder="Password"
              ref={password}
              className=" bg-gray-500 pt-3 pr-15 pl-5 pb-3 rounded"
              name="password"
            />
            <p className="text-red-500">{formErrors.password}</p>
            <p className="text-red-500">{errorMsg}</p>
            <div className="relative -top-14">
              <button
                type="button"
                className={`absolute ${
                  formErrors && errorMsg ? "top-0" : "top-6"
                } right-4`}
                onClick={handleToggleCurrentPassword}
              >
                {showCurrentPassword ? <FiEyeOff /> : <FiEye />}
              </button>
            </div>

            <div className="relative mb-5 mt-9">
              <p className="absolute right-0">Forgot Password ?</p>
            </div>
            <div className="flex justify-center mb-5">
              <button
                className="p-3 border border-black-500 rounded mt-4 bg-blue-800 w-3/4"
                type="submit"
                onSubmit={handleSubmit}
              >
               {isRegistering && isSubmit? 'Registering...' : 'Register'}
              </button>
            </div>
            <div className="flex justify-center">
              <p>
                Don't Have an account ?{" "}
                <Link to="/" className="text-yellow-500">
                  Login
                </Link>
              </p>
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
              <a href="" className="mb-2 text-green-500">
                Terms Aand Conditions and Privacy Policy
              </a>
              <hr className="w-1/2" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Register;