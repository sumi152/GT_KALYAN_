import topBackground from './Images/bg.png';
import chart from './Images/chart.png'
import close from './Images/close.png'
import open from './Images/play.png'
import { useEffect } from 'react';

function GameFRONT(){

    const topStyle = {
        backgroundImage: `url(${topBackground})`,
        backgroundSize: 'cover',
        height: 'auto', // Set the height of the div
        width: '100%', // Set the width of the div
        paddingBottom:'500px',
        
      };
    const centerstyle={
        display: 'flex',
        justifyContent: 'space-between',
        alignItems:'center',
        marginTop:'-4px'
    }
    const laststyle={
        display: 'flex',
        justifyContent: 'space-around',
        alignItems:'center'
    }
    const imgstyle={
        width:'50px',
        height:'auto',
        marginTop:'-4px'
    }
    var myHeaders = new Headers();
myHeaders.append("Content-Type", "application/json");
myHeaders.append("Cookie", "ci_session=7c38fc1fc455fca9846d688fb8343f5c7ea71bee");

var raw = JSON.stringify({
  "env_type": "Prod",
  "app_key": "jAFaRUulipsumXLLSLPFytYvUUsgfh"
});

var requestOptions = {
  method: 'POST',
  headers: myHeaders,
  body: raw,
  redirect: 'follow'
};

fetch("https://kalyanmilanofficialmatka.in/api-starline-game-rates", requestOptions)
  .then(response => response.text())
  .then(result => console.log(result))
  .catch(error => console.log('error', error));
    return(
      
    <>
      <div style={topStyle}>
      <div className="bg-blue-500 flex justify-between items-center pt-1 pl-2 pr-2 pb-9  h-35 absolute right-10 left-5 rounded border border-white text-white">
        <p className="top-0 right-0">Milan Morning</p>
        <p>00.00.00</p>
      </div>
      <div className="bg-white absolute left-10 right-5 z-2 mt-7  p-1 flex flex-col  rounded border">
        <div className='text-red-500 text-sm flex justify-center items-center '>Market Closed</div>
        <div style={centerstyle}>
            <div className=''> <img src={chart} style={imgstyle}  alt=""  /></div>
            <p>***_**_***</p>
            <button > <img src={open} style={imgstyle} alt="" /></button>
        </div>
        <div style={laststyle}>
            <p className='text-green-500  '>Open - 10.05AM </p>
            <p className='text-red-500'>Close - 12.05PM </p>
        </div>
      </div>
      </div>
      
    </>);
}
export default GameFRONT;