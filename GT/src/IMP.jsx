import Navbar from "./Navbar";
import Top from "./Top";
import GameFRONT from "./GameFRONT";
import topBackground from './Images/bg.png';
import { Provider } from "react-redux";


function Imp(){
    const topStyle = {
        backgroundImage: `url(${topBackground})`,
        backgroundSize: 'cover',
        height: 'auto', // Set the height of the div
        width: '100%', // Set the width of the div
        paddingBottom:'20px'
      };
    return (
        <>
        <div className="relative">
        <div className="sticky top-0">
        <Navbar />
        <Top />
        </div>
        
      <div className="" style={topStyle}>

        <GameFRONT/>
        {/* <GameFRONT/> */}

      </div>
      </div>

        </>
    );
}

export default Imp;