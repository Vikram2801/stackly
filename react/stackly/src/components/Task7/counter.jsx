import { useCounter } from "./counterContext";

function Counter() {
  const { state } = useCounter();

  return (
    <div className="counter-display">
      <span>Current Count</span>

      <strong>{state.count}</strong>
    </div>
  );
}
 export default Counter;