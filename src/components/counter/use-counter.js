import { useState } from "react";

export const useCounter = ({ min = 0, max = 5 } = {}) => {
  const [value, setValue] = useState(min);

  const increase = () => setValue(Math.min(value + 1), max);
  const decrease = () => setValue(Math.max(value - 1), min);

  return {
    value,
    increase,
    decrease,
  };
};
