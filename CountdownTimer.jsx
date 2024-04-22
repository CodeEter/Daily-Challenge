import React, { useState, useEffect } from 'react';
import moment from 'moment';

function CountdownTimer({ endDate }) {
  const [remainingTime, setRemainingTime] = useState(calculateTimeRemaining(endDate));
  const [intervalId, setIntervalId] = useState(null);

  useEffect(() => {
    //Start the interval to update the reamining time very second
    const id = setInterval(() => {
      const timeRemaining = calculateTimeRemaining(endDate);
      setRemainingTime(timeRemaining);

      if (timeRemaining === "00:00:00:00") {
        clearInterval(intervalId);
      }
    }, 1000);

    //Store the interval ID for cleanup
    setIntervalId(id);

    //Cleanup function to clear the interval on component unmount
    return () => {
      clearInterval(intervalId);
    };
  }, [endDate]); //Re-run effect when endDate changes

  function calculateTimeRemaining(endDate) {
    if (!endDate) {
      return "00:00:00:00";
    }

    const utcEndDate = moment.utc(endDate);
    const localEndDate = moment(utcEndDate).local();
    const currentTime = moment();

    if (localEndDate.isBefore(currentTime)) {
      return "00:00:00:00";
    }

    const timeDifference = moment.duration(localEndDate.diff(currentTime));
    const days = timeDifference.days();
    const hours = timeDifference.hours();
    const minutes = timeDifference.minutes();
    const seconds = timeDifference.seconds();

    return `${days}:${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }

  return (
    <>
      {remainingTime}
    </>
  );
}

export default CountdownTimer;