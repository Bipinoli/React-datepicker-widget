import React from "react";
import Calendar from "./Calendar";
import classes from "./DatePicker.module.scss";
import PickedDate from "./PickedDate";

const DatePicker = () => {
  return (
    <div className={classes.date_picker}>
      <PickedDate />
      <Calendar />
      <div className={classes.footer}>
        <div className={classes.btn}>Cancel</div>
        <div className={`${classes.btn} ${classes.highlighted}`}>OK</div>
      </div>
    </div>
  );
};

export default DatePicker;
