import React from "react";
import classes from "./DatePicker.module.scss";
import CalendarDays from "./CalendarDays";

const Calendar = ({
  date,
  pickedDate,
  pickDateCallback,
  dateChangeCallback,
}) => {
  const handlePrevMonthClick = () => {
    const newDate = new Date(date.getFullYear(), date.getMonth() - 1, 1);
    dateChangeCallback(newDate);
  };
  const handleNextMonthClick = () => {
    const newDate = new Date(date.getFullYear(), date.getMonth() + 1, 1);
    dateChangeCallback(newDate);
  };

  return (
    <div className={classes.calendar}>
      <div className={classes.year_part}>
        <i className="fa fa-chevron-left" onClick={handlePrevMonthClick}></i>
        <div className={classes.year}>{formatDate(date)}</div>
        <i className="fa fa-chevron-right" onClick={handleNextMonthClick}></i>
      </div>
      <CalendarDays
        date={date}
        pickedDate={pickedDate}
        pickDateCallback={pickDateCallback}
      />
    </div>
  );
};

function formatDate(date) {
  let dateStr = date.toDateString().split(" ");
  return `${dateStr[1]}, ${dateStr[3]}`;
}

export default Calendar;
