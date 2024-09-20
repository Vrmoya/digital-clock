import { useState, useRef } from 'react';

const Stopwatch = () => {
  const [time, setTime] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const timerRef = useRef(null);

  const start = () => {
    if (!isRunning) {
      setIsRunning(true);
      timerRef.current = setInterval(() => setTime(prev => prev + 1), 10); // Actualiza cada 10 milisegundos
    }
  };

  const stop = () => {
    if (isRunning) {
      clearInterval(timerRef.current);
      setIsRunning(false);
      // Aquí puedes agregar la lógica para guardar el tiempo en la base de datos
    }
  };

  const reset = () => {
    clearInterval(timerRef.current);
    setIsRunning(false);
    setTime(0);
  };

  const formatTime = (time) => {
    const centiseconds = (`0${time % 100}`).slice(-2);
    const seconds = (`0${Math.floor(time / 100) % 60}`).slice(-2);
    const minutes = (`0${Math.floor(time / 6000) % 60}`).slice(-2);
    const hours = (`0${Math.floor(time / 360000)}`).slice(-2);
    return `${hours}:${minutes}:${seconds}.${centiseconds}`;
  };

  return (
    <div>
      <div>{formatTime(time)}</div>
      <button onClick={start}>Start</button>
      <button onClick={stop}>Stop</button>
      <button onClick={reset}>Reset</button>
    </div>
  );
};

export default Stopwatch;
