import { Counter } from "../counter/counter";
import { useCounter } from "./use-counter";

export const HeadphoneCounter = () => {
  const { value, increment, decrement } = useCounter();

  return <Counter value={value} increment={increment} decrement={decrement} />;
};
