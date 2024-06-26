function Starbiddata({ data }) {
    return (
      <>
        <div className="mb-5">
          <div className="bg-green-500 flex justify-center items-center pl-2 pr-2 ml-2 mr-4 h-7 rounded-2xl border border-white text-white">
            <p>{data.game_name}</p>
          </div>
  
          {/* Conditional rendering using logical && operator */}
          {data.pana === "Single Digit" && (
            <div className="bg-white text-black mr-2 ml-4 z-2 -mt-1 p-1 flex justify-between align-middle border rounded-t-2xl rounded-tr-2xl rounded-br-2xl rounded-bl-0 pl-4 pr-5">
              <div className="flex flex-col">
                <p>
                  {data.session} Digit:  {data.digits}
                </p>
                <p>Session: {data.session}</p>
                <p>Date: {data.bid_date}</p>
              </div>
              <div className="flex flex-col justify-around">
                <p className="font-bold">{data.pana}</p>
                <p className="font-bold">{data.points} pts</p>
              </div>
            </div>
          )}
  
  
          {data.pana === "Single Pana" && (
            <div className="bg-white text-black mr-2 ml-4 z-2 -mt-1 p-1 flex justify-between align-middle border rounded-t-2xl rounded-tr-2xl rounded-br-2xl rounded-bl-0 pl-4 pr-5">
              <div className="flex flex-col">
                <p>
                  {data.session} Digit {data.digits}
                </p>
                <p>{/* Any additional content you want to render */}</p>
                <p>Date: {data.bid_date}</p>
              </div>
              <div className="flex flex-col justify-around">
                <p className="font-bold">{data.pana}</p>
                <p className="font-bold">{data.points} pts</p>
              </div>
            </div>
          )}
  
          {data.pana === "Double Pana" && (
            <div className="bg-white text-black mr-2 ml-4 z-2 -mt-1 p-1 flex justify-between align-middle border rounded-t-2xl rounded-tr-2xl rounded-br-2xl rounded-bl-0 pl-4 pr-5">
              <div className="flex flex-col">
                <p>
                  {data.session} Digit {data.digits}
                </p>
                <p>{/* Any additional content you want to render */}</p>
                <p>Date: {data.bid_date}</p>
              </div>
              <div className="flex flex-col justify-around">
                <p className="font-bold">{data.pana}</p>
                <p className="font-bold">{data.points} pts</p>
              </div>
            </div>
          )}
  
          {data.pana === "Tripple Pana" && (
            <div className="bg-white text-black mr-2 ml-4 z-2 -mt-1 p-1 flex justify-between align-middle border rounded-t-2xl rounded-tr-2xl rounded-br-2xl rounded-bl-0 pl-4 pr-5">
              <div className="flex flex-col">
                <p>
                  {data.session} Digit {data.digits}
                </p>
                <p>{/* Any additional content you want to render */}</p>
                <p>Date: {data.bid_date}</p>
              </div>
              <div className="flex flex-col justify-around">
                <p className="font-bold">{data.pana}</p>
                <p className="font-bold">{data.points} pts</p>
              </div>
            </div>
          )}
  
        </div>
      </>
    );
  }
  
  export default Starbiddata;
  