import React, { useState } from "react";
import Calendar from "./Calendar";
import classes from "./DatePicker.module.scss";
import PickedDate from "./PickedDate";

const DatePicker = () => {
  const [pickedDate, setPickedDate] = useState(new Date());
  const [viewingDate, setViewingDate] = useState(new Date());

  const handleDatePick = (newPick) => {
    setPickedDate((prevPick) => newPick);
  };

  const handleDateChange = (newDate) => {
    setViewingDate((prevDate) => newDate);
  };

  return (
    <div className={classes.date_picker}>
      <PickedDate date={pickedDate} />
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
