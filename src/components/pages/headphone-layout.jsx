import { HeadphoneContainer } from "./../headphone/headphone-container";

export const HeadphoneLayout = async ({ params, children }) => {
  const { headphoneId } = await params;

  return (
    <div>
      <HeadphoneContainer id={headphoneId} />
      {children}
    </div>
  );
};
