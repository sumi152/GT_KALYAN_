import topBackground from "../Images/bg.png";
import { BiArrowBack } from "react-icons/bi";
import fund from "../Images/wallet_transparent.png";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react"; // Import useEffect
import usePayment from "../Hooks/usePayment";
import { useSelector } from "react-redux";
import useWallet from "../Hooks/useWallet";
import { useRef } from "react";

function WithdrawFunds() {
  const navbarStyle = {
    height: "60px",
    display: "flex",
    alignItems: "center",
    position: "relative",
  };

  const topStyle = {
    backgroundImage: `url(${topBackground})`,
    backgroundSize: "cover",
    height: "auto ", // Set the height of the div
    width: "100%", // Set the width of the div
    padding: "",
  };
  const box1 = {
    border: "3px solid #ccc",
    padding: "10px",
    width: "300px", // Adjust the width as needed
    margin: "auto",
    borderRadius: "10px", // Add border-radius for rounded corners
    background: "linear-gradient(to right, #141384, #000000)", // Blue gradient background
    color: "#fff", // Text color
    marginBottom: "20px",
  };

  const enterAmount = {
    padding: "8px",
    borderRadius: "5px",
    border: "1px solid #ffffff",
    display: "flex",
    background: "linear-gradient(to right, #70D578, #033407)",
    width: "300px",
  };

  const box4 = {
    width: "auto",
    padding: "20px",
    display: "flex",
    justifyContent: "center", // Center horizontally
    alignItems: "center", // Center vertically
  };

  const btnStyle = {
    background: "linear-gradient(to right, #33FF42, #7433FF)",
    width: "300px",
    padding: "7px",
    borderRadius: "15px",
  };




  const amount = useRef();
  // const method = useRef();
  const [method2, setMethod] = useState("");

  const token = useSelector((state) => state.userDetail.token);
  const number = useSelector((state) => state.userDetail.mobile);
  const [formErrors, setFormErrors] = useState({});
  const [errorText, setErrorText] = useState(""); 
  const [selectedUPI, setSelectedUPI] = useState("");
  const [gamesUpi, setGamesUpi] = useState([]);

  const navigate = useNavigate();

  const back = () => {
    navigate("/imp");
  };

  const handleUPIChange = (event) => {
    setSelectedUPI(event.target.value);
    const selectedUpiType = gamesUpi.find(upi => upi.value === event.target.value)?.type;
    setMethod(selectedUpiType);
  };
  
  const [walletAmt, setWalletAmt] = useState();
  const res = usePayment(token, number);
  const res2 = useWallet(token);
  useEffect(() => {
    if (res2 && res2.wallet_amt) {
      setWalletAmt(res2.wallet_amt);
    }
  }, [res2.wallet_amt]);

  useEffect(() => {
    if (res?.result) {
      setGamesUpi(res.result);
    }
  }, [res.result]);


  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validate(
      amount.current.value, Number(walletAmt)
    );

    setFormErrors(errors);

    if (Object.keys(errors).length > 0) {
      return;
    }

    try {
      await fetchData(
        token, Number(amount.current.value), number, method2
      );
      setIsSubmit(true);
    } catch (error) {
      // setErrorText("Username or password incorrect"); // Set error message
    }
  };

  const validate = ( amount, walletAmt) => {
    const errors = {};
    const regex = /^[6-9]{1}[0-9]{9}$/;

    if (!amount) {
      errors.amount = "Amount is required!";
    }else if(amount>walletAmt){
      errors.amount="Wallet Limit Excedded"
    }
    return errors;
  };
  

  const fetchData = async ( token, amount, number, method2) => {
    const errors={}
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    myHeaders.append(
      "Cookie",
      "ci_session=7c38fc1fc455fca9846d688fb8343f5c7ea71bee"
    );

    const raw = JSON.stringify({
      env_type: "Prod",
      app_key: "jAFaRUulipsumXLLSLPFytYvUUsgfh",
      unique_token: token,
      mobile: number,
      request_amount: amount,
      payment_method: method2
    });

    const requestOptions = {
      method: "POST",
      headers: myHeaders,
      body: raw,
      redirect: "follow",
    };

    const response = await fetch(
      "https://kalyanmilanofficialmatka.in/api-user-withdraw-fund-request",
      requestOptions
    );
    console.log(method2);
    const result = await response.json();
    console.log(result)
    if(result?.status===true){
      
    } else {
      setErrorText(result?.msg)
    }
  };
  useEffect(() => {
    if (gamesUpi.length > 0) { // Check if gamesUpi list is not empty
      setMethod(gamesUpi[0]?.type); // Set method2 with the type of the first value in gamesUpi list
    }
  }, [gamesUpi]); 

  return (
    <>
      <div className="bg-custom-purple text-white " style={navbarStyle}>
        <button className="px-4" onClick={() => back()}>
          <BiArrowBack size={24} />
        </button>
        <div className="flex justify-center items-center">
          <img src={fund} alt="Wallet" />
          <h1 className="text-white px-3">Withdraw Fund</h1>
        </div>
      </div>
      <div className=" p-5" style={topStyle}>
        <div className="" style={box1}>
          <p>Current Balance</p>
          <p>RS {walletAmt}</p>
        </div>
        <div className="flex flex-col"style={box4}>
          <input type="text" placeholder="Enter amount" ref={amount} className="placeholder-white text-white mb-2" style={enterAmount} />
          <p className="text-red-500 ">{formErrors.amount}</p>
        </div>
        
        <div style={box4}>
          <select className="text-white"
            value={selectedUPI}
            onChange={handleUPIChange}
            style={enterAmount}
            
          >
            {/* <option value="">Select UPI Details</option> */}
            {gamesUpi.map((upi, index) => (
              <option key={index} value={upi.value} className="text-black">
                {upi?.name}: {upi?.value}
                {console.log(upi?.name)}
                {console.log('sumti+sumit ')}
              </option>
            ))}
          </select>
        </div>
        <div style={box4} className="flex flex-col">
          <button className="text-white rounded" style={btnStyle} onClick={handleSubmit}>
            Withdraw Now
          </button>
          <p className="text-red-500 mt-2">Withdraw Timings :- 07:00AM -10:00AM</p>
          <p className="text-red-500 ">{errorText}</p>

        </div>
        

        <h1 className="text-white mx-auto flex justify-center">
          Recent Transaction
        </h1>
      </div>
    </>
  );
}

export default WithdrawFunds;
