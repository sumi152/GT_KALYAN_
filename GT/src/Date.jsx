// DatePickerButton.js
import React, { useState, useRef, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import cal from "./Images/calendar_icon.png";

const DatePickerButton = ({ selectedDate, onDateChange }) => {
  const [startDate, setStartDate] = useState(selectedDate || new Date());
  const datePickerRef = useRef(null);

  useEffect(() => {
    //console.log(startDate); // Log the updated startDate after it has been set
  }, [startDate]);

  const handleDateChange = (date) => {
    setStartDate(date);
    if (onDateChange) {
      onDateChange(date);
    }
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
        className="bg-blue-500"
        ref={datePickerRef}
      />
    </div>
  );
};

export default DatePickerButton;
