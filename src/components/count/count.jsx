// import { useState } from "react";

// export const Count = ({ onChange }) => {
//   const [value, setValue] = useState(0);

//   const increase = () => {
//     setValue((currentValue) => currentValue + 1);
//     console.log(value);
//   };

//   const decrease = () => {
//     setValue(value - 1);
//     onChange(value);
//   };

//   return (
//     <div>
//       <button onClick={increase}>+</button>
//       {value}
//       <button onClick={decrease}>-</button>
//     </div>
//   );
// };

import { useCount } from "./use-count";

export const Count = () => {
  const { value, increase, decrease } = useCount();

  return (
    <div>
      <button onClick={increase}>+</button>
      {value}
      <button onClick={decrease}>-</button>
    </div>
  );
};
