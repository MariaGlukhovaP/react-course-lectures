import { CodecsContainer } from "../components/codecs/codecs-container";

export const HeadphonesCodecsPage = async ({ params }) => {
  const { headphoneId } = await params;

  return <CodecsContainer headphoneId={headphoneId} />;
};
