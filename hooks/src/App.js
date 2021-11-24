import { useReducer, useState, useCallback } from 'react';
import './App.css';

function init(initialCount) {
  return {count: initialCount};
}

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1};
    case 'decrement':
      return {count: state.count - 1};
    case 'reset':
      return init(action.payload)
    default:
      return state;
  }
}

function Counter({initialValue}) {
  const [state, dispatch] = useReducer(reducer, initialValue, init);
  return (
    <>
      Count: {state.count}
      <button onClick={() => dispatch({type: 'decrement'})}>-</button>
      <button onClick={() => dispatch({type: 'increment'})}>+</button>
      <button onClick={() => dispatch({type: 'reset', payload: initialValue })}>RESET</button>
    </>
  );
}

function Counter2({ count, increment, decrement }) {
  return (
    <>
      Count: {count}
      <button onClick={() => decrement()}>-</button>
      <button onClick={() => increment()}>+</button>
    </>
  );
}


function App() {
  const [count, setCount] = useState(0);
  const increment = useCallback(
    () => {
      setCount(c => c + 1);
    },
    [],
  );
  const decrement = useCallback(
    () => {
      setCount(c => c - 1);
    },
    [],
  );
  return (
    <>
      <Counter initialValue={10} />
      <Counter2 count={count} increment={increment} decrement={decrement} />
    </>
  );
}

export default App;
