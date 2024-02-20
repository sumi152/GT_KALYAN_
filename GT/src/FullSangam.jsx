import { BiArrowBack } from "react-icons/bi";
import WalletIcon from "./Images/wallet.png";
import topBackground from "./Images/bg.png";

function FullSangam() {
  const navbarStyle = {
    height: "60px",
    display: "flex",
    alignItems: "center",
  };
  const backStyle = {
    backgroundImage: `url(${topBackground})`,
    backgroundSize: 'cover', // This will make the background image cover the container without 
    backgroundPosition: 'center',
    position:'relative',
    paddingBottom:'400px',
  };
  const cardStyle={
    width:'400px',
    display:'flex',
    flexDirection:'column',
    padding:'20px',
  }
  return (
    <>
      <div className="bg-custom-purple text-white" style={navbarStyle}>
        <button className="px-4">
          <BiArrowBack size={24} />
        </button>
        <div>
          <h1 className="text-white px-3">WIN HISTORY</h1>
        </div>

        <ul className="font-bold text-lg flex flex-shrink: 0 absolute right-10 top-15">
          <li className="flex items-center">
            <a href="#" className="text-white flex items-center">
              <img
                src={WalletIcon}
                alt="Wallet Icon"
                className="w-8 h-8 mr-2"
              />
              <span>0 pts</span>
            </a>
          </li>
        </ul>
      </div>
      <div style={backStyle} className="text-white">
      <div className="flex justify-center items-center pt-5 ">
        <div className="border border-black-500" style={cardStyle}>
          <input type="text" name="" id="" placeholder="Date"  className="w-full flex justify-center p-4 border border-black-500 rounded"/>
          <p>Close Digit</p>
          <input type="text" name="" id="" className="w-full p-4 border border-black-500 rounded" />
          <p>Close Digit</p>
          <input type="text" name="" id="" className="w-full p-4 border border-black-500 rounded" />
          <p>Points</p>
          <input type="text" name="" id="" className="w-full  p-4 border border-black-500 rounded" />
          <div className="flex justify-center">
          <button className="p-4 border border-black-500 rounded  bg-blue-500 mt-5 w-full ">Submit</button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
export default FullSangam;
