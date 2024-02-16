import React, { useMemo } from "react";
import Navbar from "./Navbar";
import Top from "./Top";
import GameFRONT from "./GameFRONT";
import topBackground from './Images/bg.png';
import { Provider } from "react-redux";

function Imp() {
  const topStyle = {
    backgroundImage: `url(${topBackground})`,
    backgroundSize: 'cover',
    height: 'auto',
    width: '100%',
    paddingBottom:'20px'
  };

  const memoizedNavbar = useMemo(() => <Navbar />, []);
  const memoizedTop = useMemo(() => <Top />, []);

  return (
    <>
      <div className="relative">
        <div className="sticky top-0">
          {memoizedNavbar}
          {memoizedTop}
        </div>

        <div className="" style={topStyle}>
          <GameFRONT />
        </div>
      </div>
    </>
  );
}

export default Imp;
