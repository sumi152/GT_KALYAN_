import { BiArrowBack } from "react-icons/bi";
import WalletIcon from "../Images/wallet.png";
import topBackground from "../Images/bg.png";
import { useNavigate } from "react-router-dom";
import { TrashIcon } from "@heroicons/react/outline";
import { useState, useRef, useEffect } from "react";
import { useSelector } from "react-redux";
import useGameFront from "../Hooks/useGameFront";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Single() {
  const todayDate = new Date().toISOString().split("T")[0];
  const navbarStyle = {
    height: "60px",
    display: "flex",
    alignItems: "center",
  };
  const backStyle = {
    backgroundImage: `url(${topBackground})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    paddingBottom: "400px",
  };
  const cardStyle = {
    width: "400px",
    display: "flex",
    flexDirection: "column",
    padding: "20px",
  };

  const digit = useRef();
  const point = useRef();
  const [formErrors, setFormErrors] = useState({});
  const navigate = useNavigate();
  const back = () => {
    navigate(-1);
  };
  const unique = useSelector(state => state.userDetail.token);
  const resinfo = useGameFront(unique);
  const [walletAmt, setWalletAmt] = useState();
  const [submittedData, setSubmittedData] = useState([]);

  useEffect(() => {
    if (resinfo && !walletAmt) {
      setWalletAmt(parseInt(resinfo.wallet_amt));
      console.log("hello");
    }
  }, [resinfo]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const errors = validate(
      digit.current.value,
      point.current.value
    );

    setFormErrors(errors);
    setFormErrors(errors);
    if (Object.keys(errors).length > 0) {
      if (errors.digit) {
        toast(errors.digit);
      } else {
        toast(errors.point);
      }
      return;
    }
    setFormErrors({});
    const newData = {
      digit: digit.current.value,
      point: point.current.value,
    };
    setSubmittedData(prevData => [...prevData, newData]);
    setDigitValue('');
    setPointValue('');


  };
  const setDigitValue = (value) => {
    digit.current.value = value;
  };
  
  const setPointValue = (value) => {
    point.current.value = value;
  };

  const validate = (digit, point) => {
    const errors = {};
    if (!digit) {
      errors.digit = "Please enter the number";
    } else if (parseInt(digit) >= 10) {
      errors.digit = `Number ${digit} is not valid`;
    }
    if (!point) {
      errors.point = "Please enter point";
    } else if (parseInt(point) < 10) {
      errors.point = "Required minimum bid amount is 10";
    } else if (parseInt(point) > walletAmt) {
      errors.point = "Insufficient balance please refill your account";
    }
    return errors;
  };


  return (
    <>
      <div className="bg-custom-purple text-white" style={navbarStyle}>
        <button className="px-4" onClick={back}>
          <BiArrowBack size={24} />
        </button>
        <div>
          <h1 className="text-white px-3">Single Digit</h1>
        </div>

        <ul className="font-bold text-lg flex flex-shrink: 0 absolute right-10 top-15">
          <li className="flex items-center">
            <a href="#" className="text-white flex items-center">
              <img
                src={WalletIcon}
                alt="Wallet Icon"
                className="w-8 h-8 mr-2"
              />
              <span>{walletAmt}</span>
            </a>
          </li>
        </ul>
      </div>
      <form style={backStyle} className="text-white" onSubmit={handleSubmit}>
        <div className="flex justify-center items-center pt-5 ">
          <div className="" style={cardStyle}>
            <input
              type="date"
              value={todayDate}
              readOnly
              className="w-full flex justify-center p-4 text-black border border-black-500 rounded-xl text-center"
            />
            <p className="m-2">Choose Session</p>
            <div className="flex space-x-4 justify-center items-center w-full ">
              <div className="flex justify-center items-center w-1/2 border border-black-500 p-4 bg-white rounded-xl">
                <input
                  type="radio"
                  id="option1"
                  name="radioGroup"
                  className="form-radio text-blue-500 focus:ring-2 focus:ring-blue-500"
                  defaultChecked
                />
                <label htmlFor="option1" className="ml-2 text-gray-700">
                  Open
                </label>
              </div>
              <div className="flex justify-center items-center w-1/2 border border-black-500 p-4 bg-white rounded-xl">
                <input
                  type="radio"
                  id="option2"
                  name="radioGroup"
                  className="form-radio text-blue-500 focus:ring-2 focus:ring-blue-500"
                />
                <label htmlFor="option2" className="ml-2 text-gray-700">
                  Close
                </label>
              </div>
            </div>
            <p className="my-2">Open Digit</p>
            <input
              type="number"
              inputMode="numeric"
              ref={digit}
              placeholder="Enter Digit"
              className="w-full p-4 border border-black-500 rounded-xl text-black"
            />
            <p className="my-2">Points</p>
            <input
              type="number"
              inputMode="numeric"
              ref={point}
              placeholder="Enter Points"
              className="w-full  p-4 border border-black-500 rounded-xl text-black"
            />
            <div className="flex justify-center mb-4">
              <button className="p-4 border border-black-500 rounded-xl bg-blue-500 mt-4 w-full "
                type="submit">
                Proceed
              </button>
            </div>
            {submittedData.map((data, index) => {
              const handleClickRemoveDiv = (indexToRemove) => () => {
                const newData = submittedData.filter((_, i) => i !== indexToRemove);
                setSubmittedData(newData);
                console.log(formErrors);
                
              };

              return (
                <div key={index} className="w-full flex mb-3 ">
                  <div
                    className="w-10/12  p-1  border border-black-500 bg-white text-black flex justify-between"
                    style={{ borderRadius: "25px" }}
                  >
                    <div className="flex flex-col items-center ml-4">
                      <h3>Close Digit</h3>
                      <h3>{data.digit}</h3>
                    </div>
                    <div className="flex flex-col items-center mr-4">
                      <h3>Points</h3>
                      <h3>{data.point}</h3>
                    </div>
                  </div>
                  <button className="bg-white p-4 flex items-center justify-center ml-1" style={{ borderRadius: "20px" }}
                    onClick={handleClickRemoveDiv(index)}>
                    <TrashIcon className="h-6 w-6 text-red-500" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </form>
    </>
  );
}

export default Single;
