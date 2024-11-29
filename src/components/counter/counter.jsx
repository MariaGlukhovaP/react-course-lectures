import { Button } from "../button/button";

export const Counter = ({ value, increment, decrement }) => {
  return (
    <div>
      <Button viewVariant="big" onClick={increment}>
        +
      </Button>
      {value}
      <Button onClick={decrement}>-</Button>
    </div>
  );
};
