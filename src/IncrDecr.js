import React from 'react';
import './styles.css';

class IncrDecr extends React.Component {
  constructor(props){
    super(props);
  }



  render(){
    const labelId = this.props.labelId;
    const name = this.props.name;
    const decrId = this.props.decrId;
    const timeThis = this.props.timeThis;
    const incrId = this.props.incrId;
    const timerId = this.props.timerId;
  return (
    <React.Fragment>
    <div id={labelId}>{name}</div>
    <span id={decrId} onClick = {() => this.props.incrDecrHandler(0, name )}>
      <svg className="bi bi-arrow-down-square" width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
      <path fillRule="evenodd" d="M4.646 7.646a.5.5 0 0 1 .708 0L8 10.293l2.646-2.647a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 0-.708z"/>
      <path fillRule="evenodd" d="M8 4.5a.5.5 0 0 1 .5.5v5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5z"/>
    </svg>
    </span>
    <span id={timerId}>{timeThis}</span>
    <span id={incrId} onClick = {() => this.props.incrDecrHandler(1, name )}>
    <svg className="bi bi-arrow-up-square" width="2em" height="2em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" d="M14 1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
      <path fillRule="evenodd" d="M4.646 8.354a.5.5 0 0 0 .708 0L8 5.707l2.646 2.647a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 0 0 0 .708z"/>
      <path fillRule="evenodd" d="M8 11.5a.5.5 0 0 0 .5-.5V6a.5.5 0 0 0-1 0v5a.5.5 0 0 0 .5.5z"/>
    </svg>
    </span>
    </React.Fragment>
  );
}
}

export default IncrDecr;