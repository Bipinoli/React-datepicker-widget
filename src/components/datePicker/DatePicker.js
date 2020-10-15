import React, { useState, useRef } from "react";
import Calendar from "./Calendar";
import classes from "./DatePicker.module.scss";
import PickedDate from "./PickedDate";

const DatePicker = () => {
  const [pickedDate, setPickedDate] = useState(new Date());
  const [viewingDate, setViewingDate] = useState(new Date());
  const pickedDateRef = useRef();

  const handleDatePick = (newPick) => {
    setPickedDate((prevPick) => newPick);
    pickedDateRef.current.classList.remove(classes.animate_drawer);
    setTimeout(() => {
      pickedDateRef.current.classList.add(classes.animate_drawer);
    }, 0);
  };

  const handleDateChange = (newDate) => {
    setViewingDate((prevDate) => newDate);
  };

  return (
    <div className={classes.date_picker}>
      <PickedDate date={pickedDate} ref={pickedDateRef}/>
      <Calendar
        date={viewingDate}
        pickedDate={pickedDate}
        pickDateCallback={handleDatePick}
        dateChangeCallback={handleDateChange}
      />
      <div className={classes.footer}>
        <div className={classes.btn}>Cancel</div>
        <div className={`${classes.btn} ${classes.highlighted}`}>OK</div>
      </div>
    </div>
  );
};

export default DatePicker;
