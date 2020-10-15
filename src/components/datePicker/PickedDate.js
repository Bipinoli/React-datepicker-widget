import React, {forwardRef} from "react";
import classes from "./DatePicker.module.scss";

const PickedDate = ({date}, ref) => {
  return (
    <div ref={ref} className={`${classes.top_display} ${classes.animate_drawer}`}>
      <div className={classes.year}>{date.getFullYear()}</div>
      <div className={classes.date}>{formatDate(date)}</div>
    </div>
  );
};

const formatDate = (date) => {
  let dateStr = date.toDateString().split(" ").slice(0, -1);
  return `${dateStr[0]}, ${dateStr[1]} ${dateStr[2]}`;
};

export default forwardRef(PickedDate);
