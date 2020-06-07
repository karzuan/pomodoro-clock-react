import React from "react";
import "./styles.css";

class Timer extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      isRunning: false,
      currentTime: 0,
      timeNow: 0,
      elapsedTime: 0,
      breakInterval: 300000,
      sessionInterval: 1500000,
      currentMode: "session"
    }
  }

  componentDidMount () {
    setInterval(this.ticTac, 1000);
  }

  ticTac = () => {
    if (this.state.isRunning ) { 
      var now = Date.now();
      this.setState({
        timeNow: now,
        elapsedTime: this.state.elapsedTime + (this.state.timeNow - now )
      })
      
    }
  }

  startStopHandler = () => {
    if(this.state.isRunning){
      this.setState({
        isRunning: false
      });
    } else {
      this.setState({
        isRunning: true
      });
    }

  }


  // countDownHandler = (time) => {
  //   var minutes = time;
  //   var restime = '';
  //   if (minutes < 10) { minutes = "0" + minutes }
  //   var seconds = "00";
  //   restime = `${minutes}:${seconds}`;
  //   if( minutes > 0 && seconds !== "00" )
  //   return restime;
  // }


  // ticTacHandler = (mins) => {
  //   var minutes = mins;
  //   console.log ( this.countDownHandler(9));
  //   setInterval( () => {
  //     minutes = minutes - 1;
  //     console.log(minutes);
  //   }, 1000 );
  // }

  render(){

    let iconStartStop;
    if (this.state.isRunning) {
      iconStartStop = <svg
      className="bi bi-stop"
      width="3em"
      height="3em"
      viewBox="0 0 16 16"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M3.5 5A1.5 1.5 0 0 1 5 3.5h6A1.5 1.5 0 0 1 12.5 5v6a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 11V5zM5 4.5a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5V5a.5.5 0 0 0-.5-.5H5z"
      />
    </svg>;
    } else {
      iconStartStop =  <svg
      className="bi bi-play"
      width="3em"
      height="3em"
      viewBox="0 0 16 16"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        d="M10.804 8L5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"
      />
    </svg>;
    }

  return (
    <React.Fragment>
      <button id="start_stop" onClick={this.startStopHandler} type="button" className="btn btn-light">{iconStartStop}</button>

      <button id="reset" type="button" className="btn btn-light">
      <svg
        className="bi bi-arrow-clockwise"
        width="3em"
        height="3em"
        viewBox="0 0 16 16"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          d="M3.17 6.706a5 5 0 0 1 7.103-3.16.5.5 0 1 0 .454-.892A6 6 0 1 0 13.455 5.5a.5.5 0 0 0-.91.417 5 5 0 1 1-9.375.789z"
        />
        <path
          fillRule="evenodd"
          d="M8.147.146a.5.5 0 0 1 .707 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 1 1-.707-.708L10.293 3 8.147.854a.5.5 0 0 1 0-.708z"
        />
      </svg>
      </button>
      
    </React.Fragment>
  );
  }
}

export default Timer;
