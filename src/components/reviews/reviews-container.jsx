import { useSelector } from "react-redux";
import { selectHeadphoneById } from "../../redux/entities/headphones/headphones-slice";
import { Reviews } from "./reviews";
import { useRequest } from "../../redux/hooks/use-request";
import { getUsers } from "../../redux/entities/users/get-users";
import { getReviewsByHeadphoneId } from "../../redux/entities/reviews/get-reviews-by-headphone-id";
import { REQUEST_PENDING_STATUS } from "../../redux/UI/request/constants";

export const ReviewsContainer = ({ headphoneId }) => {
  const headphone = useSelector((state) =>
    selectHeadphoneById(state, headphoneId)
  );

  const getReviewsStatus = useRequest(getReviewsByHeadphoneId, headphoneId);
  const getUsersStatus = useRequest(getUsers);

  const isLoading =
    getReviewsStatus === REQUEST_PENDING_STATUS ||
    getUsersStatus === REQUEST_PENDING_STATUS;

  if (isLoading) {
    return "...loading";
  }

  if (!headphone?.reviews) {
    return null;
  }

  return <Reviews reviewsIds={headphone.reviews} />;
};
