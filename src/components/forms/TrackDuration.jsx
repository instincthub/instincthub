import React, { useState, useEffect } from 'react';

const TrackDuration = () => {

  const [duration, setDuration] = useState(0);

useEffect(() => {
  let intervalId;
  let startTime;

  const handleVisibilityChange = () => {
    if (document.visibilityState === 'visible') {
      startTime = Date.now();
      intervalId = setInterval(() => {
        setDuration(duration => duration + 1);
      }, 1000);
    } else {
      clearInterval(intervalId);
      setDuration(0)
    }
  };

  document.addEventListener('visibilitychange', handleVisibilityChange);

  return () => {
    document.removeEventListener('visibilitychange', handleVisibilityChange);
    clearInterval(intervalId);
  };
  
}, []);



  return <div>Duration: {duration} seconds</div>;
};

export default TrackDuration;
