import { useCounter } from "./counterContext";
import {
  Plus,
  Minus,
  RotateCcw,
} from "lucide-react";


function CounterButton () {
    const{dispatch} = useCounter();

   return (
    <div className="counter-buttons">

      <button
        className="counter-btn decrement-btn"
        onClick={() =>
          dispatch({ type: "DECREMENT" })
        }
      >
        <Minus size={18} />
        Decrement
      </button>

      <button
        className="counter-btn reset-btn"
        onClick={() =>
          dispatch({ type: "RESET" })
        }
      >
        <RotateCcw size={17} />
        Reset
      </button>

      <button
        className="counter-btn increment-btn"
        onClick={() =>
          dispatch({ type: "INCREMENT" })
        }
      >
        <Plus size={18} />
        Increment
      </button>

    </div>
   )
}

export default CounterButton;