import Digit from "./Digit";
import React, { useState, useEffect } from 'react';

function App() {
  const [isDigital, setClockType] = useState(true)
  const [digitArray, setDigitArray] = useState([0, 0, 0, 0,])

  function getTime() {
    let date = new Date()
    let time = date.getHours().toString().padStart(2, '0')
      + date.getMinutes().toString().padStart(2, '0')
    setDigitArray(() => {
      return [time[0], time[1], time[2], time[3]]
    })
  }

  function toggleClock() {
    setClockType(isDigital => !isDigital);
  }

  useEffect(() => {
    const timerID = setInterval(() => getTime(), 15000)
    return () => {
      clearInterval(timerID)
    }
  }, [])

  function getDigit(index) {
    return isDigital ? 10 : digitArray[index]
  }

  return (
    <div>
      <div className="App" onClick={toggleClock}>
        <Digit value={getDigit(0)} />
        <Digit value={getDigit(1)} />
        <Digit value={getDigit(2)} />
        <Digit value={getDigit(3)} />
      </div>
    </div>
  );
}

export default App;
