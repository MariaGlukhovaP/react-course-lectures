import { HeadphoneTabContainer } from "../headphone-tab/headphone-tab-container";

export const HeadphonesTabs = ({ headphonesIds }) => {
  return (
    <div>
      <h3>Choose a headphone</h3>
      {headphonesIds.map((id) => (
        <HeadphoneTabContainer key={id} id={id} />
      ))}
    </div>
  );
};
