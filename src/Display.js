import React from "react";
import "./styles.css";

function Display(props) {
  return (
    <React.Fragment>
      <div id="timer-label" htmlFor="time-left">
        {props.mode}
      </div>
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