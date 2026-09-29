import { CounterProvider } from "./counterContext";
import Counter from "./counter";
import CounterButton from "./counterButton";
import { Layers, GitBranch, Share2 } from "lucide-react";
import "./Task7.css"

function Task7Content() {
  return (
    <div className="task7">
      <div className="task7-header">
        <div>
          <p className="task7-label">TASK 07</p>

          <h2>useContext & useReducer</h2>

          <p className="task7-description">
            Shared counter state using Context and Reducer
          </p>
        </div>
      </div>

      <div className="task7-card">

        <div className="counter-icon">
          <Layers size={24} />
        </div>

        <p className="card-label">
          USE REDUCER
        </p>

        <h3>
          Counter Application
        </h3>

        <p className="card-description">
          Counter state is managed using useReducer
          and shared between components using useContext.
        </p>
        <Counter />

        <CounterButton />

      </div>

    </div>
  );
}

function Task7() {
  return (
    <CounterProvider>
      <Task7Content />
    </CounterProvider>
  );
}

export default Task7;