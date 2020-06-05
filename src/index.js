import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import Display from './Display';
import IncrDecr from './IncrDecr';
import PlayStopReset from './PlayStopReset';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <React.StrictMode>

      <div class="container">
        <div class="row">
          <div class="col">
          <IncrDecr 
              name="Break Length"
              labelId="break-label"
              incrId="break-increment"
              timerId="break-length"
              timeThis="5"
              decrId="break-decrement"
              />
          </div>
          <div class="col">
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

    <div class="container-md display">
      <Display />
    </div>
    

      <div class="container">
        <div class="row">
          <div class="col-1"></div>
          <div class="col-10">
      
           <PlayStopReset />

          </div>
          <div class="col-1"></div>
        </div>
    </div>
  </React.StrictMode>,
  document.getElementById('main-container')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
