import { BiArrowBack } from "react-icons/bi";
import DatePickerButton from "./Date";
import buttonBack from "./Images/main_bg.png"
import topBackground from "./Images/bg.png";
import {useNavigate} from 'react-router-dom';


function Bid() {
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
  const navigate =useNavigate();
  const back=()=>{
    navigate("/");
  }

  return (
    <>
      <div className="bg-custom-purple text-white" style={navbarStyle}>
        <button className="px-4" onClick={()=>back()}>
          <BiArrowBack size={24} />
        </button>
        <div>
          <h1 className="text-white px-3">BID HISTORY</h1>
        </div>
      </div>
      <div style={backStyle} className="text-white">
        <div className="flex justify-center item-center p-5" >
        <div className="border border-black-500"style={cardStyle} >
        <p className="inline-block rounded p-3 border border-white mb-2 bg-blue-500 w-1/2" >Select Dates</p>
        <p className="mb-2">From Date</p>
        <DatePickerButton />
        <p className="mb-2 mt-2" >To Date</p>
        <DatePickerButton />
        <div className="flex justify-center  ">
          <button className="p-3 border border-black-500 rounded mt-4 bg-green-500 w-1/2">Submit</button>
          </div>
      </div>
      </div>
      </div>
    </>
  );
}

export default Bid;
