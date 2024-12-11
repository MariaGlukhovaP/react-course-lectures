import { Codec } from "../codec/codec";

export const Codecs = ({ codecs }) => {
  return (
    <div>
      <h3>Codecs</h3>
      {codecs.map(({ type, id }) => (
        <li key={id}>
          <Codec type={type} />
        </li>
      ))}
    </div>
  );
};
