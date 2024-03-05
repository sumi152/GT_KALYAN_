import topBackground from "./Images/bg.png";
import chart from "./Images/chart.png";
import close from "./Images/close.png";
import open from "./Images/play.png";
import { useEffect, useState } from "react";
import useGameFront from "./Hooks/useGameFront";
import { useSelector } from "react-redux";
import { NavLink, useNavigate } from "react-router-dom";
import Timer from "./Timer";

function GameFRONT() {
  const [status, setStatus] = useState(false);
  const [gameRates, setGameRates] = useState([{}]);
  const unique = useSelector((state) => state.userDetail.token);

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

  const navigate = useNavigate();

  return (
    <div>
      {gameRates.map((game) => (
        <div key={game.game_id} className="mb-5">
          <div className="bg-blue-500 flex justify-between items-center pt-1 pl-2 pr-2 pb-9 ml-2 mr-4 h-35 rounded-2xl border border-white text-white">
            <p className="top-0 right-0">{game.game_name}</p>
            {game.open_time && game.close_time && game.msg_status === 1 ? (
              <Timer openTime={game.open_time} closeTime={game.close_time} />
            ) : (
              "00:00:00"
            )}
          </div>
          <div className="bg-white mr-2 ml-4 z-2 -mt-7 p-1 flex flex-col rounded-3xl border">
            <div
              className={`text-${
                game.msg_status === 2 ? "red" : "green"
              }-500 text-sm flex justify-center items-center`}
            >
              {game.msg_status === 2 ? "Market Closed" : "Market Running"}
            </div>
            <div style={centerstyle}>
              <div>
                <a
                  href={game.web_chart_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img src={chart} style={imgstyle} alt="" />
                </a>
              </div>

              <p>***_**_***</p>
              <button

              onClick={()=>{
                if(game.msg_status === 1)
                {
                  navigate("/game", { state: { gameId: game.game_id, openTime:game.open_time } })
                }
              }}>
                <img src={game.msg_status === 2 ? close : open} style={imgstyle} alt="" />

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
