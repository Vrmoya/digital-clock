import { useState, useEffect } from 'react';

const DigitalClock = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);
  const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
  const formattedDate = time.toLocaleDateString('es-ES', options);
  return (
    <div>
      <div>{formattedDate}</div>
      <div>{time.toLocaleTimeString()}</div>
    </div>
  );
};

export default DigitalClock;
