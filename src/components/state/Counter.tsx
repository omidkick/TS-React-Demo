import { useReducer } from "react";

type State = {
  count: number;
};

// use discriminated union type for Action:
type UpdateAction = {
  type: "increment" | "decrement";
  payload?: number;
};

type RestAction = {
  type: "reset";
};
type Action = UpdateAction | RestAction;

const initialState: State = { count: 0 };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "increment":
      return { count: state.count + (action.payload ?? 1) }; // add payload if exists
    case "decrement":
      return { count: Math.max(0, state.count - (action.payload ?? 1)) }; // never below 0
    case "reset":
      return initialState;
    default:
      return state;
  }
}

export default function CounterTS() {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="counter-card">
      <h2 className="font-bold text-lg mb-md text-gray-800">Smart Counter</h2>

      {/* Counter Value */}
      <div className="counter-value">{state.count}</div>

      {/* Button Group */}
      <div className="counter-actions mt-4">
        <button
          className="btn btn--primary btn--sm"
          onClick={() => dispatch({ type: "increment" })}
        >
          +1
        </button>

        <button
          className="btn btn--secondary btn--sm"
          onClick={() => dispatch({ type: "decrement" })}
        >
          -1
        </button>

        <button
          className="btn btn--primary btn--sm"
          onClick={() => dispatch({ type: "increment", payload: 2 })}
        >
          +2
        </button>
        <button
          className="btn btn--secondary btn--sm"
          onClick={() => dispatch({ type: "decrement", payload: 2 })}
        >
          -2
        </button>

        <button
          className="btn btn--danger btn--sm"
          onClick={() => dispatch({ type: "reset" })}
        >
          Reset
        </button>
      </div>
    </div>
  );
}
