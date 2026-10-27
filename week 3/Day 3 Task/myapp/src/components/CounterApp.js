import { useState } from 'react';

function CounterApp() {
  const [count, setCount] = useState(0);

  return (
    <div className="card counter-card">
      <h2>Simple Counter</h2>

      <div className="counter">
        <button
          className="counter-btn"
          onClick={() => setCount(count - 1)}
        >
          −
        </button>

        <span className="count">{count}</span>

        <button
          className="counter-btn"
          onClick={() => setCount(count + 1)}
        >
          +
        </button>
      </div>
    </div>
  );
}

export default CounterApp;
