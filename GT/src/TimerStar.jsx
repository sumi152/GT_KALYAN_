import React, { useState, useEffect } from "react";



const TimerStar = ({ closeTime }) => {
    const [days, setDays] = useState(0);
    const [hours, setHours] = useState(0);
    const [minutes,setMinutes]=useState(0);
    const [secs,setSeconds]=useState(0);


  const calculateTimeLeft = () => {
    const totalTime=(closeTime*1000)-Date.now();
    setDays(Math.floor(totalTime/(1000*60*60*24)))
    setHours(Math.floor(totalTime / (1000 * 60 * 60)%24));
    setMinutes(Math.floor((totalTime/1000/60)%60));
    setSeconds(Math.floor((totalTime /1000 )%60));

  };



  useEffect(() => {
    const timer = setInterval(() => calculateTimeLeft(), 1000);
    return () => clearInterval(timer);
    
  }, []);

  const formatTime = (time) => {
    return time < 10 ? `0${time}` : time;
  };


  return (
    <span>
      {`${formatTime(hours)}:${formatTime(minutes)}:${formatTime(secs)}`}
    </span>
  );
};

export default TimerStar;
