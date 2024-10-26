import React, { useState } from "react";
import { useAppSelector, useAppDispatch } from "../../app/hooks";
import { increment, decrement, incrementAsync } from "./counterSlice";

const Counter: React.FC = () =>{
  const count = useAppSelector((state)=>state.counter.value);
  const dispatch = useAppDispatch();
  const [ incrementAmount, setIncremenAmount ] = useState<number>(1);

  return(
    <div>
      <h1>Counter: {count}</h1>
      <button onClick={()=>dispatch(increment())}>Increment</button>
      <button onClick={()=>dispatch(decrement())}>Decrement</button>
      <input
        type="number"
        value = {incrementAmount}
        onChange={(e)=> setIncremenAmount(Number(e.target.value))}
      />
      <button onClick={() => dispatch(incrementAsync(incrementAmount))}>
        Increment Async by Amount
      </button>
    </div>
  );
};
export default Counter;