import logo from "./Images/logo.png";
import { BiArrowBack } from "react-icons/bi";
import topBackground from "./Images/bg.png";
import { FiEye, FiEyeOff, FiLock } from "react-icons/fi";
import { useState, useEffect } from "react";
import whatsapp from "./Images/whatsapp.png";
import call from "./Images/call_helpline.png";
import { Link } from "react-router-dom";
import { FiAlertCircle } from "react-icons/fi";

function Login() {
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
  const initialValues = { phoneno: "", password: "" };
  const [formValues, setFormValues] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmit, setIsSubmit] = useState(false);
  const [showCurrentPassword, setShowCurrentPassword] = useState(false);

  const handleToggleCurrentPassword = () => {
    setShowCurrentPassword(!showCurrentPassword);
  };

  const handleChange = (e) => {
    console.log(e.target);
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
    console.log(setIsSubmit);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[6-9]{1}[0-9]{9}$/;

    if (!values.username) {
      errors.username = "Username is required!";
    }
    if (!values.phoneno) {
      errors.phoneno = "Phone No is required!";
    } else if (!regex.test(values.phoneno)) {
      errors.phoneno = "Phone.No is not Valid!";
    }

    if (!values.password) {
      errors.password = "Password is required!";
    }

    return errors;
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
              value={formValues.username}
              onChange={handleChange}
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
              value={formValues.phoneno}
              onChange={handleChange}
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
            {/* <div className="relative "> */}

            <input
              type={showCurrentPassword ? "text" : "password"}
              placeholder="Password"
              value={formValues.password}
              onChange={handleChange}
              // onChange={(e) => setCurrentPassword(e.target.value)}
              className=" bg-gray-500 pt-3 pr-15 pl-5 pb-3 rounded"
              name="password"
            />
            <p className="text-red-500">{formErrors.password}</p>
            {/* </div> */}
            <div className="relative -top-14">
              <button
                type="button"
                className={`absolute ${
                  formErrors.password ? "top-0" : "top-5"
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
              >
                Login
              </button>
            </div>
            <div className="flex justify-center">
              <p>
                Don't Have an account ?{" "}
                <Link to="/register" className="text-yellow-500">
                  Register
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

export default Login;
