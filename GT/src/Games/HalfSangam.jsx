import { BiArrowBack } from "react-icons/bi";
import WalletIcon from "../Images/wallet.png";
import topBackground from "../Images/bg.png";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

function HalfSangam() {
  const todayDate = new Date().toISOString().split("T")[0];
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

  const navigate = useNavigate();
  const back=()=>{
    navigate(-1)
  }
  const { gameId } = useLocation().state;
  console.log(gameId);


  return (
    <>
      <div className="bg-custom-purple text-white" style={navbarStyle}>
        <button className="px-4"
        onClick={back}>
          <BiArrowBack size={24} />
        </button>
        <div>
          <h1 className="text-white px-3">Half Sangam</h1>
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
          <p className="my-2">Open  Digit</p>
          <input type="text" name="" id="" placeholder="Enter Digit" className="w-full p-4 border border-black-500 rounded-xl" />
          <p className="my-2">Close Digit</p>
          <input type="text" name="" id="" placeholder="Enter Pana" className="w-full p-4 border border-black-500 rounded-xl" />
          <p className="my-2">Points</p>
          <input type="text" name="" id="" placeholder="Enter Points" className="w-full  p-4 border border-black-500 rounded-xl" />
          <div className="flex justify-center">
          <button className="p-4 border border-black-500 rounded-xl  bg-blue-500 mt-4 w-full ">Proceed</button>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
export default HalfSangam;
