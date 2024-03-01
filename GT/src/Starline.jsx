import { Link, Navigate, useNavigate } from "react-router-dom";
import topBackground from "./Images/bg.png";
import { BiArrowBack } from "react-icons/bi";
import starMarker from "./Images/strline_market.png";
import useStarGameRate from "./Hooks/useStarGameRate";
import { useState, useEffect } from "react";
function Starline() {
  const backStyle = {
    backgroundImage: `url(${topBackground})`,
    backgroundSize: "cover", // This will make the background image cover the container without
    paddingBottom: "50px",
  };
  const navbarStyle = {
    height: "60px",
    display: "flex",
    alignItems: "center",
  };
  const btnStyle = {
    background: "linear-gradient(to right, #33FF42, #000000)",
    width: "150px",
    padding: "7px",
    borderRadius: "15px",
    margin: "20px 10px 0 10px",
  };

  const box1 = {
    alignItems: "center",
    justifyContent: "center",
    gap: "20%",
  };

  const priceStyle = {
    background: "linear-gradient(to right, #33FF42, #7433FF)",
    height: "200px",
    width: "500px",
    margin: "70px 20px 0 20px",
    borderRadius: "20px",
  };

  const marker = {
    margin: "70px 20px -20px 20px",
    display:"flex",
    justifyContent:"center",

  }

  const navigate = useNavigate();
  const back=()=>{
    navigate('/imp');
  }

  const [status, setStatus] = useState(false);
  const [gameRates, setGameRates] = useState([]);
  const resinfo = useStarGameRate();

  useEffect(() => {
    if (resinfo && resinfo['game_rates']) {
      setStatus(true);
      setGameRates(resinfo['game_rates'][0]);
    }
  }, [resinfo]);


  return (
    <>
      <div>
        <div className="bg-custom-purple text-white" style={navbarStyle}>
          <button className="px-4" onClick={() => back()}>
            <BiArrowBack size={24} />
          </button>
          <div>
            <h1 className="text-white px-3 text-lg">Star Line</h1>
          </div>
        </div>
        <div>
          <div style={backStyle}>
            <div className="flex " style={box1}>
              <button
                className="text-white rounded border border-white  "
                style={btnStyle}
                onClick={() => navigate("/bid")}
              >
                Bid History
              </button>
              <button
                className="text-white rounded border border-white "
                style={btnStyle}
                onClick={() => navigate("/win")}
              >
                Win History
              </button>
            </div>
            <div className="flex justify-center align-items-center">
              <div style={priceStyle} className="px-5 py-2 text-white">
                
              <div className="flex flex-row justify-between p-2">
              <p>Single Digit</p>
              <p>:-</p>
              <p>{gameRates['single_digit_val_1']}-{gameRates['single_digit_val_2']}</p>
              </div>


              
              <div className="flex flex-row justify-between p-2">
              <p>Single Panna</p>
              <p>:-</p>
              <p>{gameRates['single_pana_val_1']}-{gameRates['single_pana_val_2']}</p>
              </div>

              <div className="flex flex-row justify-between p-2">
              <p>Double Panna</p>
              <p>:-</p>
              <p>{gameRates['double_pana_val_1']}-{gameRates['double_pana_val_2']}</p>
              </div>



              <div className="flex flex-row justify-between p-2">
              <p>Tripple Panna</p>
              <p>:-</p>
              <p>{gameRates['tripple_pana_val_1']}-{gameRates['tripple_pana_val_2']}</p>
              </div>

              </div>

            </div>
            <div style={marker}>
                <img src={starMarker} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Starline;
