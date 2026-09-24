import { useState } from "react";
import { Sun, Moon, Plus, Minus, RotateCcw, Hash } from "lucide-react";
import "./Task4.css";

function Task4() {
  const [count, setCount] = useState(0);
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const reset = () => {
    setCount(0);
  };

  const toggleTheme = () => {
    setIsDarkTheme(!isDarkTheme);
  };

  return (
    <div className={isDarkTheme ? "task4 dark" : "task4 light"}>
      <div className="task4-header">
        <div>
          <p className="task4-label">TASK 04</p>
          <h2>useState Hook</h2>
          <p className="task4-description">
            Counter and Theme Toggle using React useState
          </p>
        </div>

        <button className="theme-toggle" onClick={toggleTheme}>
          {isDarkTheme ? (
            <>
              <Sun size={18} />
              Light Theme
            </>
          ) : (
            <>
              <Moon size={18} />
              Dark Theme
            </>
          )}
        </button>
      </div>

      <div className="task4-content">
        {/* Counter */}
        <div className="task4-card">
          <div className="card-icon">
  <Hash size={22} />
</div>

          <p className="card-label">COUNTER</p>

          <h3>Counter Application</h3>

          <div className="count">{count}</div>

          <div className="counter-buttons">
           <button
  className="btn decrement"
  onClick={decrement}
>
  <Minus size={16} />
  Decrement
</button>

            <button
  className="btn reset"
  onClick={reset}
>
  <RotateCcw size={16} />
  Reset
</button>

            <button
  className="btn increment"
  onClick={increment}
>
  <Plus size={16} />
  Increment
</button>
          </div>

          <p className="current-count">
            Current Count: <strong>{count}</strong>
          </p>
        </div>

        {/* Theme */}
        <div className="task4-card">
          <span className="status-icon">
  {isDarkTheme ? <Moon size={20} /> : <Sun size={20} />}
</span>

          <p className="card-label">THEME TOGGLE</p>

          <h3>{isDarkTheme ? "Dark Theme" : "Light Theme"}</h3>

          <p className="theme-text">
            Click the button below to switch between light and dark themes.
          </p>

          <div className="theme-status">
            <span className="status-icon">
  {isDarkTheme ? <Moon size={20} /> : <Sun size={20} />}
</span>

            <div>
              <small>Current Theme</small>

              <strong>{isDarkTheme ? "Dark Mode" : "Light Mode"}</strong>
            </div>
          </div>

          <button
  className="switch-theme"
  onClick={toggleTheme}
>
  {isDarkTheme ? (
    <>
      <Sun size={17} />
      Switch to Light
    </>
  ) : (
    <>
      <Moon size={17} />
      Switch to Dark
    </>
  )}
</button>
        </div>
      </div>

      <div className="concepts">
        <p>CONCEPTS USED</p>

        <div className="concept-list">
          <span>useState</span>
          <span>State Management</span>
          <span>Event Handling</span>
          <span>Boolean State</span>
          <span>Conditional Rendering</span>
          <span>Dynamic Styling</span>
        </div>
      </div>
    </div>
  );
}

export default Task4;
