import React from 'react';
import PropTypes from 'prop-types';

import './TimerButton.css';

const TimerButton =(props:any) => (    
    
  <div className="button-container">
    <button className='button-value'
             onClick={props.buttonAction}>
             {props.buttonValue}
    </button>
  </div>
);

TimerButton.propTypes = {
  buttonAction: PropTypes.func.isRequired,
  buttonValue: PropTypes.string.isRequired,
};

export default TimerButton;