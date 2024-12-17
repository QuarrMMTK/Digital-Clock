import React, { useState, useEffect } from "react";
import "./DigitalClock.css";

export default function DigitalClock() {
  const [currentTime, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);

    // Cleanup function to clear interval
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="digital-clock-container">
      <h1 className="digital-clock">{currentTime}</h1>
    </div>
  );
}
