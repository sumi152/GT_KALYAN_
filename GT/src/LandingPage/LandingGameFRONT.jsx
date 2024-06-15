import chart from "../Images/chart.png";
import close from "../Images/close.png";
import open from "../Images/play.png";
import { useEffect, useState } from "react";
import useGameFront from "../Hooks/useGameFront";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import Timer from "../Timer";

function LandingGameFRONT() {


  const centerstyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "-4px",
  };
  const laststyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height:"7px",
    gap: "7px"
  };
  const imgstyle = {
    width: "40px",
    height: "auto",
    marginTop: "-4px",
  };




  const navigate = useNavigate();

  return (
    <div>
      <div className="mb-5">
        <div className="bg-blue-500 flex justify-between items-center pt-1 pl-2 pr-2 pb-9 ml-2 mr-4 h-15 rounded-2xl border border-white text-white">
          <p className="top-0 right-0">Madhur Milan</p>
          00:00:00
        </div>
        <div className="bg-white mr-2 ml-4 z-2 -mt-7 p-1 pb-2 flex flex-col rounded-3xl border">
          <div className="text-green-500 text-sm flex justify-center items-center">
            Market Running
          </div>
          <div style={centerstyle}>
            <div>
              <img src={chart} style={imgstyle} alt="" />
            </div>
            <p>***_**_***</p>
            <div>
              <button
                onClick={() => {
                  navigate("login");
                }}
              >
                <img src={open} style={imgstyle} alt="" />
              </button>
            </div>
          </div>
          <div style={laststyle}>
            <p className="text-green-500" style={{ fontSize: '12px' }}>Open -</p>
            <p className="text-red-500" style={{ fontSize: '12px' }}>Close - </p>
          </div>
        </div>
      </div>
      <div className="mb-5">
        <div className="bg-blue-500 flex justify-between items-center pt-1 pl-2 pr-2 pb-9 ml-2 mr-4 h-15 rounded-2xl border border-white text-white">
          <p className="top-0 right-0">Shri Devi</p>
          00:00:00
        </div>
        <div className="bg-white mr-2 ml-4 z-2 -mt-7 p-1 pb-2 flex flex-col rounded-3xl border">
          <div className="text-green-500 text-sm flex justify-center items-center">
            Market Running
          </div>
          <div style={centerstyle}>
            <div>
              <img src={chart} style={imgstyle} alt="" />
            </div>
            <p>***_**_***</p>
            <div>
              <button
                onClick={() => {
                  navigate("login");
                }}
              >
                <img src={open} style={imgstyle} alt="" />
              </button>
            </div>
          </div>
          <div style={laststyle}>
            <p className="text-green-500" style={{ fontSize: '12px' }}>Open -</p>
            <p className="text-red-500" style={{ fontSize: '12px' }}>Close - </p>
          </div>
        </div>
      </div>
      <div className="mb-5">
        <div className="bg-blue-500 flex justify-between items-center pt-1 pl-2 pr-2 pb-9 ml-2 mr-4 h-15 rounded-2xl border border-white text-white">
          <p className="top-0 right-0">Milan Morning</p>
          00:00:00
        </div>
        <div className="bg-white mr-2 ml-4 z-2 -mt-7 p-1 pb-2 flex flex-col rounded-3xl border">
          <div className="text-green-500 text-sm flex justify-center items-center">
            Market Running
          </div>
          <div style={centerstyle}>
            <div>
              <img src={chart} style={imgstyle} alt="" />
            </div>
            <p>***_**_***</p>
            <div>
              <button
                onClick={() => {
                  navigate("login");
                }}
              >
                <img src={open} style={imgstyle} alt="" />
              </button>
            </div>
          </div>
          <div style={laststyle}>
            <p className="text-green-500" style={{ fontSize: '12px' }}>Open -</p>
            <p className="text-red-500" style={{ fontSize: '12px' }}>Close - </p>
          </div>
        </div>
      </div>
      <div className="mb-5">
        <div className="bg-blue-500 flex justify-between items-center pt-1 pl-2 pr-2 pb-9 ml-2 mr-4 h-15 rounded-2xl border border-white text-white">
          <p className="top-0 right-0">Kalyan Morning</p>
          00:00:00
        </div>
        <div className="bg-white mr-2 ml-4 z-2 -mt-7 p-1 pb-2 flex flex-col rounded-3xl border">
          <div className="text-green-500 text-sm flex justify-center items-center">
            Market Running
          </div>
          <div style={centerstyle}>
            <div>
              <img src={chart} style={imgstyle} alt="" />
            </div>
            <p>***_**_***</p>
            <div>
              <button
                onClick={() => {
                  navigate("login");
                }}
              >
                <img src={open} style={imgstyle} alt="" />
              </button>
            </div>
          </div>
          <div style={laststyle}>
            <p className="text-green-500" style={{ fontSize: '12px' }}>Open -</p>
            <p className="text-red-500" style={{ fontSize: '12px' }}>Close - </p>
          </div>
        </div>
      </div>
      <div className="mb-5">
        <div className="bg-blue-500 flex justify-between items-center pt-1 pl-2 pr-2 pb-9 ml-2 mr-4 h-15 rounded-2xl border border-white text-white">
          <p className="top-0 right-0">Madhur Day</p>
      00:00:00
        </div>
        <div className="bg-white mr-2 ml-4 z-2 -mt-7 p-1 pb-2 flex flex-col rounded-3xl border">
          <div className="text-green-500 text-sm flex justify-center items-center">
            Market Running
          </div>
          <div style={centerstyle}>
            <div>
              <img src={chart} style={imgstyle} alt="" />
            </div>
            <p>***_**_***</p>
            <div>
              <button
                onClick={() => {
                  navigate("login");
                }}
              >
                <img src={open} style={imgstyle} alt="" />
              </button>
            </div>
          </div>
          <div style={laststyle}>
            <p className="text-green-500" style={{ fontSize: '12px' }}>Open -</p>
            <p className="text-red-500" style={{ fontSize: '12px' }}>Close - </p>
          </div>
        </div>
      </div>
      <div className="mb-5">
        <div className="bg-blue-500 flex justify-between items-center pt-1 pl-2 pr-2 pb-9 ml-2 mr-4 h-15 rounded-2xl border border-white text-white">
          <p className="top-0 right-0">Kalyan Night</p>
        00:00:0
        </div>
        <div className="bg-white mr-2 ml-4 z-2 -mt-7 p-1 pb-2 flex flex-col rounded-3xl border">
          <div className="text-green-500 text-sm flex justify-center items-center">
            Market Running
          </div>
          <div style={centerstyle}>
            <div>
              <img src={chart} style={imgstyle} alt="" />
            </div>
            <p>***_**_***</p>
            <div>
              <button
                onClick={() => {
                  navigate("login");
                }}
              >
                <img src={open} style={imgstyle} alt="" />
              </button>
            </div>
          </div>
          <div style={laststyle}>
            <p className="text-green-500" style={{ fontSize: '12px' }}>Open -</p>
            <p className="text-red-500" style={{ fontSize: '12px' }}>Close - </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default LandingGameFRONT;
