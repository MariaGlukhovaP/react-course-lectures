import { useSelector } from "react-redux";
import { selectHeadphoneById } from "../../redux/entities/headphones/headphones-slice";
import { Codecs } from "./codecs";
import { getCodecsByRestaurantId } from "../../redux/entities/codecs/get-codecs-by-restaurant-id";
import { REQUEST_PENDING_STATUS } from "../../redux/UI/request/constants";
import { useRequest } from "../../redux/hooks/use-request";

export const CodecsContainer = ({ headphoneId }) => {
  const headphone = useSelector((state) =>
    selectHeadphoneById(state, headphoneId)
  );

  const getCodecsStatus = useRequest(getCodecsByRestaurantId, headphoneId);
  if (getCodecsStatus === REQUEST_PENDING_STATUS) {
    return "...loading";
  }

  if (!headphone?.codecs) {
    return null;
  }

  return <Codecs codecsIds={headphone.codecs} />;
};
