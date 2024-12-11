import { Counter } from "../counter/counter";
import { useForm } from "./use-form";
import { Button } from "../button/button";

export const ReviewForm = ({ onSubmit }) => {
  const { form, setText, incrementRating, decrementRating, clear } = useForm();

  const { text, rating } = form;

  return (
    <div>
      <h3>Review Form</h3>
      <form onSubmit={(e) => e.preventDefault()}>
        <div>
          <span>Text</span>
          <input
            type="text"
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
        </div>

        <Counter
          value={rating}
          decrement={decrementRating}
          increment={incrementRating}
        />
        <Button onClick={clear}>clear</Button>
        <Button
          onClick={() =>
            onSubmit({ text, rating, user: "hr83h29h9h9u12h9213" })
          }
        >
          submit
        </Button>
      </form>
    </div>
  );
};
