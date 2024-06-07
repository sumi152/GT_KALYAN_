import { BiArrowBack } from "react-icons/bi";
import topBackground from "./Images/bg.png";
import { useNavigate } from "react-router-dom";
import GameRates from "./GameRates";
import { useState, useEffect } from "react";
import useQRPAY from "./Hooks/useQRPAY";
import { FaRegCopy } from "react-icons/fa";
import { CopyToClipboard } from "react-copy-to-clipboard";
import what from "./Images/whatsapp2.png";
// import { useNavigate } from "react-router-dom";

function QR_PAY() {
  const navbarStyle = {
    height: "60px",
    display: "flex",
    alignItems: "center",
    position: "relative",
  };
  const backStyle = {
    backgroundImage: `url(${topBackground})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
  };
  const cardStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "20px",
  };
  const back = () => {
    navigate("/addfund");
  };
  const navigate = useNavigate();
  const [status, setStatus] = useState(false);
  const [gameRates, setGameRates] = useState([]);

  const resinfo = useQRPAY();

  useEffect(() => {
    if (resinfo && resinfo["qrdata"]) {
      setStatus(true);
      setGameRates(resinfo["qrdata"][0]);
    }
  }, [resinfo]);
  console.log(gameRates);
  console.log(gameRates.upi_id);

  const [copied, setCopied] = useState(false);
  const textToCopy = gameRates.upi_id;
  const phoneNumber = "5555555";
  const whatsappUrl = `https://wa.me/${phoneNumber}`;
  return (
    <>
      <div>
        <div className="bg-custom-purple text-white" style={navbarStyle}>
          <button className="px-4" onClick={() => back()}>
            <BiArrowBack size={24} />
          </button>
          <div>
            <h1 className="text-white px-3 ">SCAN QR</h1>
          </div>
        </div>
      </div>
      <div className="h-screen text-white" style={backStyle}>
        <div style={cardStyle}>
          <p>Pay & Send the Screenshot </p>
          <p>With Registered Mobile Number</p>
          <div className="mt-4 flex flex-col justify-center items-center">
            <p className="mb-4"> Scan & Pay</p>
            <img className="h-48 w-48" src={gameRates.qr_image} alt="" />
          </div>

          <div className=" flex  justify-between items-center border w-96  border-l-zinc-50 rounded-lg p-4 mt-4">
            <p>{gameRates.upi_id}</p>
            <CopyToClipboard text={textToCopy} onCopy={() => setCopied(true)}>
              <button>
                <FaRegCopy />
              </button>
            </CopyToClipboard>
            {copied && <span style={{ color: "green" }}>Copied!</span>}
          </div>

          <div className="flex flex-col items-center justify-center mt-6">
            <p>Send transaction Successful </p>
            <p>Screenshot on whatsapp</p>
          </div>

          <div className="  text-red-500 bg-white px-8 py-1 mt-4 rounded-xl">
            <a href={whatsappUrl} target="_blank" rel="noopener noreferrer " className="flex justify-center items-center">
              Send Screeenshot
              <img src={what} alt=""  className="ml-2"/>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
export default QR_PAY;
