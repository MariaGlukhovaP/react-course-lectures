import { useSelector } from "react-redux";
import { selectHeadphoneById } from "../../redux/entities/headphones/headphones-slice";
import { HeadphoneTab } from "./headphone-tab";

export const HeadphoneTabContainer = ({ id }) => {
  const headhpone = useSelector((state) => selectHeadphoneById(state, id));

  // const navigate = useNavigate();

  // const onClick = () => navigate(`headphone/${id}`)

  if (!headhpone) {
    return;
  }

  return <HeadphoneTab title={headhpone.name} id={id} />;
};
