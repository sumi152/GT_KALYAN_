import logo from "./Images/logo.png";
import { BiArrowBack } from "react-icons/bi";
import topBackground from './Images/bg.png';

function Htp() {
  const divStyle = {
     // Adjust the border width and color as needed
    padding: "20px", // Optional: Adding padding for better visibility
    borderBottom: '2px solid white'
  };
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

  return (
    <div>
      <div>
        <div className="bg-custom-purple text-white" style={navbarStyle}>
          <button className="px-4">
            <BiArrowBack size={24} />
          </button>
          <div>
            <h1 className="text-white px-3 ">How To Play</h1>
          </div>
        </div>
      </div>
      <div className="h-screen" style={backStyle}>
      <div
        className="sticky top-0 text-white "
        style={divStyle}
      >
        <div className="flex justify-center items-center ">
          <img src={logo} alt="Center Image" className="w-40 h-40" />
        </div>
      </div>
      <div className="text-white flex flex-col p-5">
        <p className="m-3">Simply download our application from Google Play Store or from our official Website.</p>
        <p className="m-3">Register with your Mobile Number, Email ID, User Name with our platform.</p>
        <p className="m-3">Login with the application using Mobile Number and Password with your secure PIN code.</p>
        <p className="m-3">Select the Game type, select your favorite number and start to Play Game.</p>
        <p className="m-3"> Get a chance to win upto 10 Lac Points.</p>
      </div>


      </div>
    </div>
  );
}
export default Htp;
