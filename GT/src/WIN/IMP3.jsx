import React, { useState } from "react";
import Win from "./Win";
import Windata from "./Windata";
import topBackground from "../Images/bg.png";
import search from '../Images/search.png';

function IMP3() {
  const [fetchResultStatus, setFetchResultStatus] = useState(false);
  const [fetchResultData, setFetchResultData] = useState(null); // State to store fetch result

  // Function to update fetch result status and data
  const handleDataFetch = (status, data) => {
    setFetchResultStatus(status);
    setFetchResultData(data);
    console.log(data);
  };

  const topStyle = {
    backgroundImage: `url(${topBackground})`,
    backgroundSize: "cover",
    height: "auto", // Set the height of the div
    width: "100%", // Set the width of the div
    paddingBottom: "300px",
  };

  return (
    <>
      <div className="relative">
        <div className="sticky top-0">
          <Win onDataFetch={handleDataFetch} /> {/* Pass the function as prop */}
        </div>

        <div className="text-white" style={topStyle}>
          <p className="text-center">Transactions</p>
          {/* Conditionally render Windata components or the search image */}
          {fetchResultStatus && fetchResultData ? (
            fetchResultData.bid_data.map((item, index) => (
              <Windata key={index} data={item} />
            ))
          ) : (
            <img src={search} className="h-48 w-48 absolute left-1/2 transform -translate-x-1/2   " alt="Search" />
          )}
        </div>
      </div>
    </>
  );
}

export default IMP3;
