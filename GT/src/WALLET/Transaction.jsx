import useTransaction from "../Hooks/useTransaction";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";

import close from "../Images/close.png";
import open from "../Images/play.png";

function Transaction() {
  const [status, setStatus] = useState(false);
  const [gameRates, setGameRates] = useState([]);
  const unique = useSelector((state) => state.userDetail.token);
  const resinfo = useTransaction(unique);
  console.log(resinfo);

  useEffect(() => {
    if (resinfo && resinfo["transaction_history"]) {
      setStatus(true);
      setGameRates(resinfo["transaction_history"]);
    } else {
      setStatus(false);
      setGameRates([]);
    }
  }, [resinfo]);
  console.log(gameRates);
  console.log(gameRates);
  return (
    <>
      <div className="">
        {gameRates.map((game, index) => (
          <div key={index} className="mb-8">
            <div className="border-white text-white mr-2 ml-4 p-2 py-4 flex justify-between rounded-3xl border">
              <div>
                <img
                  className=""
                  src={game.transaction_type === '1' ? open : close}
                  alt=""
                />
              </div>
              <div>
                <p>{game?.transaction_note}</p>
                <p className="mt-2">{game?.insert_date}</p>
              </div>
              <div>
                <p>{game?.amount}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Transaction;
