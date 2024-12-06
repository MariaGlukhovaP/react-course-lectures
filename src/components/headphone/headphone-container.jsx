import { useSelector } from "react-redux";
import { selectHeadphoneById } from "../../redux/entities/headphones/headphones-slice";
import { Headphone } from "./headphone";

export const HeadphoneContainer = ({ id }) => {
  const headphone = useSelector((state) => selectHeadphoneById(state, id));

  if (!headphone) {
    return null;
  }

  const { name, brand } = headphone;

  return <Headphone name={name} brand={brand} id={id} />;
};
