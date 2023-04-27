import { useState } from "react";
import "./counter.css";
function Counter({addCounterToProduct}) {
  const [counter, setCounter] = useState(1);

  const incrementCounter = () => {
    const value = counter + 1;
    setCounter(value);
    addCounterToProduct(1);
  };

  const decreaseCounter = () => {
    if (counter > 1) {
      const value = counter - 1;
      setCounter(value);
      addCounterToProduct(-1);
    }
  };

  return (
    <div className="counter">
      <div className="counter-body">
        <button className="counter-button" onClick={decreaseCounter}>
          -
        </button>
        {counter}kg
        <button className="counter-button" onClick={incrementCounter}>
          +
        </button>
      </div>
    </div>
  );
}
export default Counter;
