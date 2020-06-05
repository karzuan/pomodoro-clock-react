import React from "react";
import "./styles.css";

function Display(props) {
  return (
    <React.Fragment>
      <label id="timer-label" for="time-left">
        Session
      </label>
      <input
        id="time-left"
        class="form-control form-control-lg"
        type="text"
        placeholder="25:00"
        readonly
      />
    </React.Fragment>
  );
}

export default Display;