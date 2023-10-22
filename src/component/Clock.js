import React, { useState, useEffect } from 'react';

function Clock() {
  const [dateTime, setDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setDateTime(new Date());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const time = dateTime.toLocaleTimeString();
  const date = dateTime.toLocaleDateString();

  return (
    <div>
      <h4>{time}</h4>
      <h3>{date}</h3>
    </div>
  );
}

export default Clock;
