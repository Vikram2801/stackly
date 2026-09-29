import { useReducer } from "react";
import { createContext, useContext } from "react";

const counterContext = createContext();

const intialState ={count:0};

function counterReducer(state,action){
    switch (action.type){
        case "INCREMENT":
        return{
            ...state,
            count: state.count + 1
        }

        case "DECREMENT":
        return{
            ...state,
            count: state.count - 1
        }
        case "RESET":
        return{
            ...state,
            count: 0
        }
        
        default:
            return state;

    }
};

export function CounterProvider({ children }) {
  const [state, dispatch] = useReducer(
    counterReducer,
    intialState
  );

  return (
    <counterContext.Provider value={{ state, dispatch }}>
      {children}
    </counterContext.Provider>
  );
}

export function useCounter() {
  return useContext(counterContext);
}