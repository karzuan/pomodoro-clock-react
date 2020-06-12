import React from "react";
import "./styles.css";

function Display(props) {
  return (
    <React.Fragment>
      <label id="timer-label" htmlFor="time-left">
        Session
      </label>
      <div
        id="time-left"
        className="form-control form-control-lg"
        type="text"
        readOnly
      >{props.displayVal}</div>
    </React.Fragment>
  );
}

export default Display;