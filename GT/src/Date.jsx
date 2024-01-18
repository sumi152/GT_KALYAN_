// DatePickerButton.js
import React, { useState, useRef } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import cal from "./Images/calendar_icon.png";

const DatePickerButton = () => {
  const [startDate, setStartDate] = useState(new Date());
  const datePickerRef = useRef(null);

  const handleDateChange = (date) => {
    setStartDate(date);
    // Additional logic you want to perform on date change
  };

  const openDatePicker = () => {
    if (datePickerRef.current) {
      datePickerRef.current.setOpen(true);
    }
  };

  return (
    <div className='flex justify-start items-center w-full border border-black-500 bg-blue-500 rounded' onClick={openDatePicker}>
      <img className="m-1" src={cal} alt="" />
      <DatePicker
        selected={startDate}
        onChange={(date) => handleDateChange(date)}
        ref={datePickerRef}
        className="bg-blue-500"
      />
    </div>
  );
};

export default DatePickerButton;
