import { Button } from "../button/button";

export const Counter = ({ value, increment, decrement }) => {
  return (
    <div>
      <Button viewVariant="default" onClick={increment}>
        +
      </Button>
      {value}
      <Button onClick={decrement}>-</Button>
    </div>
  );
};
