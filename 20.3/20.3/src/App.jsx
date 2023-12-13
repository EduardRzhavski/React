import React, { useState } from 'react';

const TimeConverter = () => {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);
  const [hours, setHours] = useState(0);

  const handleSecondsChange = (event) => {
    const newSeconds = parseInt(event.target.value) || 0;
    setSeconds(newSeconds);
    setMinutes(Math.floor(newSeconds / 60));
    setHours(Math.floor(newSeconds / 3600));
  };

  const handleMinutesChange = (event) => {
    const newMinutes = parseInt(event.target.value) || 0;
    setMinutes(newMinutes);
    setSeconds(newMinutes * 60);
    setHours(Math.floor(newMinutes / 60));
  };

  const handleHoursChange = (event) => {
    const newHours = parseInt(event.target.value) || 0;
    setHours(newHours);
    setMinutes(newHours * 60);
    setSeconds(newHours * 3600);
  };

  return (
    <div>
      <label>
        Seconds:
        <input type="text" value={seconds} onChange={handleSecondsChange} />
      </label>
      <br />
      <label>
        Minutes:
        <input type="text" value={minutes} onChange={handleMinutesChange} />
      </label>
      <br />
      <label>
        Hours:
        <input type="text" value={hours} onChange={handleHoursChange} />
      </label>
    </div>
  );
};

export default TimeConverter;

