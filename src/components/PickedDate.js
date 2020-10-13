import React from "react";
import classes from "./DatePicker.module.scss";

const PickedDate = () => {
  return (
    <div className={`${classes.top_display} ${classes.animate_drawer}`}>
      <div className={classes.year}>2018</div>
      <div className={classes.date}>Thu, Feb 18</div>
    </div>
  );
};

export default PickedDate;
