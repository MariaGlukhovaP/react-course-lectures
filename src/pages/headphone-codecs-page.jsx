import { useParams } from "react-router-dom";
import { CodecsContainer } from "../components/codecs/codecs-container";

export const HeadphonesCodecsPage = () => {
  const { headphoneId } = useParams();

  return <CodecsContainer headphoneId={headphoneId} />;
};
