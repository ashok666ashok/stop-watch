import React, { useEffect, useRef, useState } from "react";
function Stopwatch() {
  const [isRunning, setIsRunning] = useState(false);
  const [elapsedTime, setElapsedTime] = useState(0);
  const intervalIdRef = useState(null);
  const startTimeRef = useRef(0);

  useEffect(() => {
    if(isRunning){
        intervalIdRef.current= setInterval(()=>{
            setElapsedTime(Date.now()-startTimeRef.current)
        },10)

    }
    return ()=>{
        clearInterval(intervalIdRef.current)
    }
  }, [isRunning]);

  const start = () => {
    setIsRunning(true);
    startTimeRef.current=Date.now()-elapsedTime;
    

  };

  const stop = () => {
    setIsRunning(false)
  };

  const reset = () => {
setElapsedTime(0)
setIsRunning(false)
  };
  const formatTime = () => {

    let hours=Math.floor(elapsedTime/(1000*60*60))
    let minutes=Math.floor(elapsedTime/(1000*60)%60)
    let seconds=Math.floor(elapsedTime/(1000)%60);
    let milliSeconds=Math.floor(elapsedTime%1000/10);
    hours=String(hours).padStart(2,'0')
    minutes=String(minutes).padStart(2,'0')
    seconds=String(seconds).padStart(2,'0')
    milliSeconds=String(milliSeconds).padStart(2,'0')
    return `${minutes}:${seconds}:${milliSeconds}`;
  };
  return (
    <>
    <div className="text-center fw-bolder sticky-top bg-light">
        <h4>STOP WATCH</h4>
    </div>
    
      <div className="main">

      <div className="stopWatch">
        <div className="time-wrapper mt-3 d-flex justify-content-evenly text-danger">
          {formatTime()}
        </div>
        <div className="button-wrapper mt-5 d-flex justify-content-evenly">
          <button onClick={start} className="btn btn-success">Start</button>
          <button onClick={stop} className="btn btn-danger">Stop</button>
          <button onClick={reset} className="btn btn-dark">Reset</button>
        </div>
      </div>
      </div>
    </>
  );
}

export default Stopwatch;
