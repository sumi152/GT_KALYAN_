import { Link, Navigate, useNavigate } from "react-router-dom";
import topBackground from "./Images/bg.png";
import { BiArrowBack } from "react-icons/bi";
import starMarker from "./Images/strline_market.png";

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
    navigate(-1);
  }

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
              <div style={priceStyle}></div>
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
