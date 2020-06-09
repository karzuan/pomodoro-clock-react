import React from "react";
import "./styles.css";

function Display(props) {
  return (
    <React.Fragment>
      <label id="timer-label" htmlFor="time-left">
        Session
      </label>
      <input
        id="time-left"
        className="form-control form-control-lg"
        type="text"
        placeholder={props.displayVal}
        readOnly
      />
    </React.Fragment>
  );
}

export default Display;