import { useForm } from "./use-form";

export const ReviewForm = () => {
  const { form, setName, setText, setAddress } = useForm();

  const { name, text, address } = form;

  return (
    <div>
      <form>
        <div>
          <span>Name</span>
          <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
          />
        </div>

        <div>
          <span>Text</span>
          <input
            type="text"
            value={text}
            onChange={(event) => setText(event.target.value)}
          />
        </div>

        <div>
          <span>Address</span>
          <input
            type="text"
            value={address}
            onChange={(event) => setAddress(event.target.value)}
          />
        </div>
      </form>
    </div>
  );
};
