import Digit from "./Digit";
import React, { useState } from 'react';

function App() {
  const [isDigital, setClockType] = useState(true)
  
  function getTime(segment) {
    let date = new Date()
    let time = date.getHours().toString().padStart(2, '0') + date.getMinutes().toString().padStart(2, '0')
    return time[segment]
  }

  function toggleClock() {
    setClockType(isDigital => !isDigital);
  }

  return (
    <div>
      <div className="App" onClick={toggleClock}>
        <Digit value={isDigital ? 10 : getTime(0)} />
        <Digit value={isDigital ? 10 : getTime(1)} />
        <Digit value={isDigital ? 10 : getTime(2)} />
        <Digit value={isDigital ? 10 : getTime(3)} />
      </div>
    </div>
  );
}

export default App;
