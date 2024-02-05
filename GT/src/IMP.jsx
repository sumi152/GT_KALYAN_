import Navbar from "./Navbar";
import Top from "./Top";
import GameFRONT from "./GameFRONT";
import topBackground from './Images/bg.png';

function Imp(){
    const topStyle = {
        backgroundImage: `url(${topBackground})`,
        backgroundSize: 'cover',
        height: 'auto', // Set the height of the div
        width: '100%', // Set the width of the div
        paddingBottom:'500px'
      };
    return (
        <>
        <Navbar />
        <Top />
        
      <div style={topStyle}>

        <GameFRONT/>
        {/* <GameFRONT/> */}

      </div>

        </>
    );
}

export default Imp;