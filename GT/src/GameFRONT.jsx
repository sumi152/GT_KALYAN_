import topBackground from "./Images/bg.png";
import chart from "./Images/chart.png";
import close from "./Images/close.png";
import open from "./Images/play.png";
import { useEffect, useState } from "react";
import useGameFront from "./Hooks/useGameFront";
import {  useSelector } from "react-redux";

function GameFRONT() {
  const [status, setStatus] = useState(false);
  const [gameRates, setGameRates] = useState([{}]);
  const unique = useSelector(state =>state.userDetail.token)
  console.log(unique);

  const centerstyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginTop: "-4px",
  };
  const laststyle = {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
  };
  const imgstyle = {
    width: "50px",
    height: "auto",
    marginTop: "-4px",
  };
  
  const resinfo = useGameFront(unique);
  useEffect(() => {
    if (resinfo && resinfo["result"]) {
      setStatus(true);
      setGameRates(resinfo["result"]);
    }
  }, [resinfo]);




  console.log(resinfo['result']);
  console.log(gameRates);

  return (
    <div>
      {gameRates.map((game) => (
        <div key={game.game_id} className="mb-5">
          <div className="bg-blue-500 flex justify-between items-center pt-1 pl-2 pr-2 pb-9 ml-2 mr-4 h-35 rounded border border-white text-white">
            <p className="top-0 right-0">{game.game_name}</p>
            <p>00.00.00</p>
          </div>
          <div className="bg-white mr-2 ml-4 z-2 -mt-7 p-1 flex flex-col rounded border">
            <div className={`text-${game.msg === "Market closed" ? "red" : "green"}-500 text-sm flex justify-center items-center`}>
              {game.msg === "Market closed" ? "Market Closed" : "Market Running"}
              {console.log('hello')}
              {console.log(game.game_name)}
              {console.log(game.msg)};
            </div>
            <div style={centerstyle}>
              <div>
                <img src={chart} style={imgstyle} alt="" />
              </div>
              <p>***_**_***</p>
              <button>
                <img src={game.msg === "Market closed" ? close : open} style={imgstyle} alt="" />
              </button>
            </div>
            <div style={laststyle}>
              <p className="text-green-500">Open - {game.open_time} </p>
              <p className="text-red-500">Close - {game.close_time} </p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
export default GameFRONT;
