import { Outlet, useParams } from "react-router-dom";
import { HeadphoneContainer } from "./../components/headphone/headphone-container";

export const HeadphonePage = () => {
  const { headphoneId } = useParams();

  // const [searchParams, setSearchParams] = useSearchParams();
  // console.log(searchParams.get("id"));

  return (
    <div>
      <HeadphoneContainer id={headphoneId} />
      <Outlet />
    </div>
  );
};
