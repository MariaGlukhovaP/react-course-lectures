import { useParams } from "react-router-dom";
import { HeadphoneContainer } from "../headphone/headphone-container";

export const HeadphonePage = () => {
  const { headphoneId } = useParams();

  // const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams.get("id"));

  return <HeadphoneContainer id={headphoneId} />;
};
