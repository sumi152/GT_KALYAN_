import React from "react";
import { BiArrowBack } from "react-icons/bi";
import topBackground from './Images/bg.png';
import {useNavigate} from 'react-router-dom';

function GameRates() {
  const navbarStyle = {
    height: "60px",
    display: "flex",
    alignItems: "center",
    position: "relative",
  };

  const backStyle = {
    backgroundImage: `url(${topBackground})`,
    backgroundSize: 'cover', // This will make the background image cover the container without 
    backgroundPosition: 'center',
    position:'relative'
  };
  const cardStyle={
    display:'flex',
    flexDirection:'column',
    alignItems:'center',
    padding:'20px'
  }
  const newStyle={
    borderRadius:'5px',
    padding: '4px',
    marginBottom:'25px',
  }
  const navigate = useNavigate();
  const back=()=>{
    navigate("/");
  }
  
  return (
    <>
    <div>
      <div className="bg-custom-purple text-white" style={navbarStyle}>
        <button className="px-4" onClick={()=>back()}>
          <BiArrowBack size={24} />
        </button>
        <div >
          <h1 className="text-white px-3 ">Game Rates</h1>
        </div>
      </div>
    </div>
    <div className="h-screen" style={backStyle}>
        <div style={cardStyle}>
        <div className="bg-green-500 text-white border border-white h-10 w-80 flex justify-between items-center" style={newStyle}>
            <p>Single Digit</p>
            <p>10-95</p>
        </div>


        <div className="bg-green-500 text-white border border-white h-10 w-80 flex justify-between items-center" style={newStyle}>
            <p>Jodi Digit</p>
            <p>10-950</p>
        </div>

        
        <div className="bg-green-500 text-white border border-white h-10 w-80 flex justify-between items-center" style={newStyle}>
            <p>Single Panna</p>
            <p>10-1400</p>
        </div>

        
        <div className="bg-green-500 text-white border border-white h-10 w-80 flex justify-between items-center" style={newStyle}>
            <p>Double Panna</p>
            <p>10-2800</p>
        </div>

        
        <div className="bg-green-500 text-white border border-white h-10 w-80 flex justify-between items-center" style={newStyle}>
            <p>Triple Panna</p>
            <p>10-7000</p>
        </div>

        
        <div className="bg-green-500 text-white border border-white h-10 w-80 flex justify-between items-center" style={newStyle}>
            <p>Half Sangam</p>
            <p>10-10000</p>
        </div>

        
        <div className="bg-green-500 text-white border border-white h-10 w-80 flex justify-between items-center" style={newStyle}>
            <p>Full Sangam</p>
            <p>10-100000</p>
        </div>



        </div>



    </div>
    </>
  );
}

export default GameRates;
