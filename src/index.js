import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import Display from './Display';
import IncrDecr from './IncrDecr';
import Timer from './Timer';
import * as serviceWorker from './serviceWorker';

class Carkas extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      //displayVal: "25:00",
      //elapsedTime: 0,
      breakLength: 5,
      sessionLength: 25,
      mode: "session",
      isRunning: false,
      previousTime: 0,
      timeLeft: 1500000
    }
  }


/* Functions transferred from Timer.js for controlling of TicTac, Reset and etc. */
componentDidMount() {
  // call back tic tac
  this.intervalID = setInterval(this.ticTac, 1000);
}

componentWillUnmount() {
  clearInterval(this.intervalID);
}

ticTac = () => {
  if(this.state.isRunning){
    const now = Date.now();
    //console.log('tic tac ...')
    //debugger
    
    if ( this.state.timeLeft < 0 ) { 
      //debugger

      
      
      //this.setState({ isRunning: false });
      this.switchModeHandler();

    } else {
      this.setState({
        //elapsedTime: this.state.elapsedTime + (now - this.state.previousTime),
        previousTime: now,
        timeLeft: this.state.timeLeft - 
        //6*
        (now - this.state.previousTime)
      })
    }
  }
}

switchModeHandler = () => {
  
  //debugger
  const now = Date.now();
  // switch corrent mode and set a new time left
  var nextMode = "";
  var timeLeft = 0;
  if (this.state.mode === "session") {
    nextMode = "break";
    timeLeft = this.state.breakLength * 60000;
  } else {
    nextMode = "session";
    timeLeft = this.state.sessionLength * 60000;
  }
  this.setState({
    //elapsedTime: this.state.elapsedTime + (now - this.state.previousTime),
    previousTime: now,
    mode: nextMode,
    timeLeft: timeLeft,
    //isRunning: true
  })
}

makeNoise = () => {
  document.getElementById("beep").play();
}

playStopHandler = () => {
  if (!this.state.isRunning) {
    const now = Date.now();
    this.setState({
      isRunning: true,
      previousTime: now
    })
    } else {
      this.setState({
        isRunning: false
      })
    }
  }

  resetHandler = () => {
    // reset button
    document.getElementById("beep").pause();
    document.getElementById("beep").currentTime = 0;
    //componentWillUnmount();

    this.setState({
      isRunning: false,
      previousTime: 0,
      mode: "session",
      elapsedTime: 0,
      breakLength: 5,
      sessionLength: 25,
      timeLeft: 1500000
    })
  }

/* Handler of increment/decrement buttons for Break and Session modes */
  incrDecrHandler = (e, string) => {
    if ( string === "Break Length" && this.state.breakLength >= 1 && this.state.breakLength <= 60 ) {
      var sessionLength = this.state.sessionLength * 60000;
    if(e) {
      //console.log("increment break");
      if (this.state.breakLength !== 60) {
      this.setState({
        breakLength: this.state.breakLength + 1,
        mode: "session",
        timeLeft: sessionLength
      })
    }

    } else {
      //console.log("decrement break");
      if (this.state.breakLength !== 1) {
          this.setState({
            breakLength: this.state.breakLength - 1,
            mode: "session",
            timeLeft: sessionLength
          })
      }
    }
  }
  if ( string === "Session Length" && this.state.sessionLength >= 1 && this.state.sessionLength <= 60 ) {
    if(e) {
      //console.log("increment session");
      if (this.state.sessionLength !== 60) {
        this.setState({
          sessionLength: this.state.sessionLength + 1,
          mode: "session",
          timeLeft: ( this.state.sessionLength + 1 ) * 60000
        })
      }
      } else {
      //console.log("decrement session");
      if (this.state.sessionLength !== 1) {
        this.setState({
          sessionLength: this.state.sessionLength - 1,
          mode: "session",
          timeLeft: ( this.state.sessionLength - 1 ) * 60000
        })
      }
    }
  }
  }

  millisToMinutesAndSeconds = (millis) => {
      var minutes = Math.floor(millis / 60000);
      var seconds = ((millis % 60000) / 1000).toFixed(0);
      //console.log( "time: " + minutes + ":" + seconds );
      if ( minutes == 0 && seconds == 0 || minutes == -1 && seconds == -0 ) {
        this.makeNoise();
        //console.log('YAY');
      }
      var correctFormat = "";
      if ( seconds === "60" ) { seconds = "59"}
      if ( millis < 0 ) { 
        seconds = "0";
        minutes = "00";
      }
      if ( minutes < 10 && minutes > 0 ) minutes = "0" + minutes;
      if ( minutes === 0) minutes = "00";
      correctFormat = minutes + ":" + (seconds < 10 ? '0' : '') + seconds;
      
      return correctFormat;
  }

  render() {
    return(
      <React.StrictMode>

      <div className="container">
        <div className="row">
          <div className="col">
          <IncrDecr 
              name="Break Length"
              labelId="break-label"
              incrId="break-increment"
              timerId="break-length"
              timeThis= { this.state.breakLength }
              decrId="break-decrement"
              incrDecrHandler = {this.incrDecrHandler}
              />
          </div>
          <div className="col">
          <IncrDecr 
              labelId="session-label"
              name="Session Length"
              incrId="session-increment"
              timerId="session-length"
              timeThis= { this.state.sessionLength }
              decrId="session-decrement"
              incrDecrHandler = {this.incrDecrHandler}
              />
            </div>
      </div>
    </div>

    <div className="container-md display">
      <Display 
      mode = { this.state.mode }
      displayVal = {this.millisToMinutesAndSeconds(this.state.timeLeft)} />
    </div>

    <audio className="clip" id="beep" src="http://soundbible.com/mp3/Cow%20And%20Bell-SoundBible.com-1243222141.mp3" />
   
      <div className="container">
        <div className="row">
          <div className="col-2"></div>
          <div className="col-8">
      
           <Timer playStopHandler = {this.playStopHandler}
                  resetHandler = {this.resetHandler}
                  isRunning = {this.state.isRunning}
            />

          </div>
          <div className="col-2"></div>
        </div>
    </div>
  </React.StrictMode>
    )
  }
}

ReactDOM.render(
  <Carkas />,
  document.getElementById('main-container')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
