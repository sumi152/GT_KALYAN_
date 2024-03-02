import React, { useState, useEffect } from "react";

const Timer = ({ openTime, closeTime }) => {
  const calculateTimeLeft = () => {
    const openTimeWithoutSuffix = openTime.replace(/\s[AaPp][Mm]$/, '');
    const closeTimeWithoutSuffix = closeTime.replace(/\s[AaPp][Mm]$/, '');
  
    const open = new Date(`2000-01-01T${openTimeWithoutSuffix}`);
    const close = new Date(`2000-01-01T${closeTimeWithoutSuffix}`);
  
    if (openTime.match(/[Pp][Mm]$/)) {
      const openHours = open.getHours();
      open.setHours(openHours === 12 ? 12 : openHours + 12);
    }
    if (closeTime.match(/[Pp][Mm]$/)) {
      const closeHours = close.getHours();
      close.setHours(closeHours === 12 ? 12 : closeHours + 12);
    }
  
    const timeDifference = Math.abs(close - open);
    return timeDifference; // Return total time difference in milliseconds
  };

  const [totalTime, setTotalTime] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      // Recalculate remaining time based on current state
      setTotalTime(prevTotalTime => prevTotalTime - 1000);
    }, 1000);

    return () => clearInterval(timer); // Cleanup timer on component unmount
  }, [openTime, closeTime]);

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };

  // Calculate remaining hours, minutes, and seconds
  const remainingHours = Math.floor(totalTime / (1000 * 60 * 60));
  const remainingMinutes = Math.floor((totalTime % (1000 * 60 * 60)) / (1000 * 60));
  const remainingSeconds = Math.floor((totalTime % (1000 * 60)) / 1000);

  return (
    <span>
      {`${formatTime(remainingHours)}:${formatTime(remainingMinutes)}:${formatTime(remainingSeconds)}`}
    </span>
  );
};

export default Timer;
