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
      displayVal: "24:59"
    }
  }

  /*  Idea for handler: 
      Fetch ticTacHandler with session time as an arg. After it reaches "00:00" fetch it again with
      the Brake time and start all over and over again.
  */

    /* 
      1. Reveive string of number and convert it to "MM:SS"
      2. Substruct a second each second, untill the time is gone
    
  
    make the minutes go down one by one and continuously update the state
       of the current time on the display
    */

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
              timeThis="5"
              decrId="break-decrement"
              />
          </div>
          <div className="col">
          <IncrDecr 
              labelId="session-label"
              name="Session Length"
              incrId="session-increment"
              timerId="session-length"
              timeThis="25"
              decrId="session-decrement"
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
