import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState, AppDispatch } from "../state/store";
import {
  decrement,
  increment,
  incrementByAmount,
  incrementAsync,
} from "../state/counter/counterSlice.ts";

const Counter = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch<AppDispatch>();

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => dispatch(increment())}>Increment</button>
      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(incrementByAmount(5))}>By Amount</button>
      <button onClick={() => dispatch(incrementAsync(10))}>
        Increment Async
      </button>
    </div>
  );
};

export default Counter;
