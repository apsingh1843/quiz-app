import React, {useState, useEffect} from 'react';
import { Redirect } from 'react-router-dom';

function Timer() {
  const [seconds, setSeconds] = React.useState(100);

  React.useEffect(() => {
    if (seconds > 0) {
      setTimeout(() => setSeconds(seconds - 1), 1000);
    } else {
      setSeconds('TIME Up!');
    }
  });



  return (
      <div>
        <b>{seconds} seconds left</b>
        {seconds == 'TIME Up!' ? <Redirect to="/home"/> : null  }
      </div>
  );
}
export default Timer;
