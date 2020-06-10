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
      displayVal: "25:00",
      breakLength: 5,
      sessionLength: 25,
      mode: "session"
    }
  }

  incrDecrHandler = (e, string) => {
    if ( string === "Break Length") {
    if(e) {
      console.log("increment break");
      this.setState({
        breakLength: this.state.breakLength + 1
      })

    } else {
      console.log("decrement break");
      this.setState({
        breakLength: this.state.breakLength - 1
      })
    }
  }
  if ( string === "Session Length") {
    if(e) {
      console.log("increment session");
      this.setState({
        sessionLength: this.state.sessionLength + 1
      })
      } else {
      console.log("decrement session");
      this.setState({
        sessionLength: this.state.sessionLength - 1
      })
    }
  }
  }

  toMins = (ms) => {
    return Math.floor(ms/60000);
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
      <Display displayVal = {this.state.displayVal} />
    </div>
    

      <div className="container">
        <div className="row">
          <div className="col-2"></div>
          <div className="col-8">
      
           <Timer />

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
