import { useSelector } from "react-redux";

import { Tab } from "../tab/tab";
import { selectHeadphoneById } from "../../redux/entities/headphones/headphones-slice";

export const HeadphoneTabContainer = ({ id, onClick, isActive }) => {
  const headhpone = useSelector((state) => selectHeadphoneById(state, id));

  if (!headhpone) {
    return;
  }

  return <Tab title={headhpone.name} onClick={onClick} isActive={isActive} />;
};
