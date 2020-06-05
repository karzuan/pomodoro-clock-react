import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
// import Display from './Display';
import IncrDecr from './IncrDecr';
// import PlayStopReset from './PlayStopReset';
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
    <input
        class="form-control form-control-lg"
        type="text"
        placeholder="25:00"
        readonly
      />

      <div class="container">
        <div class="row">
          <div class="col"></div>
          <div class="col-8">
      
            <svg class="bi bi-play" width="3em" height="3em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M10.804 8L5 4.633v6.734L10.804 8zm.792-.696a.802.802 0 0 1 0 1.392l-6.363 3.692C4.713 12.69 4 12.345 4 11.692V4.308c0-.653.713-.998 1.233-.696l6.363 3.692z"/>
            </svg>

            <svg class="bi bi-stop" width="3em" height="3em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M3.5 5A1.5 1.5 0 0 1 5 3.5h6A1.5 1.5 0 0 1 12.5 5v6a1.5 1.5 0 0 1-1.5 1.5H5A1.5 1.5 0 0 1 3.5 11V5zM5 4.5a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5h6a.5.5 0 0 0 .5-.5V5a.5.5 0 0 0-.5-.5H5z"/>
            </svg>
      
            <svg class="bi bi-arrow-clockwise" width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" d="M3.17 6.706a5 5 0 0 1 7.103-3.16.5.5 0 1 0 .454-.892A6 6 0 1 0 13.455 5.5a.5.5 0 0 0-.91.417 5 5 0 1 1-9.375.789z"/>
              <path fill-rule="evenodd" d="M8.147.146a.5.5 0 0 1 .707 0l2.5 2.5a.5.5 0 0 1 0 .708l-2.5 2.5a.5.5 0 1 1-.707-.708L10.293 3 8.147.854a.5.5 0 0 1 0-.708z"/>
            </svg>

          </div>
          <div class="col"></div>
        </div>
    </div>
  </React.StrictMode>,
  document.getElementById('main-container')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
