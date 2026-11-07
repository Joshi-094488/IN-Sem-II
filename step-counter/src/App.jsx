import React, { useState } from 'react';
import './App.css';

function App() {

  const [steps, setSteps] = useState(0);

  const addOne = () => {
    setSteps(steps + 1);
  };

  const addTen = () => {
    setSteps(steps + 10);
  };

  const reset = () => {
    setSteps(0);
  };

  return (
    <div className="container">

      <h1>Step Counter</h1>

      <h2>{steps}</h2>

      <p>Total Number of Steps</p>

      <button onClick={addOne}>+1</button>

      <button onClick={addTen}>+10</button>

      <button onClick={reset}>Reset</button>

    </div>
  );
}

export default App;