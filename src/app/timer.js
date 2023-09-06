"use client";

import { useEffect, useState } from "react";

export default function Stopwatch(props) {
  const [time, setTime] = useState(0);
  // const [running, setRunning] = useState(props.started);
  useEffect(() => {
    let interval;
    if (props.started) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime + 10);
      }, 10);
      setTime(0);
    } else if (!props.started) {
      clearInterval(interval);
    }
    props.func(time);
    return () => clearInterval(interval);
  }, [props.started, props.showResult]);
  return (
    <div className="stopwatch">
      <div className="numbers">
        <span>{("0" + Math.floor((time / 60000) % 60)).slice(-2)}:</span>
        <span>{("0" + Math.floor((time / 1000) % 60)).slice(-2)}:</span>
        <span>{("0" + ((time / 10) % 100)).slice(-2)}</span>
      </div>
    </div>
  );
}
