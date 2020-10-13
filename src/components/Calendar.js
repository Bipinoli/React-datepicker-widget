import React from "react";
import classes from "./DatePicker.module.scss";

const Calendar = () => {
  return (
    <div className={classes.calendar}>
      <div className={classes.year_part}>
        <i className="fa fa-chevron-left"></i>
        <div className={classes.year}>Feb, 2019</div>
        <i className="fa fa-chevron-right"></i>
      </div>
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
          <div className={classes.row}>
            <p></p>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p className={classes.picked}>4</p>
            <p>5</p>
            <p>6</p>
          </div>
          <div className={classes.row}>
            <p>6</p>
            <p>7</p>
            <p>8</p>
            <p>9</p>
            <p>10</p>
            <p>11</p>
            <p>12</p>
          </div>
          <div className={classes.row}>
            <p>13</p>
            <p>14</p>
            <p>15</p>
            <p>16</p>
            <p>17</p>
            <p>5</p>
            <p>6</p>
          </div>
          <div className={classes.row}>
            <p>11</p>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p>5</p>
            <p>6</p>
          </div>
          <div className={classes.row}>
            <p>11</p>
            <p>1</p>
            <p>2</p>
            <p>3</p>
            <p>4</p>
            <p></p>
            <p></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;
