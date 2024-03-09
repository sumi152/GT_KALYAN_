import topBackground from "./Images/bg.png";
import { BiArrowBack } from "react-icons/bi";
import fund from "./Images/wallet_transparent.png";
import {useNavigate} from 'react-router-dom';
function WithdrawFunds() {
  const navbarStyle = {
    height: "60px",
    display: "flex",
    alignItems: "center",
    position: "relative",
  };
  const backStyle = {
    paddingBottom: '500px',
    backgroundImage: `url(${topBackground})`,
    backgroundSize: 'cover'
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
    width:"300px"
  };




  

  const box4 = {
    width: "auto",
    padding: "20px",
    display: "flex",
    justifyContent: "center", // Center horizontally
    alignItems: "center" // Center vertically
  }

  const btnStyle = {
    background: "linear-gradient(to right, #33FF42, #7433FF)",
    width: "300px",
    padding: "7px",
    borderRadius: "15px",

  }
  const backendValue = "Value from Backend";
  const navigate= useNavigate();
  const back=()=>{
    navigate("/imp");
  }

  return (
    <>
      <div className="bg-custom-purple text-white " style={navbarStyle}>
        <button className="px-4"  onClick={()=>back()}>
          <BiArrowBack size={24} />
        </button>
        <div className="flex justify-center items-center">
          <img src={fund} alt="Wallet" />
          <h1 className="text-white px-3">Withdraw Fund</h1>
        </div>
      </div>
      <div className=" p-5" style={backStyle}>
        <div className="" style={box1}>
          <p>Current Balance</p>
          <p>RS 0</p>
        </div>
        <div style={box4}>
            <input type="text" placeholder="Enter amount" style={enterAmount} />
        </div>
        <div style={box4}>
            <input type="text" placeholder="Enter amount" style={enterAmount} />
        </div>
  

        <div style={box4}>
          <button className="text-white rounded" style={btnStyle}>
            Withdraw Now
          </button>
        </div>
        <h1 className="text-white mx-auto flex justify-center">Recent Transaction</h1>
      </div>
    </>
  );
}

export default WithdrawFunds;
