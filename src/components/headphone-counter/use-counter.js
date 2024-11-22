import { useCallback, useState } from "react";

export const useCounter = ({ min = 0, max = 5 } = {}) => {
  const [value, setValue] = useState(min);

  const increment = useCallback(
    () => setValue((currentValue) => Math.min(currentValue + 1), max),
    [max]
  );

  const decrement = useCallback(
    () => setValue((currentValue) => Math.max(currentValue - 1), min),
    [min]
  );

  return {
    value,
    increment,
    decrement,
  };
};
