// import { useEffect } from "react";
import { useEffect } from "react";
import { Counter } from "../counter/counter";
import { useCounter } from "./use-counter";

export const HeadphoneCounter = () => {
  const { value, increment, decrement } = useCounter();

  useEffect(() => {
    //бесконечный цикл без useCallback
    increment();
  }, [increment]);

  return <Counter value={value} increment={increment} decrement={decrement} />;
};
