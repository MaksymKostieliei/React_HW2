import './App.css';
import { useEffect, useState } from 'react';
import { getPadTime } from './helpers/getPadTime';

function App() {
  const [time, setTime] = useState(0);
  const [isCounting, setIsCounting] = useState(false);

  const hours = getPadTime(Math.floor(time / 3600));
  const minutes = getPadTime(Math.floor((time - (hours * 3600)) / 60));
  const seconds = getPadTime(time % 60);

  useEffect(() => {
    const interval = setInterval(() => {
      isCounting && setTime((time) => time = time + 1);
    }, 1000);
    return () => {
      clearInterval(interval)
    }
  }, [isCounting]);

  const handleStart = () => {
    setIsCounting(true);
  };

  const handleStop = () => {
    setIsCounting(false);
  };

  const handleReset = () => {
    setIsCounting(false);
    setTime(0);
  };
  
  
  
  return (
    <div className="App">
      <div className='timer'>
        <span>{hours}</span>
        <span>:</span>
        <span>{minutes}</span>
        <span>:</span>
        <span>{seconds}</span>
      </div>
      <div className='buttons'>
        <button onClick={handleStart}>Start</button>     
        <button onClick={handleStop}>Stop</button>
        <button onClick={handleReset}>Reset</button>
      </div>
    </div>
    
  );
 
}

export default App;
