import topBackground from "../Images/bg.png";
import { BiArrowBack } from "react-icons/bi";
import fund from "../Images/wallet_transparent.png";
import phone_pe from "../Images/phone_pe.png";
import gpay from "../Images/gpay.png";
import { useNavigate } from 'react-router-dom';
import { useState, useEffect } from "react";
import useUpiOption from "../Hooks/useUpiOtion";
import { useSelector } from "react-redux";
import useWallet from "../Hooks/useWallet"

function AddFunds() {
  const [currentBalance, setCurrentBalance] = useState(0);
  const [amountToAdd, setAmountToAdd] = useState(0);
  const navigate = useNavigate();

  const navbarStyle = {
    height: "60px",
    display: "flex",
    alignItems: "center",
    position: "relative",
  };

  const topStyle = {
    backgroundImage: `url(${topBackground})`,
    backgroundSize: "cover",
    height: "auto ",
    width: "100%",
    padding: "",
  };

  const box1 = {
    border: "3px solid #ccc",
    padding: "10px",
    width: "300px",
    margin: "auto",
    borderRadius: "10px",
    background: "linear-gradient(to right, #141384, #000000)",
    color: "#fff",
    marginBottom: "20px",
  };

  const box2 = {
    background: "linear-gradient(to right, #33FF42, #7433FF)",
    height: "auto",
    width: "auto",
    borderRadius: "10px",
    display: "flex",
    flexDirection: "column",
    margin: "auto",
  };

  const enterAmount = {
    padding: "8px",
    borderRadius: "5px",
    border: "1px solid #ffffff",
    display: "flex",
    background: "linear-gradient(to right, #70D578, #033407)",
  };

  const gridContainer = {
    display: "grid",
    gridTemplateRows: "repeat(2, auto)",
    gridTemplateColumns: "repeat(6, 1fr)",
    gap: "20px",
    marginTop: "10px",
  };

  const buttonStyle = {
    padding: "10px",
    background: "#061050",
    color: "#fff",
    cursor: "pointer",
  };

  const secondRowButtonStyle = {
    gridColumn: "span 3",
    ...buttonStyle,
  };

  const radioContainer = {
    display: "flex",
    flexDirection: "row",
    marginTop: "20px",
    gap: "20px",
    justifyContent: "center",
    alignItems: "center"
  };

  const radioStyle = {
    margin: "5px 0",
    position: "relative",
  };

  const radioInputStyle = {
    position: "absolute",
    left: 0,
    top: "50%",
    transform: "translateY(-50%)",
  };

  const radioLabelStyle = {
    marginLeft: "16px",
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
  };

  const box3 = {
    background: "linear-gradient(to right, #33FF42, #7433FF)",
    borderRadius: "20px",
    padding: "8px 3px 8px 5px",
    alignItems: "center",
    width: "115px"
  };

  const radioImageStyle = {
    width: "30px",
  };

  const box4 = {
    width: "auto",
    padding: "20px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  }

  const btnStyle = {
    background: "linear-gradient(to right, #33FF42, #7433FF)",
    width: "300px",
    padding: "7px",
    borderRadius: "15px",
  }

  const mobile = useSelector((state) => state.userDetail.mobile);
  const unique = useSelector((state) => state.userDetail.token);
  const resinfo = useUpiOption(unique, mobile);
  console.log('sumit')
  console.log(resinfo)

  const backendValue = "Value from Backend";
  const back = () => {
    navigate("/imp");
  }

  const handleAddFunds = () => {
    setCurrentBalance(prevBalance => prevBalance + parseInt(amountToAdd));
    setAmountToAdd(0); // Reset input field after adding funds
  };

  const res = useWallet(unique);
  useEffect(() => {
    if (res && res.wallet_amt) {
      // setWalletAmt(res.wallet_amt);
    }
  }, [res.wallet_amt]);


  return (
    <>
      <div className="bg-custom-purple text-white " style={navbarStyle}>
        <button className="px-4" onClick={back}>
          <BiArrowBack size={24} />
        </button>
        <div className="flex justify-center items-center">
          <img src={fund} alt="Wallet" />
          <h1 className="text-white px-3">Add Fund</h1>
        </div>
      </div>
      <div className=" p-5" style={topStyle}>
        <div className="" style={box1}>
          <p>Current Balance</p>
          <p>RS {res.wallet_amt}</p>
        </div>
        <div className="p-5 sm:w-auto md:max-w-lg lg:max-w-lg " style={box2}>
          <h1 className="pb-3">Add Point</h1>
          <input
            type="number"
            placeholder="Enter amount"
            style={enterAmount}
            value={amountToAdd}
            onChange={(e) => setAmountToAdd(e.target.value)}
          />
          <div style={gridContainer}>
            <button className="col-span-2" style={buttonStyle} onClick={() => setAmountToAdd(500)}>
              500
            </button>
            <button className="col-span-2" style={buttonStyle} onClick={() => setAmountToAdd(1000)}>
              1000
            </button>
            <button className="col-span-2" style={buttonStyle} onClick={() => setAmountToAdd(2000)}>
              2000
            </button>
            <button style={secondRowButtonStyle} onClick={() => setAmountToAdd(5000)}>
              5000
            </button>
            <button style={secondRowButtonStyle} onClick={() => setAmountToAdd(10000)}>
              10000
            </button>
          </div>
        </div>
        <div style={radioContainer}>
          <div style={box3}>
            <label style={radioStyle}>
              <input type="radio" style={radioInputStyle} name="radioGroup" />
              <span className="" style={radioLabelStyle}>
                <img src={phone_pe} alt="PhonePe" style={radioImageStyle} />
                PhonePe
              </span>
            </label>
          </div>
          <div style={box3}>
            <label style={radioStyle}>
              <input type="radio" style={radioInputStyle} name="radioGroup" />
              <span className="" style={radioLabelStyle}>
                <img src={gpay} alt="PhonePe" style={radioImageStyle} />
                GPay
              </span>
            </label>
          </div>
          <div style={box3}>
            <label style={radioStyle}>
              <input type="radio" style={radioInputStyle} name="radioGroup" />
              <span className="ml-2" style={radioLabelStyle}>
                Others
              </span>
            </label>
          </div>
        </div>
        <div style={box4}>
          <button className="text-white rounded" style={btnStyle} onClick={handleAddFunds}>
            Add Money
          </button>
        </div>
        <h1 className="text-white mx-auto flex justify-center">Recent Transaction</h1>
      </div>
    </>
  );

}

export default AddFunds;
