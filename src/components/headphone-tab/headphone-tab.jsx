import { useSelector } from "react-redux";
import { selectHeadphoneById } from "../../redux/entities/headphones/headphones-slice";
import { TabLink } from "../tab-link/tab-link";

export const HeadphoneTab = ({ id }) => {
  const headphone = useSelector((state) => selectHeadphoneById(state, id));

  if (!headphone) {
    return;
  }

  return <TabLink title={headphone.name} to={id} />;
};
