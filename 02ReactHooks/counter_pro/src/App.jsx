import { useState } from "react";
import "./App.css";

function App() {
  let [counter, setCounter] = useState(0);

  // let counter = 15;

  const addValue = () => {
    if (counter >= 20) {
      setCounter(counter);
    } else {
      setCounter(counter + 1);
    }
  };

  const removeValue = () => {
    if (counter <= 0) {
      setCounter(counter);
    } else {
      setCounter(counter - 1);
    }
  };

  return (
    <>
      <h1>React</h1>
      <h2>Counter value: {counter}</h2>
      <button type="button" onClick={addValue}>
        Add value
      </button>
      <br />
      <button type="button" onClick={removeValue}>
        Remove value
      </button>
    </>
  );
}

export default App;
