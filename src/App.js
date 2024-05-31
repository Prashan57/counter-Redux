import "./App.css";

import React, { useState } from "react";
import { RootState, AppDispatch } from "./app/store.ts";
import { useDispatch, useSelector } from "react-redux";
import { changeName } from "./app/features/user/userSlice.ts";
import {
  increment,
  decrement,
  decrementByAmount,
  incrementAsync,
} from "./app/features/counter/counterSlice.ts";

function App() {
  const user = useSelector((state) => state.user.name);

  const count = useSelector((state) => state.counter.value);

  const dispatch = useDispatch();

  const [naam, setNaam] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(changeName(naam));
  };
  return (
    <div>
      <h1>HELLO</h1>
      <h2>
        {user} : {count}
      </h2>
      <h3>{naam}</h3>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(incrementAsync(50))}>
        incrementAsync
      </button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(decrementByAmount(50))}>
        decrementByAmount
      </button>
      <form onSubmit={handleSubmit}>
        <label>Username:</label>
        <input
          type="text"
          onChange={(e) => {
            setNaam(e.target.value);
            dispatch(changeName(naam));
          }}
        />
        <input type="submit" />
      </form>
    </div>
  );
}

export default App;
