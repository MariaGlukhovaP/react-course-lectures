// import { useEffect } from "react";
import { useEffect } from "react";
import { Counter } from "../counter/counter";
import { useCounter } from "./use-counter";

export const HeadphoneCounter = () => {
  const { value, increment, decrement, stop } = useCounter();

  useEffect(() => {
    //бесконечный цикл без useCallback
    increment();
  }, [increment]);

  return (
    <div>
      <Counter value={value} increment={increment} decrement={decrement} />{" "}
      <button onClick={stop}>stop</button>
    </div>
  );
};
