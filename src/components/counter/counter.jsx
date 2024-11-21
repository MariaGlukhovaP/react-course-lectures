import { useEffect } from "react";
import { useCounter } from "./use-counter";

export const Counter = () => {
  const { value, increase, decrease } = useCounter();

  useEffect(() => {
    console.log(`effect ${value}`); //effect

    return () => {
      console.log(`cleanup ${value}`); //cleanup effect
    };
  }, [value]);

  // useEffect(() => {
  //   const callback = () => console.log("scroll");

  //   window.addEventListener("scroll", callback);

  //   return () => {
  //     window.removeEventListener("scroll", callback);
  //   };
  // });

  return (
    <div>
      <button onClick={increase}>+</button>
      {value}
      <button onClick={decrease}>-</button>
    </div>
  );
};
