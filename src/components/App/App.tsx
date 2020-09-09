import React, { useState } from 'react'
import './App.css';
// import Timer from '../Timer/Timer'

import BtnComponent from '../BtnComponent';
import DisplayComponent from '../DisplayComponent';


 function App() {

   const [time, setTime] = useState({ms: 0, s:0, m:0, h:0});
   const [interval, setInterval] = useState();
   const [status, setStatus] = useState(0);

   const start = () => {
     run();
     setStatus(1);
     const myInterval:any = setInterval(run, 10);
     setInterval(myInterval);
   }

   let updateMs = time.ms, updateS = time.s, updateM = time.m, updateH = time.h;

   const run: () => void = () => {

     if(updateM === 60) {
       updateH++;
       updateM = 0;
     }

     if(updateS === 60) {
       updateM++;
       updateS = 0;
     }

     if(updateMs === 100) {
       updateS++;
       updateMs = 0
     }

     updateMs++;

     return setTime({ ms: updateMs, s:updateS, m:updateM, h: updateH })
   };

   const stop = () => {
     clearInterval(interval);
     setStatus(2);
   }

   const reset = () => {
     clearInterval(interval);
     setStatus(0);
     setTime({ ms: 0, s:0, m:0, h:0 })
   };

   const resume = () => start();

   return (
     <div className="main-section">
       <p> React Timer </p>
       <div className="clock-holder">
         <div className="stopwatch">
           <DisplayComponent time={time}/>
           <BtnComponent status={status} resume={resume} reset={reset} stop={stop} start={start}/>
         </div>
       </div>
     </div>
   )
 }





 export default App;