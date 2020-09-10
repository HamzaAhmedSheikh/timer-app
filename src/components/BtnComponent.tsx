import React from 'react';

function BtnComponent(props:{status:number,resume: any, reset: any, stop: any, start:any }) {
        
    return (
      <div>
        {(props.status === 0) ? 
          <button id="start" className="stopwatch-btn stopwatch-btn-gre"
          onClick={props.start}>Start</button> : ""
        } 

        {(props.status === 1) ? 
        <div>
          <button className="stopwatch-btn stopwatch-btn-red"
                  onClick={props.stop}>Stop</button>
          <button className="stopwatch-btn stopwatch-btn-yel"
                  onClick={props.reset}>Reset</button>
        </div> : ""
       }

       {(props.status === 2) ?
       <div>
          <button className="stopwatch-btn stopwatch-btn-gre"
                  onClick={props.resume}> Resume </button>

          <button className="stopwatch-btn stopwatch-btn-yel"
                  onClick={props.reset}> Reset  </button>        
       </div> : ""
       }

      </div>               
    )
}

export default BtnComponent;