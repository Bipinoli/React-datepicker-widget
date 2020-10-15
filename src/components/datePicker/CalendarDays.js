import React from "react";
import classes from "./DatePicker.module.scss";

const CalendarDays = ({ date, pickedDate, pickDateCallback }) => {
  return (
    <div className={classes.calendar_content}>
      <div className={classes.weeks}>
        <p>Su</p>
        <p>Mo</p>
        <p>Tu</p>
        <p>We</p>
        <p>Th</p>
        <p>Fr</p>
        <p>Sa</p>
      </div>
      <div className={classes.days}>
        {generateRows(date, pickedDate, pickDateCallback)}
      </div>
    </div>
  );
};

function generateRows(date, pickedDate, pickDateCallback) {
  const [firstDay, lastDay] = getMonthInfo(date);

  const getRow = ({ begin, end, offset }) => {
    return (
      <div className={classes.row} key={begin}>
        {[...Array(35).keys()].slice(begin, end).map((x) => {
          if (
            x - offset >= firstDay.getDate() &&
            x - offset <= lastDay.getDate()
          ) {
            let offsetDate = new Date(
              date.getFullYear(),
              date.getMonth(),
              x - offset
            );
            if (areEqual(pickedDate, offsetDate))
              return (
                <p
                  key={x}
                  className={classes.picked}
                  onClick={(e) => handleDatePick(e, date, pickDateCallback)}
                >
                  {x - offset}
                </p>
              );
            return (
              <p
                key={x}
                onClick={(e) => handleDatePick(e, date, pickDateCallback)}
              >
                {x - offset}
              </p>
            );
          }
          return <p key={x} className={classes.no_hover}></p>;
        })}
      </div>
    );
  };
  return (
    <>
      {[...Array(5).keys()].map((x) => {
        return getRow({
          begin: x * 7,
          end: (x + 1) * 7,
          offset: firstDay.getDay() - 1,
        });
      })}
    </>
  );
}

function handleDatePick(event, date, pickDateCallback) {
  const dayNum = parseInt(event.target.innerText);
  const newPick = new Date(date.getFullYear(), date.getMonth(), dayNum);
  pickDateCallback(newPick);
}

function getMonthInfo(date) {
  const month = date.getMonth();
  const year = date.getFullYear();
  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);
  return [firstDayOfMonth, lastDayOfMonth];
}

function areEqual(date1, date2) {
  return date1.toDateString() === date2.toDateString();
}

export default CalendarDays;
