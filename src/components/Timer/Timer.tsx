import React, { Component } from 'react';
import './Timer.css'

import TimerButton from '../TimerButton/TimerButton'

class Timer extends Component {
  constructor(props: any) {
    super(props);
    this.state = {
      minutes: 25,
      seconds: 0,
 	      isOn: false
    };
  }

  startTimer() {
    console.log('Starting timer.');
  }

  stopTimer() {
    console.log('Stopping timer.');
  }

 resetTimer() {
    console.log('Resetting timer.');
  }

  render = () => {
    return(
      <div className="timer-container">    
        <TimerButton buttonAction={this.startTimer} buttonValue={'Start'} />
        <TimerButton buttonAction={this.stopTimer} buttonValue={'Stop'} />
        <TimerButton buttonAction={this.resetTimer} buttonValue={'Reset'} />                
      </div>
    );
  };
}

export default Timer;